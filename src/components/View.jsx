import React,{useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { getContactApi } from '../services/allApi'

function View() {

    const [viewcontact,setViewcontact]=useState({})
    const {cId}=useParams()
    console.log(viewcontact)

    useEffect(()=>{
        getContact()
    },[])

    const getContact=async()=>{
        const res=await getContactApi()
        setViewcontact(res.data)
    }

    return (
        <>

            <div className="container mt-4">
                {/* <div>
                    <Link to={'/'} className="btn btn-warning">Go Back</Link>
                </div> */}
                <Card style={{ width: "70%" }} className='card mt-3 bg-light p-5'>
                    <Card.Body className=''>
                        <div className='row align-items-center'>
                            <div className='col-5'>
                                <Card.Img style={{ cursor: 'pointer', width:'500px' }} className='img-fluid' src={viewcontact?.photoUrl} />
                            </div>
                            <div className='col-7'>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Name : <span className='fw-bold'>{viewcontact?.name}</span></ListGroup.Item>
                                    <ListGroup.Item>Mobile : <span className='fw-bold'>{viewcontact?.mobile}</span></ListGroup.Item>
                                    <ListGroup.Item>Email : <span className='fw-bold'>{viewcontact?.email}</span></ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-around pt-5'>
                            <Link to={'/edit/:contactId'} className='col-1 btn btn-warning mt-1'>
                                <i className='fa fa-pen text-dark fs-3' />
                            </Link>
                            <Link className='col-1 btn btn-danger mt-1'>
                                <i className='fa fa-trash text-dark fs-3' />
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default View