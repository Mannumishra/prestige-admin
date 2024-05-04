import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const Contactpage = () => {
    const [data,setData] = useState([])

    const getApiData = async()=>{
        try {
            let res = await axios.get("https://prestigebackend.onrender.com/api/contact")
            console.log(res);
            setData(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getApiData()
    },[])
    return (
        <>
            <ToastContainer />
            <section className="breadCmb">
                <div>
                    <h2>Our Recive Query</h2>
                    <ul>
                        <li><a href="/">Home / </a></li>
                        <li>All Query</li>
                    </ul>
                </div>
                {/* <div className="btn1">
                    <Link to={'/create-category'} >Cr </Link>
                </div> */}
            </section>

            <section className="tables">
                <div className="container">
                    <div className="row">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">S.no</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.address}</td>
                                        <td>{item.message}</td>
                                        {/* <td className='upd-btns'>
                                            <Link to={`/edit-category/${item._id}`} className='upd-btns update'><i className="fa-solid fa-pen-to-square"></i></Link>
                                            <button onClick={() => { hadndleDelete(item._id) }} className='upd-btns delete'><i className="fa-solid fa-trash-arrow-up"></i></button>
                                        </td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contactpage