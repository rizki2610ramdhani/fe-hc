import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

function ModalLogin() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Link onClick={handleShow} className='nav-link'>
                <span className='nav-text-login'>Sign in</span>
            </Link>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body className='p-4'>
                    <h4 className='nav-text-bold my-3 text-center'>Sign in</h4>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label className='nav-text-bold'>Username</Form.Label>
                            <Form.Control name="username" type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='nav-text-bold'>Password</Form.Label>
                            <Form.Control name="password" type="password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='all-btn-submit'>
                            Sign in
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalLogin;