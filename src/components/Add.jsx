import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addContactApi } from '../services/allApi';
import { toast } from 'react-toastify';

function Add({setresult}){

    const [show, setShow] = useState(false);

    const [contact, setContact] = useState({
        name: "", photoUrl: "", mobile: "", email: ""
    })

    const handleAdd = async () => {
        console.log(contact)
        const { name, photoUrl, mobile, email } = contact
        if (!name || !photoUrl || !mobile || !email) {
            toast.warning("Enter valid input!!")
        }
        else {
            const result = await addContactApi(contact)
            if (result.status == 201) {
                toast.success("Contact created successfully")
                setContact({
                    name: "", photoUrl: "", mobile: "", email: ""
                })
                handleClose()
                setresult(result)
            }
            else {
                toast.error("Uploading failed!!")
                console.log(result)
            }
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='btn ms-2 btn-danger' onClick={handleShow}><Badge bg="light" className='rounded-pill me-1'>+</Badge>New</button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <FloatingLabel controlId="floatinginput" label="Name" className="mb-3">
                            <Form.Control type="text" placeholder="name@example.com" onChange={(e) => { setContact({ ...contact, name: e.target.value }) }} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatinginput" label="Photo URL" className="mb-3">
                            <Form.Control type="text" placeholder="Password" onChange={(e) => { setContact({ ...contact, photoUrl: e.target.value }) }} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatinginput" label="Mobile" className="mb-3">
                            <Form.Control type="tel" placeholder="Password" onChange={(e) => { setContact({ ...contact, mobile: e.target.value }) }} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                            <Form.Control type="email" placeholder="name@example.com" onChange={(e) => { setContact({ ...contact, email: e.target.value }) }} />
                        </FloatingLabel>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleAdd}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add