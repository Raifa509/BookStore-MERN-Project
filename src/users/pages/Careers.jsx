import React, { useState } from 'react'
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { faArrowUpRightFromSquare, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Careers() {

  const [modalStatus, setModalStatus] = useState(false)

  return (
    <>
      <Header />
      <div className='md:px-40 p-5'>
        <div className='flex flex-col justify-center items-center  w-full'>
          <h1 className='text-2xl mt-3 font-bold'>Careers</h1>
          <p className='mt-5 md:text-center text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur placeat aperiam molestias ex, atque eveniet beatae consequatur pariatur sint suscipit laudantium dicta quasi debitis dolore eaque distinctio omnis aut corporis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus assumenda veniam sequi repellendus voluptas, eum corrupti unde.</p>
        </div>


        <h2 className='text-xl ms-5 mt-5'>Current Openings</h2>

        <div className='flex flex-col justify-center items-center my-5'>
          <div className="flex">
            <input type="text" className="px-2 py-1  border border-gray-600 text-black shadow w-full placeholder-gray-500 placeholder:text-sm" placeholder='Search By Title ' />
            <button className="bg-blue-900 text-white p-2">Search</button>
          </div>

          {/* career card */}
          <div className='shadow-lg p-8 mt-10 my-5'>
            <div className='flex mb-5'>
              <div className='w-full'>
                <h4 className='text-lg mb-2'>Job Title</h4>
                <hr />
              </div>
              <button className='bg-blue-700 text-white p-3 ms-5 flex items-center rounded' onClick={() => setModalStatus(true)}>Apply<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
            </div>
            <div className='mt-5'>
              <h3 className='my-2'>Location</h3>
              <h3 className='my-2'>Job Type: Senior Level</h3>
              <h3 className='my-2'>Salary: 10 lakhs</h3>
              <h3 className='my-2'>Qualification: M-Tech/B-Tech/BCA/MCA</h3>
              <h3 className='my-2'>Experience: 5-7</h3>
              <h3 className='my-2'>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis hic iste commodi ullam. Sunt rerum ipsam vel quas fugiat temporibus, saepe, autem hic quibusdam perferendis, nesciunt accusamus laboriosam natus!</h3>
            </div>
          </div>
        </div>
      </div>

      {/* modal content */}

      {
        modalStatus &&
        <div className='relative z-10'>
          {/* this div for overlay */}
          <div className='bg-gray-500/75 fixed inset-0'>

            {/* content div goes here */}
            <div className="flex justify-center items-center min-h-screen md:m-0 m-4">
              <div className='bg-white rounded  w-150 ' >
                <div className='flex justify-between items-center bg-black text-white p-3'>
                  <h3>Application Form</h3>
                  <FontAwesomeIcon onClick={() => setModalStatus(false)} icon={faClose} className='cursor-pointer'/>
                </div>
                {/* modal body */}
                <div className='relative p-5'>
                  <div className="md:grid grid-cols-2 gap-x-5">
                    <div className="mb-3">
                      <input type="text" placeholder='Full Name' className='w-full p-2 border rounded text-black placeholder-gray-400' />
                    </div>

                    <div className="mb-3">
                      <input type="text" placeholder='Qualification' className='w-full p-2 border rounded text-black placeholder-gray-400' />
                    </div>
                    <div className="mb-3">
                      <input type="text" placeholder='Email ID' className='w-full p-2 border rounded text-black placeholder-gray-400' />
                    </div>

                    <div className="mb-3">
                      <input type="text" placeholder='Phone ' className='w-full p-2 border rounded text-black placeholder-gray-400' />
                    </div>

                    <div className="mb-3 col-span-2">
                      <textarea placeholder='Cover Letter' className='w-full p-2 border rounded text-black placeholder-gray-400' />
                    </div>


                    <div className="mb-3 col-span-2 text-gray-400">
                      <label htmlFor="">Resume</label>
                      <input type="file" name="" id="" className='w-full border rounded file:bg-gray-400 file:p-2 file:text-white ' />

                    </div>


                  </div>

                </div>

                {/* modal footer */}
                <div className="bg-gray-200 p-3 flex justify-end">
                  <button className="p-2 rounded bg-orange-400 text-white border hover:bg-transparent hover:text-orange-400
                  hover:border-orange-400 cursor-pointer">Reset</button>
                   <button className="p-2 rounded bg-blue-600 text-white ms-3 border hover:bg-transparent hover:text-blue-600 hover:border-blue-600 cursor-pointer">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }



      <Footer />

    </>
  )
}

export default Careers