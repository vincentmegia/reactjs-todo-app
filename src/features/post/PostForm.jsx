import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { Post } from './Post';
import { useState } from 'react';
import  './PostForm.module.css';
import { createPost } from './Post.model';
import _uniqueId from 'lodash/uniqueId';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, selectPosts } from './postFormSlice';


function getRowKey() {
    return _uniqueId('row-');
}

function getColKey() {
    return _uniqueId('col-');
}

/**
 * 
 */
export function PostForm() {    
    const [postTitle, setPostTitle] = useState('');
    const dispatch = useDispatch();
    const posts = useSelector(state => state.postform.posts);

    const onAddButton = () => {
        dispatch(addPost(createPost(posts.length, postTitle)));
        setPostTitle('');
    }

    const generateColumns = posts.map((post, index) => {
        return <Col key={getColKey()}>
            <Post post={post}/>
        </Col>});

    const generateRows = (columns) => {
        let rows = [];
        let list = [];
        for (let index = 0; index < columns.length; index++) {
            list.push(columns[index]);
            if ((index + 1) % 3 === 0 && index !== 0) {
                rows.push(<Row key={getRowKey()}>{list}</Row>);
                list = [];
            } else if (index === posts.length - 1) {
                rows.push(<Row key={getRowKey()}>{list}</Row>);
            }
        }
        return rows;
    }

    const onPostTitleChangeHandler = (event) => {
        setPostTitle(event.target.value);
    }

    const onEnterHandler = (event) => {
        if (event.keyCode === 13) {
            onAddButton();
        }
    }

    return (
        <div className="post-main">
            <Container>
                <Row key="-1">
                    <Col key="-1" md={{ span: 0, offset: 0}}>
                        <InputGroup className="mb-3" style={{width: "100vh"}}>
                            <InputGroup.Prepend>
                                <Button data-testid="button-add"
                                    variant="outline-secondary" 
                                    onClick={onAddButton}
                                    disabled={postTitle.length === 0}>Add</Button>
                            </InputGroup.Prepend>
                            <FormControl 
                                data-testid="input-add"
                                aria-describedby="basic-addon1" 
                                placeholder="Add post title" 
                                value={postTitle} 
                                onKeyUp={onEnterHandler}
                                onChange={onPostTitleChangeHandler}/>
                        </InputGroup>
                    </Col>
                </Row>
                <br/>
                <br/>
                {generateRows(generateColumns)}
            </Container>
        </div>
    )
}

export default PostForm;