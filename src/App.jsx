
import React from "react"
import Header from "./component/Header"
import Product from "./component/Product"
import { BrowserRouter, Routes, Route} from "react-router"
import CartList from "./component/CartList"
import { ToastContainer } from "react-toastify"



function App() {

  

  
 

  return (
    <>
      <div>
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Product />} />,
           <Route path="/cart" element={<CartList />} />,
        </Routes>
     <ToastContainer />
        </BrowserRouter>
     
     

      </div>

  
  </>
  )

}

export default App
