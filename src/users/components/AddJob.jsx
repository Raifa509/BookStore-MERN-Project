import { faAdd, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function AddJob() {
  const [openModal, setOpenModel] = useState(false)
  return (
    <>
      <button onClick={()=>setOpenModel(!openModal)} className="px-3 rounded shadow-md py-2 bg-blue-600 text-white border hover:border-blue-600 hover:text-blue-600 hover:bg-white cursor-pointer ms-4 md:ms-0">
        <FontAwesomeIcon icon={faAdd} className='!hidden md:!inline-block '/>Add
      </button>

      {
        openModal &&
        
      <div>
        <div className='fixed w-full h-full bg-gray-500/40 inset-0 flex items-center justify-center'>
          <div className='bg-white w-xl fixed rounded-2xl flex flex-col'>

            {/* header */}
            <div className='w-full h-16 bg-black text-white p-5 flex items-center justify-between rounded-t-2xl'>
              <h2>Application Form</h2>
              <FontAwesomeIcon icon={faClose} onClick={()=>setOpenModel(!openModal)} />
            </div>

            {/* input boxes */}
            <form action="">
              <div className='mt-10 px-5'><input type="text" placeholder='Job Title' className='w-full border border-gray-500 py-2 px-4 rounded-xl' /></div>
              <div className='mt-5 px-5'><input type="text" placeholder='Location' className='w-full border border-gray-500 py-2 px-4 rounded-xl' /></div>
                <div className='mt-5 px-5'><input type="text" placeholder='Job Type' className='w-full border border-gray-500 py-2 px-4 rounded-xl' /></div>
                <div className='mt-5 px-5'><input type="text" placeholder='Salary' className='w-full border border-gray-500 py-2 px-4 rounded-xl' /></div>
                  <div className='mt-5 px-5'><input type="text" placeholder='Qualification' className='w-full border border-gray-500 py-2 px-4 rounded-xl' /></div>
                    <div className='mt-5 px-5'><input type="text" placeholder='Experience' className='w-full border border-gray-500 py-2 px-4 rounded-xl' /></div>
                      <div className='mt-5 px-5'><textarea type="text" placeholder='Description' className='w-full border border-gray-500 py-2 px-4 rounded-xl' /></div>
              
              
              
              


            </form>

          {/* buttons */}
            <div className='flex items-center justify-end px-5 my-7'>
              <button className='bg-amber-500 text-white px-3 py-1 border rounded hover:bg-white hover:text-amber-500 hover:border-amber-500 cursor-pointer'>Reset</button>
               <button className='bg-green-600 text-white px-3 py-1 border rounded hover:bg-white hover:text-green-600 hover:border-green-600 cursor-pointer ms-4'>Add</button>
            </div>

          </div>
        </div>
      </div>
      }






    </>
  )
}

export default AddJob