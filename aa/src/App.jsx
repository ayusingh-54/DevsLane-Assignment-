import { useState } from 'react'
import Navbar from './NavBar'
import { Routes , Route } from 'react-router-dom'



function App() {


  return (
    <>
      <div className='bg-gray text-gray-800'>
        <Navbar />
        <Routes >
          <Route index element={<ProductListPage/>}></Route>
          <Route path="/products/:id" element={<ProductDetail/>}></Route>
        </Routes>
     </div>
    </>
  )
}

export default App
