import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCategory = () => {
  const [data, setData] = useState({
    categoryname: "",
    description: "",
    image: "",
    image1: "",
    image2: "",
    image3: "",
  })

  const formData = new FormData()
  formData.append("categoryname", data.categoryname)
  formData.append("image", data.image)
  formData.append("image1", data.image1)
  formData.append("image2", data.image2)
  formData.append("image3", data.image3)
  formData.append("description", data.description)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const inputFiledata = (e) => {
    const { name, files } = e.target
    setData({ ...data, [name]: files[0] })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://prestigebackend.onrender.com/api/category', formData);
      console.log(response)
      toast.success("Category Added Successfully !!")
      window.location.href = '/all-category'
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <ToastContainer />
      <section className="breadCmb">
        <div>
          <h2>Add Category</h2>
          <ul>
            <li><a href="/">Home / </a></li>
            <li><a href="/all-category">Our Category / </a></li>
            <li>Create category</li>
          </ul>
        </div>
        <div className="btn1">

        </div>
      </section>

      <section className="forms">
        <div className="container">
          <form className="row" onSubmit={handleSubmit}>
            <div className="col-md-4">
              <label htmlFor="product-name" className="form-label">Category Name</label>
              <input required type="text" onChange={handleChange} name='categoryname' className="form-control" id='product-name' placeholder="Category name" aria-label="Product name" />
            </div>
            <div className="col-md-4">
              <label htmlFor="product-name" className="form-label">Image</label>
              <input required type="file" onChange={inputFiledata} name='image' className="form-control" id='product-name' placeholder="Image" aria-label="Product name" />
            </div>
            <div className="col-md-4">
              <label htmlFor="product-name" className="form-label">Image</label>
              <input required type="file" onChange={inputFiledata} name='image1' className="form-control" id='product-name' placeholder="Image" aria-label="Product name" />
            </div>
            <div className="col-md-4">
              <label htmlFor="product-name" className="form-label">Image</label>
              <input required type="file" onChange={inputFiledata} name='image2' className="form-control" id='product-name' placeholder="Image" aria-label="Product name" />
            </div>
            <div className="col-md-4">
              <label htmlFor="product-name" className="form-label">Image</label>
              <input required type="file" onChange={inputFiledata} name='image3' className="form-control" id='product-name' placeholder="Image" aria-label="Product name" />
            </div>
            <div className="col-md-12">
              <label htmlFor="product-name" className="form-label">Description</label>
              <textarea name="description" onChange={handleChange} id="" className='form-control'></textarea>
            </div>
            <div className="col-md-12 text-center">
              <input type="reset" className='btn btn-warning text-white' /> &nbsp;
              <input type="submit" className='btn btn-success' value="Add Category" />
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default AddCategory