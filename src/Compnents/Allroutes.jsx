import React from 'react'
import{Routes, Route} from 'react-router-dom';
import Cart from '../Pages/Cart';
import Faqpage from '../Pages/Faqpage';
import Footer from '../Pages/Footer';
import Homepage from '../Pages/Homepage';
import Loginn from '../Pages/Loginn';
import Mangopage from '../Pages/Mangopage';
import Product from '../Pages/Producto';
import Products from '../Pages/Productsthi';
const Allroutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Homepage/>}></Route>
    <Route path="/products" element={<Products/>}></Route>
    <Route path="/produc" element={<Product/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/faqpage" element={<Faqpage/>}></Route>
    <Route path="/loginn" element={<Loginn/>}></Route>
    <Route path="/mangopage" element={<Mangopage/>}></Route>


   </Routes>
  )
}

export default Allroutes
