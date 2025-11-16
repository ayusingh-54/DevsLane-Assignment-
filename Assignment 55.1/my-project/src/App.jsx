import { useState } from 'react'
import ProductDetails from './ProductDetails'
import TableRow from './TableRow'
import Table from './Table'
function App() {
  const [flip, setFlip] = useState(false)
  let key1 = 'table1'
  let key2 = 'table2'
  if (flip) {
    key1 = 'table2'
    key2 = 'table1'
  }

  function flipKey() {
    setFlip(!flip)
  }

  return (
    <>
      <div className='flex gap-3'>
        <Table key={key1} />
        <Table key={key2} />
        
      </div>
      <button className='bg-indigo-700 text-white rounded-md px-4 py-1 ' onClick={flipKey}>Flip key </button>
    </>
  )
}

export default App
