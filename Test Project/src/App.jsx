import { useState } from 'react'
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './Login';


function App() {
  const [count, setCount] = useState(0);

  function handleClick() { 
    setCount(count + 2);
  }
  function resetButton() {
    setCount(-0)
  }
  return (
    <>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleClick}>Click Me</button>
      <p className="mt-4 text-gray-700">Count: {count}</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded mt-4" onClick={resetButton}>Reset</button>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  )
}

export default App
