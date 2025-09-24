import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen '>
      <img src="/pnf.gif" alt="" className='w-150' />
      <p>Oh No !</p>
      <h1 className='text-2xl font-bold'>Look Like You're Lost</h1>
      <h5>The page you are looking for is not available</h5>
      <Link to={'/'}><button className='bg-sky-500 text-white px-3 py-2 rounded mt-10'>Back Home</button></Link>

    </div>
    
    </>
  )
}

export default Pnf