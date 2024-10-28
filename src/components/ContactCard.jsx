// import React from 'react'
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import { Link } from 'react-router-dom';
// import { deleteContactApi } from '../services/allApi';
// import { toast } from 'react-toastify';

// function ContactCard({contact,res}) {

//     const [show, setShow] = useState(false);

//     const handleDelete=async()=>{
//         const result=await deleteContactApi(contact.id)
//         if(result.status==200){
//             toast.success("Contact Removed!!")
//             res(result)
//         }
//     }


//     return (
//         <>
//             <Card style={{ width: '35rem' }} className='card my-3 p-1'>
//                 <Card.Body>
//                     <div className="row align-items-center">
//                         <div className="col-5">
//                             <Card.Img src={contact.photoUrl} className='img-fluid' style={{ cursor: 'pointer', height: '200px' }} />
//                         </div>
//                         <div className="col-7">
//                             <ListGroup variant="flush">
//                                 <ListGroup.Item>Name : {contact.name}</ListGroup.Item>
//                                 <ListGroup.Item>Mobile : {contact.mobile}</ListGroup.Item>
//                                 <ListGroup.Item>Email : {contact.email}</ListGroup.Item>
//                             </ListGroup>
//                         </div>
//                     </div>
//                     <div className="row align-items-center pt-3">
//                         <Link to={`/view/${contact.id}`} className="col btn btn-outline mx-5 mt-1">
//                             <i className="fa-solid fa-eye fa-xl" style={{color:"#4e7a9c"}} />
//                         </Link>
//                         <Link className="col btn btn-outline mx-5 mt-1">
//                             <i className="fa-solid fa-pen-to-square fa-xl" style={{color:"#666666"}} />
//                         </Link>
//                         <Link className="col btn btn-outline mx-5 mt-1" onClick={handleDelete}>
//                             <i className="fa-solid fa-trash fa-xl" style={{color:"#990000"}} />
//                         </Link>
//                     </div>
//                 </Card.Body>
//             </Card>
//         </>
//     )
// }

// export default ContactCard






import React from 'react'
import { Card } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteContactApi,editContactApi } from '../services/allApi'; 
import { toast } from 'react-toastify';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function ContactCard({ contact, res }) {

   const [show, setShow] = useState(false);

   const [updated, setUpdated] = useState({ ...contact })

   const handledelete = async () => {
      const result = await deleteContactApi(contact.id)
      if (result.status == 200) {
         toast.success("Contact Removed!!")
         res(result)
      }
   }

   const handleEdit = async () => {
      const result = await editContactApi(contact.id, updated)
      if (result.status == 200) {
         toast.success("Contact Updated Successfully!!")
         handleClose()
         res(result)
      }
      else {
         toast.error("Failed to Update!!")
      }
   }

   const handleClose = () => setShow(false);
   const handleShow = () => {
      setUpdated({ ...contact })
      setShow(true);

   }

   const [view, setView] = useState(false);

   const handleBack = () => setView(false);
   const handleView = () => setView(true);



   return (
      <>
         <Card style={{ width: "38rem" }} className='card my-3  p-2'>
            <Card.Body className=''>
               <div className='row align-items-center'>
                  <div className='col-5'>
                     <Card.Img style={{ cursor: 'pointer', height: '200px' }} className='img-fluid contact-img' src={contact?.photoUrl} />
                  </div>
                  <div className='col-7'>
                     <ListGroup variant="flush">
                        <ListGroup.Item>Name : <span className='fw-medium'>{contact?.name}</span></ListGroup.Item>
                        <ListGroup.Item>Mobile : <span className='fw-medium'>{contact?.mobile}</span></ListGroup.Item>
                        <ListGroup.Item>Email : <span className='fw-medium'>{contact?.email}</span></ListGroup.Item>
                     </ListGroup>
                  </div>
               </div>
               <div className='row align-items-center pt-3'>
                  <Link onClick={handleView} className='col btn mx-5 mt-1'>
                     <i className='fa fa-eye fs-4' style={{color:"#4e7a9c"}} />
                  </Link>
                  <Link onClick={handleShow} className='col btn mx-5 mt-1'>
                     <i className="fa-solid fa-pen-to-square fs-4" style={{color:"#666666"}} />
                  </Link>
                  <Link className='col btn mx-5 mt-1' onClick={handledelete}>
                     <i className='fa fa-trash fs-4' style={{color:"#990000"}} />
                  </Link>
               </div>
            </Card.Body>
         </Card>


         <Modal
            show={view}
            onHide={handleBack}
            backdrop="static"
            keyboard={false}
         >
            <Modal.Header closeButton>
               <img className='img-fluid ' style={{width:'300px'}} src={contact?.photoUrl} alt="" />
            </Modal.Header>
            <Modal.Body>
               <ListGroup variant="flush">
                  <ListGroup.Item>Name : <span className='fw-medium'>{contact?.name}</span></ListGroup.Item>
                  <ListGroup.Item>Mobile : <span className='fw-medium'>{contact?.mobile}</span></ListGroup.Item>
                  <ListGroup.Item>Email : <span className='fw-medium'>{contact?.email}</span></ListGroup.Item>
               </ListGroup>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleBack}>
                  Close
               </Button>
            </Modal.Footer>
         </Modal>


         {<Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
         >
            <Modal.Header closeButton>
               <Modal.Title>Edit Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <FloatingLabel controlId="floatingname" label="Name" className="mb-3">
                  <Form.Control value={updated.name} onChange={(e) => setUpdated({ ...updated, name: e.target.value })} type="text" placeholder="" />
               </FloatingLabel>
               <FloatingLabel controlId="floatingimg" label="Photo URL" className="mb-3">
                  <Form.Control value={updated.photoUrl} onChange={(e) => setUpdated({ ...updated, photoUrl: e.target.value }) } type="text" placeholder="" />
               </FloatingLabel>
               
               
               <FloatingLabel controlId="floatingnum" label="Mobile" className="mb-3">
                  <Form.Control value={updated.mobile} onChange={(e) => setUpdated({ ...updated, mobile: e.target.value }) } type="number" placeholder="" />
               </FloatingLabel>
               <FloatingLabel controlId="floatingeInput" label="Email" className="mb-3">
                  <Form.Control value={updated.email} onChange={(e) => setUpdated({ ...updated,email: e.target.value }) } type="email" placeholder="" />
               </FloatingLabel>
               
            </Modal.Body>
            <Modal.Footer>
            <Button variant="" className='btn btn-success' onClick={handleEdit}>
                  Update
               </Button>
               <Button variant="" className='btn btn-secondary' onClick={handleClose}>
                  Close
               </Button>
            </Modal.Footer>
         </Modal>
         }
      </>
   )
}

export default ContactCard