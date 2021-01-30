import { Card } from 'react-bootstrap';

export function Post(props) {
    return (
        <Card bg="Light"
            text="Dark"
            className="mb-2">
            <Card.Header>
                <div data-testid={"cardheader-" + props.id}>{props.text}</div>
            </Card.Header>
            <Card.Body>
            <div className="form-group">
                <textarea className="form-control" rows="5" id="comment"></textarea>
            </div>
            </Card.Body>
        </Card>
    )
}