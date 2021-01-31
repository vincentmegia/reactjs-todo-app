import { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { WindowButtons } from '../window-buttons/WindowButtons';
import { updatePost } from './postFormSlice';
import styles from './PostForm.module.css';

export function Post(props) {
    const dispatch = useDispatch();
    const selectedPost = useSelector(state => state.postform.posts.filter(p => p.id === props.post.id));
    const [text, setText] = useState('');

    const onPostTextChangeHandler = (event) => {
        setText(event.target.value);
    }

    const onSaveHandler = () => {
        dispatch(updatePost({
                id: props.post.id, 
                title: props.post.title, 
                text: text
            }));
    }

    return (
        <Card   bg="Light"
                text="Dark"
                className="mb-2">
            <Card.Header>
                <Row>
                    <Col key="cardheader.row.1"><div data-testid={"cardheader-" + props.post.id}>{props.post.title}</div></Col>
                    <Col key="cardheader.row.2"><WindowButtons postid={props.post.id}/></Col>
                </Row>
            </Card.Header>
            <Card.Body>
            <div className="form-group">
                <textarea   className="form-control" 
                            rows="5" id="comment" 
                            value={selectedPost[0] !== undefined ? selectedPost.text : ''} 
                            onChange={onPostTextChangeHandler}></textarea>
            </div>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col><div style={{height: "20px"}}></div></Col>
                    <Col>
                        <Button className={styles.postsave} 
                                variant="secondary"
                                onClick={onSaveHandler}>Save</Button>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}