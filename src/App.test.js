import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PostForm from './features/post/PostForm';

// let container = null;
// beforeEach(() => {
//     // setup a DOM element as a render target
//     container = document.createElement("div");
//     document.body.appendChild(container);
// });

// afterEach(() => {
//     // cleanup on exiting
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
// });


test('Button add should be disabled when input is empty', () => {
    const postForm = render(<PostForm />);
    const button = postForm.getByTestId('button-add');
    expect(button.disabled).toBe(true);
});

test('renders post form', () => {
    const postForm = render(<PostForm />);
    const input = postForm.getByTestId('input-add');
    const button = postForm.getByTestId('button-add');
    fireEvent.change(input, { target: { value: 'card title' } });
    fireEvent.click(button);
    const cardHeader = postForm.getByTestId('cardheader-0');
    expect(cardHeader.innerHTML).toBe('card title');
});