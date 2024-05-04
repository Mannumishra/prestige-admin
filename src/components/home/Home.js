import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import Header from '../header/Header'
import { Route, Routes } from 'react-router-dom'

import './Home.css'
import CategoryPage from '../../pages/CategoryPage/CategoryPage'
import ProductPage from '../../pages/ProductPage/ProductPage'
import AddProduct from '../AddProduct/AddProduct'
import AddCategory from '../AddCategory/AddCategory'
import EditCategory from '../editCategory/EditCategory'
import EditProduct from '../editProduct/EditProduct'
import LoginPage from '../../pages/LoginPage/LoginPage'
import SubCategoryPage from '../../pages/SubCategoryPage/SubCategoryPage'
import AddSubCategory from '../AddSubCategory/AddSubCategory'
import EditSubCategory from '../EditSubCategory/EditSubCategory'
import Contactpage from '../../pages/ContactPage/Contactpage'

const Home = () => {
  const Token = sessionStorage.getItem('login')
  return (
    <>

      <div>
        <div>
          {Token ? <Header /> : <null />}

        </div>
        <div className='rightSidebar'>


          <Routes>
            <Route path={"/admin/dashboard"} element={<Dashboard />} />

            {/* // Category Page Routes  */}
            <Route path={"/all-category"} element={<CategoryPage />} />
            <Route path={"/create-category"} element={<AddCategory />} />
            <Route path={"/edit-category/:_id"} element={<EditCategory />} />

            {/* // Sub Category Routes  */}
            <Route path={"/all-sub-category"} element={<SubCategoryPage />} />
            <Route path={"/create-sub-category"} element={<AddSubCategory />} />
            <Route path={"/edit-sub-category/:_id"} element={<EditSubCategory />} />

            {/* // Product Routes  */}
            <Route path={"/all-products"} element={<ProductPage />} />
            <Route path={"/create-product"} element={<AddProduct />} />
            <Route path={"/edit-product/:_id"} element={<EditProduct />} />
            <Route path='/login' element={<LoginPage />} />

            {/* Contact Router */}
            <Route path='/all-contact' element={<Contactpage />} />
          </Routes>
        </div>
      </div>

    </>

  )
}

export default Home