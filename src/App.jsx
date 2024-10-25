import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import SiteNav from './layout/SiteNav'
import Products from '../views/Products'
import ErrorPage from '../views/ErrorPage'
//import ProductDetails from '../views/ProductDetails'
import Sign from '../views/Sign'
import NewArrival from '../components/NewArrival'
import Intro from '../views/Intro'
import EditProduct from '../components/EditProduct'
import About from '../views/About'
import AllReview from '../views/AllReview'
import Filter from '../views/Filter'
import Cart from '../views/Cart'
import { useState } from 'react'

export default function App() {

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <div>
      <Sign />
      <SiteNav cart={cart} />
      {/* <Products products={products} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
        {/*  <Route path="/products/:id" element={<ProductDetails />} />*/}
        <Route path="/products/edit/:id" element={<EditProduct />} />
        <Route path='/' element={<NewArrival />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/" element={<AllReview />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/cart" element={<Cart setProducts={setProducts} />} />

      </Routes>
    </div >

  )
}
