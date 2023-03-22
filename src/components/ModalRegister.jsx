import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

function ModalRegister() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Link onClick={handleShow} className='nav-link'>
                <span className='nav-text-register'>Sign up</span>
            </Link>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body className='p-4'>
                    <h4 className='nav-text-bold my-3 text-center'>Sign un</h4>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicFullName">
                            <Form.Label className='nav-text-bold'>Full Name</Form.Label>
                            <Form.Control name="fullName" type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label className='nav-text-bold'>Username</Form.Label>
                            <Form.Control name="username" type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='nav-text-bold'>Email</Form.Label>
                            <Form.Control name="email" type="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='nav-text-bold'>Password</Form.Label>
                            <Form.Control name="password" type="password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId='formBasicGender'>
                            <Form.Label className='nav-text-bold'>Gender</Form.Label>
                            <Form.Select name="gender"  >
                                <option value="l">Laki-Laki</option>
                                <option value="p">Perempuan</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId='formBasicPhone'>
                            <Form.Label className='nav-text-bold'>Phone</Form.Label>
                            <Form.Control name="phone" type='number' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId='formBasicAddress'>
                            <Form.Label className='nav-text-bold'>Address</Form.Label>
                            <Form.Control
                                name="address"
                                as="textarea"
                                style={{ height: '100px' }}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='all-btn-submit'>
                            Sign up
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal >
        </>
    )
}

export default ModalRegister;