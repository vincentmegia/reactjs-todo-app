import { Button, ButtonGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removePost } from '../post/postFormSlice';

import styles from './WindowButtons.module.css';

export function WindowButtons(props) {
    const dispatch = useDispatch;
    const selector = useSelector;

    const onClick = () => {
        dispatch(removePost({index: props.index}));
    }

    return (
        <div>
            <Button className={styles.windowbuttons} 
                    variant="secondary"
                    onClick={onClick}>X</Button>
        </div>
    );
}