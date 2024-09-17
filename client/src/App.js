import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Products/Home'
import Products from './Products/Products'
import Admin from './Products/Admin'
import Create_Product from './Products/Create_Product'
import Update_Product from './Products/Update_Product'
const App = () => {
  return <>
            <Router>
                <Navbar/>
            <Routes>
                <Route path="/index" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/Admin" element={<Admin/>}/>
                <Route path="/createproduct" element={<Create_Product/>}/>
                <Route path="/updateProduct/:id" element={<Update_Product/>}/>
                
            </Routes>
           </Router> 
        </>
}

export default App