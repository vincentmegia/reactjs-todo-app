import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PostForm from './features/post/PostForm';
import store from './app/store';
import { Provider } from 'react-redux';

let postForm = null;
beforeEach(() => {
    postForm = render(
        <Provider store={store}>
            <PostForm />
        </Provider>
    );
});

afterEach(() => {
    // cleanup on exiting
    postForm = null;
});


test('Button add should be disabled when input is empty', () => {
    const button = postForm.getByTestId('button-add');
    expect(button.disabled).toBe(true);
});

test('renders post form', () => {
    const input = postForm.getByTestId('input-add');
    const button = postForm.getByTestId('button-add');
    fireEvent.change(input, { target: { value: 'card title' } });
    fireEvent.click(button);
    const cardHeader = postForm.getByTestId('cardheader-0');
    expect(cardHeader.innerHTML).toBe('card title');
});

test('After adding a post input title should be blank', () => {
    const input = postForm.getByTestId('input-add');
    const button = postForm.getByTestId('button-add');
    fireEvent.change(input, { target: { value: 'card title' } });
    fireEvent.click(button);
    expect(input.value).toBe('');
});