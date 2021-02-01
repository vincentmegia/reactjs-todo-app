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
    const [searchKey, setSearchKey] = useState('');

    const onSearchHandler = () => {
        dispatch(filterPost({searchKey: searchKey}));
    }

    const onSearchKeyChange = (event) => {
        setSearchKey(event.target.value);
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
                        <Button variant="outline-success" onClick={onSearchHandler}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}