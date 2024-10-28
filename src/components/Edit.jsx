import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Edit() {
  const {id}=useParams()

  const [val, setVal] = useState({
    id:id,
    name: "",
    // imageUrl: "",
    // gender: "",
    // birthday: "",
    // mobile: "",
    email: "",
    // address: ""
  })

  useEffect(() => {
    axios.get('https://cms-server-wgpt.onrender.com/'+id)
      .then(res => {
        setVal({...val,name:res?.data?.name,email:res?.data?.email})
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <>

      <div className='container mt-4'>
        <Link to={'/'} className='btn btn-info'>Go Back</Link>
      </div>
      <div className='container mt-4 d-flex justify-content-center'>

        <Card style={{ width: "70%" }} className='card my-3  p-3 '>
          <Card.Body className=''>
            <div className='row align-items-center'>
              <div className='col-5'>
                <Card.Img style={{ cursor: 'pointer', height: '100%' }} className='img-fluid contact-img2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6pnzUtMPU8pxC8sZAHObuuxf6Rqu-LnMKg&s' />
              </div>
              <div className='col-7'>
                <div>
                  <label htmlFor="name">Name :</label>
                  <input type="text" name="name" id="" className="form-control" placeholder='Enter Name' value={val.name}/>
                </div>
                {/* <div>
                  <label htmlFor="img">Image URL :</label>
                  <input type="text" name="img" id="" className="form-control" placeholder='Enter Image URL'value={val.imageUrl} />
                </div>
                <div>
                  <label htmlFor="gender">Gender :</label>
                  <input type="text" name="gender" id="" className="form-control" placeholder='Enter Gender'value={val.gender} />
                </div>
                <div>
                  <label htmlFor="birthday">Date of Birth :</label>
                  <input type="date" name="birthday" id="" className="form-control" placeholder='Enter DOB' value={val.birthday}/>
                </div>
                <div>
                  <label htmlFor="mobile">Mobile :</label>
                  <input type="number" name="mobile" id="" className="form-control" placeholder='Enter Mobile Number' value={val.mobile}/>
                </div> */}
                <div>
                  <label htmlFor="email">Email :</label>
                  <input type="email" name="email" id="" className="form-control" placeholder='Enter Email'value={val.email} />
                </div>
                {/* <div>
                  <label htmlFor="address">Permanent Address :</label>
                  <input type="text" name="address" id="" className="form-control" placeholder='Enter Address' value={val.address}/>
                </div> */}
                {/* <ListGroup variant="flush">
                  <ListGroup.Item>Name : <span className='fw-bold'>{}</span></ListGroup.Item>
                  <ListGroup.Item>Gender : <span className='fw-bold'>male</span></ListGroup.Item>
                  <ListGroup.Item>Date of Birth : <span className='fw-bold'>22/5/2000</span></ListGroup.Item>
                  <ListGroup.Item>Mobile : <span className='fw-bold'>9876543210</span></ListGroup.Item>
                  <ListGroup.Item>Email : <span className='fw-bold'>zahra@gmail.com</span></ListGroup.Item>
                  <ListGroup.Item>Permanent Address : <span className='fw-bold'>ZahrahfgdrseawazxfcgvhbjnmnbvcxzAQQWEERYUIOKJHGDrtryubcxdszx bkcyghb </span></ListGroup.Item>
                </ListGroup> */}
              </div>
            </div>
            <div className=' pt-5 ' style={{textAlign:"right"}}>
              <Link to={'/edit/:contactId'} className=' btn btn-outline-primary mt-1'>
                <i className='fa fa-plus text-light fs-5' />
                <span className='text-light'> Update</span>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Edit