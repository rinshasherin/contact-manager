import React, { useEffect, useState } from 'react'
import Add from '../components/Add';
import { getContactApi } from '../services/allApi';
import ContactCard from '../components/ContactCard';

function Home() {

    const [data, setData] = useState([])
    const [result,setResult]=useState({})
    const [resp,setResp]=useState({})

    useEffect(() => {
        getData()
    }, [result,resp])

    const getData = async () => {
        const result = await getContactApi()
        console.log(result)
        if (result.status == 200) {
            setData(result.data)
        }
    }

    return (
        <>
            <div className="container">
                <div className='mt-2 d-flex'>
                    <h3 className='p-1'>Contact Manager</h3>
                    <Add setresult={setResult} />
                </div>
                <div className='p-1'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus in assumenda ullam ducimus incidunt. Vel iste exercitationem eius aspernatur rerum veritatis inventore! Odit quaerat soluta quae quis quibusdam laborum iste!</p>
                </div>
                <div className="d-flex mt-2">
                    <input type="text" className="form-control me-4" placeholder='Search Names' style={{ width: '300px' }} />
                    <button className="btn btn-outline-info">Search</button>
                </div>
            </div>

            <div className="container rounded border border-2 shadow-lg mt-5 p-3" > 
                <div className='border border-2 rounded shadow-lg ps-3 pe-3 ' style={{ backgroundColor: '#e3fffe' }}>
                    {
                        data.length > 0 ?
                            <div className='row justify-content-evenly'>
                                {
                                    data?.map(item => (
                                        <ContactCard contact={item} res={setResp} />
                                    ))
                                }
                            </div>
                            :
                            <h4 className='text-center' style={{ color: 'red' }}>No ContactS Available!!</h4>
                    }
                </div>
            </div>
        </>
    )
}

export default Home