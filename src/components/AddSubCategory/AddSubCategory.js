import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddSubCategory = () => {
  const [category, setCategory] = useState([]);


  // Sub Categories 
  const [data, setData] = useState({
    categoryname: '',
    subcategoryname: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://www.api.prestigeindustries.co.in/api/subcategory',data);
      console.log(response)
      toast.success("Sub Category Added Successfully !!")
      window.location.href = '/all-sub-category'
    } catch (error) {
      console.log('Error : ', error)
      toast.error(error.response.data.message)
    }
  }

  const handleCategory = async () => {
    try {
      const res = await axios.get('https://www.api.prestigeindustries.co.in/api/category');
      console.log(res);
      setCategory(res.data.data)
    } catch (error) {
      console.error("i am cat errro", error)
    }
  }
  useEffect(() => {
    handleCategory()
  }, []);

  return (
    <>
      <ToastContainer />
      <section className="breadCmb">
        <div>
          <h2>Add Sub Category</h2>
          <ul>
            <li><a href="/">Home / </a></li>
            <li><a href="/all-sub-category">Our Sub Category / </a></li>
            <li>Create Sub category</li>
          </ul>
        </div>
        <div className="btn1">

        </div>
      </section>

      <section className="forms">
        <div className="container">
          <form className="row" onSubmit={handleSubmit}>
            <div className="col-md-4">
              <label for="product-name1" className="form-label">Category Name</label>
              <select id="inputState" className="form-select" onChange={handleChange} name="categoryname">
              <option disabled>Choose Category</option>
                {category && category.map((item, index) => (
                  <option key={index} >{item.categoryname}</option>
                ))}
              </select>
            </div>
            <div className="col-md-4">
              <label for="product-name" className="form-label">Sub Category Name</label>
              <input required type="text" onChange={handleChange} name='subcategoryname' className="form-control" id='product-name' placeholder="SubCategory name" aria-label="Product name" />
            </div>
            <div className="col-md-12 text-center">
              <input type="reset" className='btn btn-warning text-white' /> &nbsp;
              <input type="submit" className='btn btn-success' value="Add SubCategory" />
            </div>

          </form>
        </div>
      </section>
    </>
  )
}

export default AddSubCategory