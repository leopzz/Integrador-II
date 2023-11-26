import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { isFunction } from '@mui/x-data-grid/internals';

export default function PropertyEntity(props) {
    return (
        <Col md={props.colSize}>
            {props.type == "select" &&
                <Form.Group controlId={props.id}>
                    <Form.Label>{props.label}</Form.Label>
                    <Form.Select defaultValue={props.default} onChange={props.onChangeFunction}> 
                        {props.data.map((obj) => {
                            return (<option value={obj.value}>{obj.text}</option>)
                        })}
                    </Form.Select>
                </Form.Group>
            }
            {props.type == "string" &&
                <Form.Group as={Col} controlId={props.id}>
                    <Form.Label>{props.label}</Form.Label>
                    <Form.Control type="string" placeholder={props.placeholder} onChange={props.onChangeFunction} value={props.value} />
                </Form.Group>
            }
        </Col>
    )
} 