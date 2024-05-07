import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditSubCategory = () => {
  const { _id } = useParams()
  const [data, setData] = useState({
    categoryname: '',
    subcategoryname: ''
  })

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }
  const handleFetch = async () => {
    try {
      const res = await axios.get('https://api.prestigeindustries.co.in/api/subcategory/'+_id);
      setData(res.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const submitResponse = await axios.put("https://api.prestigeindustries.co.in/api/subcategory/" + _id, data);
      toast.success("Sub Category Updated Successfully")
      window.location.href = '/all-sub-category'
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.msg)
    }
  }


  const [categories, setCategory] = useState([]);
  const handleCategory = async () => {
    try {
      const res = await axios.get('http://localhost:9000/api/category');
      setCategory(res.data.data)
    } catch (error) {
      console.error("i am cat errro", error)
    }
  }

  useEffect(() => {
    handleFetch();
    handleCategory()
  }, [])
  return (
    <>
      <ToastContainer />
      <section className="breadCmb">
        <div>
          <h2>Edit Sub Category</h2>
          <ul>
            <li><a href="/">Home / </a></li>
            <li><a href="/all-category">Our Sub Category / </a></li>
            <li>Edit Sub Category</li>
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
              <select id="inputState" className="form-select" onChange={handleChange} name="categoryname" value={data.categoryname}>
                <option name='categoryName' value={data.categoryname}>{data.categoryname}</option>
                {categories && categories.map((item, index) => (
                  <option key={index} value={item.categoryName}>{item.categoryName}</option>
                ))}
              </select>
            </div>

            <div className="col-md-4">
              <label for="product-name" className="form-label">Sub Category Name</label>
              <input required type="text" onChange={handleChange} name='subcategoryname' value={data.subcategoryname} className="form-control" id='product-name' placeholder="Category name" aria-label="Product name" />
            </div>

            {/* <div className="col-md-4">
              <label for="selectImage" className="form-label">Sub Category Image</label>
              <input required type="text" value={formData.subCategoryImage} name='subCategoryImage' onChange={handleChange} className="form-control" id='selectImage' placeholder="Image URL" aria-label="Product Image" />
            </div> */}

            <div className="col-md-12 text-center">
              <input type="reset" className='btn btn-warning text-white' /> &nbsp;
              <input type="submit" className='btn btn-success' value="Save Category Changes" />
            </div>

          </form>
        </div>
      </section>
    </>
  )
}

export default EditSubCategory