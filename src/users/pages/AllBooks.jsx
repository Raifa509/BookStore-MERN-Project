import React from 'react'
import Header from "../components/Header";
import Footer from "../../components/Footer";
function AllBooks() {
  return (
    <>
    <Header/>
    <>
    <div className='flex flex-col justify-center items-center my-5'>
    <h1 className='text-3xl font-bold'>Collections</h1>
    <div className="flex my-5">
      <input type="text" className="px-2 py-1  border border-gray-600 text-black shadow w-100 placeholder-gray-500 placeholder:text-sm" placeholder='Search By Title ' />
      <button className="bg-blue-900 text-white p-2">Search</button>
    </div>
    </div>

    {/* grid */}
    <div className="grid grid-cols-3 p-5 md:px-40 p-5">
      <div className="col-span-1 ">
        <h1 className="text-lg font-semibold">Filter</h1>
        <div className='mt-3'>
          <input type="radio" id='Literary' name='filter'/>
          <label className='ms-2' htmlFor="Literary">Literary Fiction</label>
        </div>

         <div className='mt-3'>
          <input type="radio" id='Literary' name='filter'/>
          <label className='ms-2' htmlFor="Literary">Literary Fiction</label>
        </div>
        <div className='mt-3'>
          <input type="radio" id='Literary' name='filter'/>
          <label className='ms-2' htmlFor="Literary">Literary Fiction</label>
        </div>
        
         <div className='mt-3'>
          <input type="radio" id='Literary' name='filter'/>
          <label className='ms-2' htmlFor="Literary">Literary Fiction</label>
        </div>
        <div className='mt-3'>
          <input type="radio" id='Literary' name='filter'/>
          <label className='ms-2' htmlFor="Literary">Literary Fiction</label>
        </div>
        
         <div className='mt-3'>
          <input type="radio" id='Literary' name='filter'/>
          <label className='ms-2' htmlFor="Literary">Literary Fiction</label>
        </div>
      </div>

    </div>
    
    </>
    <Footer/>
    </>
  )
}

export default AllBooks