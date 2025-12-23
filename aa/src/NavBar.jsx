import react from 'react'
import { HiShoppingBag } from 'react-icons/hi'


function Navbar() {
    return (
        <>
            
            <div className='py-4 bg-amber-50'>
                <div className='max-w-6xl flex justify-between mx-auto items-center'> 
                    <img
                    className='h-16'
                    src="https://upload.wikimedia.org/wikipedia/commons/0/06/Amazon_2024.svg" alt="" />
                    <HiShoppingBag className='text-4xl text-gray-800'  />
               </div>

            </div>
        </>
    )
    
}
export default Navbar