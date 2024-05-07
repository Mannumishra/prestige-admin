import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductPage = () => {
    const [product, setProduct] = useState([]);

    const handleFetch = async () => {
        try {
            const res = await axios.get('https://www.api.prestigeindustries.co.in/api/product')
            console.log(res.data.data)
            setProduct(res.data.data)
        } catch (error) {
            console.error(error)
        }
    }


    const hadndleDelete = async (_id) => {
        try {
            const res = await axios.delete("https://www.api.prestigeindustries.co.in/api/product/" + _id);
            toast.success("Product Deleted Successfully")
            console.log(res.data)
            handleFetch()
        } catch (error) {
            console.error(error)
            toast.error(error.response.data.message)
        }
    }
    useEffect(() => {
        handleFetch();
    }, [])
    return (
        <>
            <ToastContainer />
            <section className="breadCmb">
                <div>
                    <h2>Our Products</h2>
                    <ul>
                        <li><a href="/">Home / </a></li>
                        <li>Our Products</li>
                    </ul>
                </div>
                <div className="btn1">
                    <Link to={'/create-product'} >Create Product </Link>
                </div>
            </section>

            <section className="tables">
                <div className="container overflow-auto">
                    <div className="row small-table">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">S.no</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Sub Category</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Images</th>
                                    <th scope="col">Images</th>
                                    <th scope="col">Images</th>
                                    <th scope="col">Images</th>
                                    <th scope="col">businesstype</th>
                                    <th scope="col">Material</th>
                                    <th scope="col">length Type</th>
                                    <th scope="col">Voltage</th>
                                    <th scope="col">Application</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    product.map((item, index) =>
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.categoryname}</td>
                                            <td>{item.categoryname}</td>
                                            <td>{item.productname}</td>
                                            <td><img src={item.image} alt="" /></td>
                                            <td><img src={item.image1} alt="" /></td>
                                            <td><img src={item.image2} alt="" /></td>
                                            <td><img src={item.image3} alt="" /></td>
                                            <td>{item.businesstype}</td>
                                            <td>{item.material}</td>
                                            <td>{item.length}</td>
                                            <td>{item.volteage}</td>
                                            <td>{item.application}</td>
                                            <td className='upd-btns'>
                                                <Link to={`/edit-product/${item._id}`} className='upd-btns update'><i className="fa-solid fa-pen-to-square"></i></Link>
                                                <button onClick={() => { hadndleDelete(item._id) }} className='upd-btns delete'><i className="fa-solid fa-trash-arrow-up"></i></button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductPage