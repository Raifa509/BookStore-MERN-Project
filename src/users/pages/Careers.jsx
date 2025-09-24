import React from 'react'
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Careers() {
  return (
    <>
      <Header />
      <div className='flex flex-col justify-center items-center md:px-40 p-5 w-full'>
        <h1 className='text-2xl mt-3 font-bold'>Careers</h1>
        <p className='mt-5 md:text-center text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur placeat aperiam molestias ex, atque eveniet beatae consequatur pariatur sint suscipit laudantium dicta quasi debitis dolore eaque distinctio omnis aut corporis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus assumenda veniam sequi repellendus voluptas, eum corrupti unde.</p>
      </div>


      <h2 className='text-xl md:ms-20 ms-5 mt-5'>Current Openings</h2>

      <div className='flex flex-col justify-center items-center my-5'>
        <div className="flex">
          <input type="text" className="px-2 py-1  border border-gray-600 text-black shadow w-full placeholder-gray-500 placeholder:text-sm" placeholder='Search By Title ' />
          <button className="bg-blue-900 text-white p-2">Search</button>
        </div>

        {/* career card */}
        <div className='shadow-lg p-8 md:w-[65%] mt-10'>
          <div className=' flex justify-between'>

            <div>
              <h4 className='text-lg'>Job Title</h4>
              <hr style={{ width: '80%' }} />
            </div>
            <button className='bg-blue-700 text-white px-3 py-1 rounded'>Apply<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
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


      <Footer />

    </>
  )
}

export default Careers