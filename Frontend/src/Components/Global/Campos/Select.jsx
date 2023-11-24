import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export default function CampoSelect(props) {
    return (
        <Col md={props.colSize}>
            <Form.Group controlId={props.id}>
                <Form.Label>{props.label}</Form.Label>
                <Form.Select defaultValue={props.default}>
                    {props.data.map((obj) => {
                        return (<option value={obj.value}>{obj.text}</option>)
                    })}
                </Form.Select>
            </Form.Group>
        </Col>
    )
} 