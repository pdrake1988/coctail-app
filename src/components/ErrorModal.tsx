import {Button, Modal} from "react-bootstrap";
interface Params {
    show: boolean;
    setShow(state: boolean): void;
}

export default function Example(props: Params) {
    return (
        <Modal
            show={props.show}
            onHide={props.setShow}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Oops!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Invalid Search Parameter</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => props.setShow}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
