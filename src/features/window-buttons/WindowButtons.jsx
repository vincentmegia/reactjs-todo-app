import { Button, ButtonGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removePost } from '../post/postFormSlice';

import styles from './WindowButtons.module.css';

export function WindowButtons(props) {
    const dispatch = useDispatch();

    const onClick = () => {
        debugger;
        dispatch(removePost({id: props.postid}));
    }

    return (
        <div>
            <Button className={styles.windowbuttons} 
                    variant="secondary"
                    type="submit"
                    onClick={onClick}>X</Button>
        </div>
    );
}