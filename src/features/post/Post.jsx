import { useState, useRef } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { WindowButtons } from '../window-buttons/WindowButtons';
import { updatePost } from './postFormSlice';
import styles from './PostForm.module.css';

export function Post(props) {
    const dispatch = useDispatch();
    const selectedPost = useSelector(state => state.postform.posts.filter(p => p.id === props.post.id));
    const [text, setText] = useState(selectedPost[0].text);
    const myInput = useRef();

    const onPostTextChangeHandler = (event) => {
        setText(event.target.value);
    }

    const onSaveHandler = () => {
        dispatch(updatePost({
                id: props.post.id, 
                title: props.post.title, 
                text: text,
                date: props.post.date
            }));
    }

    return (
        <Card   bg="Light"
                text="Dark"
                className="mb-2">
            <Card.Header>
                <Row>
                    <Col></Col>
                    <Col key="cardheader.row.1"><div data-testid={"cardheader-" + props.post.id}>{props.post.title}</div></Col>
                    <Col key="cardheader.row.2"><WindowButtons postid={props.post.id}/></Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">{props.post.date}</Card.Subtitle>
                <div className="form-group">
                    <textarea   className="form-control" 
                                rows="5" id="comment" 
                                value={text} 
                                onBlur={onSaveHandler}
                                onChange={onPostTextChangeHandler}></textarea>
                </div>
            </Card.Body>
        </Card>
    )
}