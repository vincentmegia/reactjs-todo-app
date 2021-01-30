import { Card, Col, Row } from 'react-bootstrap';
import { WindowButtons } from '../window-buttons/WindowButtons';

export function Post(props) {
    return (
        <Card bg="Light"
            text="Dark"
            className="mb-2">
            <Card.Header>
                <Row>
                    <Col key="cardheader.row.1"><div data-testid={"cardheader-" + props.id}>{props.text}</div></Col>
                    <Col key="cardheader.row.2"><WindowButtons/></Col>
                </Row>
            </Card.Header>
            <Card.Body>
            <div className="form-group">
                <textarea className="form-control" rows="5" id="comment"></textarea>
            </div>
            </Card.Body>
        </Card>
    )
}