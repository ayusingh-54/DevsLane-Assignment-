import { useState } from 'react'
import CartsComponent from './CartsComponents.jsx'


import Login from './Login.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login /> */}
      <CartsComponent />
    </>
  )
}

export default App
