import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProduct = () => {
  const { _id } = useParams()
  const [cate, setCate] = useState([])
  const [subcate, setSubCate] = useState([])
  const [selectedMainCategory, setSelectedMainCategory] = useState();
  const [data, setData] = useState({
    categoryname: "",
    subcategoryname: "",
    productname: "",
    businesstype: "",
    material: "",
    length: "",
    volteage: "",
    application: "",
    image: "",
    image1: "",
    image2: "",
    image3: "",
  })
  const getCategoryApi = async () => {
    try {
      let res = await axios.get("https://www.api.prestigeindustries.co.in/api/category")
      console.log(res)
      setCate(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  const getSubCategoryApi = async () => {
    try {
      let res = await axios.get("https://www.api.prestigeindustries.co.in/api/subcategory")
      console.log(res)
      setSubCate(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  const getProductApi = async () => {
    try {
      let res = await axios.get("https://api.prestigeindustries.co.in/" + _id)
      console.log(res)
      setData(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  const filterSubcategories = () => {
    return subcate.filter((subcat) => subcat.categoryname === selectedMainCategory);
  };
  const formData = new FormData()
  formData.append("categoryname", data.categoryname)
  formData.append("subcategoryname", data.subcategoryname)
  formData.append("productname", data.productname)
  formData.append("businesstype", data.businesstype)
  formData.append("material", data.material)
  formData.append("length", data.length)
  formData.append("volteage", data.volteage)
  formData.append("application", data.application)
  formData.append("image", data.image)
  formData.append("image1", data.image1)
  formData.append("image2", data.image2)
  formData.append("image3", data.image3)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.put("https://api.prestigeindustries.co.in/" + _id, formData)
      if (res.status === 200) {
        window.location.href = "/all-products"
      }
    } catch (error) {
      console.log(error);
    }
  }
  const getfiledata = async (e) => {
    const { name, files } = e.target;
    setData({ ...data, [name]: files[0] });
  }
  useEffect(() => {
    getCategoryApi()
    getSubCategoryApi()
    getProductApi()
  }, [])

  return (
    <>
      <ToastContainer />
      <section className="breadCmb">
        <div>
          <h2>Edit Products</h2>
          <ul>
            <li><a href="/">Home / </a></li>
            <li><a href="/all-products">Our Products / </a></li>
            <li>Edit Product</li>
          </ul>
        </div>
        <div className="btn1">

        </div>
      </section>

      <section className="forms">
        <div className="container">
          <form className="row" onSubmit={handleSubmit}>

            <div className="col-md-3">
              <label for="inputState" className="form-label">Select Category</label>
              <select onChange={(e) => { handleChange(e); setSelectedMainCategory(e.target.value); }} name='categoryname' className="form-select">
                <option selected disabled>Choose Category</option>
                {cate.map((item, index) => (
                  <option value={item.categoryname} key={index} >{item.categoryname}</option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <label for="inputState1" className="form-label">Select Sub Category</label>
              <select onChange={handleChange} name='subcategoryname' className="form-select">
                <option selected disabled>Choose Category</option>
                {filterSubcategories().map((item) => (
                  <option value={item.subcategoryname} >{item.subcategoryname}</option>
                ))}
              </select>
            </div>

            <div className="col-md-3">
              <label htmlFor="productName" className="form-label">Product Name</label>
              <input type="text" className="form-control" value={data.productname} name='productname' onChange={handleChange} placeholder="Product Name" aria-label="Product Name" />
            </div>
            <div className="col-md-3">
              <label htmlFor="productPrice" className="form-label">businesstype</label>
              <input type="text" className="form-control" value={data.businesstype} name='businesstype' onChange={handleChange} placeholder="businesstype" aria-label="Product Price" />
            </div>
            <div className="col-md-3">
              <label htmlFor="length" className="form-label">material</label>
              <input type="text" className="form-control" value={data.material} name='material' onChange={handleChange} placeholder="Length" aria-label="Length" />
            </div>

            <div className="col-md-3">
              <label htmlFor="width" className="form-label">length</label>
              <input type="text" className="form-control" value={data.length} name='length' onChange={handleChange} placeholder="length" aria-label="Width" />
            </div>

            <div className="col-md-3">
              <label htmlFor="thickness" className="form-label">volteage</label>
              <input type="text" className="form-control" value={data.volteage} name='volteage' onChange={handleChange} placeholder="volteage" aria-label="Thickness" />
            </div>

            <div className="col-md-3">
              <label htmlFor="size" className="form-label">application</label>
              <input type="text" className="form-control" value={data.application} name='application' onChange={handleChange} placeholder="application" aria-label="Size" />
            </div>

            <div className="col-md-3">
              <label htmlFor="size" className="form-label">Image</label>
              <input type="file" className="form-control" name='image' onChange={getfiledata} placeholder="image" aria-label="Size" />
            </div>

            <div className="col-md-3">
              <label htmlFor="size" className="form-label">Image1</label>
              <input type="file" className="form-control" name='image1' onChange={getfiledata} placeholder="image" aria-label="Size" />
            </div>

            <div className="col-md-3">
              <label htmlFor="size" className="form-label">Image2</label>
              <input type="file" className="form-control" name='image2' onChange={getfiledata} placeholder="image" aria-label="Size" />
            </div>

            <div className="col-md-3">
              <label htmlFor="size" className="form-label">Image3</label>
              <input type="file" className="form-control" name='image3' onChange={getfiledata} placeholder="image" aria-label="Size" />
            </div>


            <div className="col-md-12 text-center">
              <input type="reset" className='btn btn-warning text-white' /> &nbsp;
              <input type="submit" className='btn btn-success' value="Add Product" />
            </div>

          </form>
        </div>
      </section>
    </>
  )
}

export default EditProduct