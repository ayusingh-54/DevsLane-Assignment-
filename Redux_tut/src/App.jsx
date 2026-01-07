import { useState } from 'react'
import Child from './Child'
import { useSelector } from 'react-redux'

function App() {
    const count = useSelector((state) => state.counter.value);


  return (
    <>
      <p>counter value is : {count}
      </p>
      <Child  />
    </>
  )
}

export default App
