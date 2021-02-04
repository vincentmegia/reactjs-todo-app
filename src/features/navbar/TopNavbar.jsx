import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectCount
} from './topNavbarSlice';
import { filterPost } from '../post/postFormSlice';
import styles from './TopNavbar.module.css';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

export function TopNavbar() {
    const dispatch = useDispatch();
    // const selectedPost = useSelector(state => state.postform.posts.filter(p => p.id === props.post.id));
    const [searchKey, setSearchKey] = useState('');

    const onSearchHandler = () => {
        
    }

    const onSearchKeyChange = (event) => {
        setSearchKey(event.target.value);
        dispatch(filterPost({searchKey: event.target.value}));
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Todo List</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Form inline>
                        <FormControl type="text" 
                                    placeholder="Search" 
                                    className="mr-sm-2" 
                                    value={searchKey} 
                                    onChange={onSearchKeyChange}/>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}