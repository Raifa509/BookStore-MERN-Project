import React, { useState } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import AdminHeader from '../components/AdminHeader'
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AddJob from '../../users/components/AddJob';



function AdminCareer() {
  const [jobListStatus, setJobListStatus] = useState(true)
  const [listApplicantStatus, setListApplicantStatus] = useState(false)
  return (
    <>

      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSideBar />
        </div>
        <div className="col-span-4 p-10">
          {/* content */}

          <h1 className='text-2xl text-center '>Careers</h1>

          {/* tabs */}
          <div className="md:px-40">
            <div className="flex justify-center items-center my-5">
              <p onClick={() => { setJobListStatus(true); setListApplicantStatus(false) }} className={jobListStatus ? 'text-blue-500 px-4 py-3 border-gray-200  cursor-pointer border-t border-l border-r ' : 'border-b border-gray-200 cursor-pointer px-4 py-3'}>Job Post</p>
              <p onClick={() => { setListApplicantStatus(true); setJobListStatus(false) }} className={listApplicantStatus ? 'text-blue-500 px-4 py-3 border-gray-200  cursor-pointer border-t border-l border-r ' : 'border-b border-gray-200 cursor-pointer px-4 py-3'}>View Applicant</p>
            </div>
          </div>


          {/* tab content */}
          {
            jobListStatus &&
            <>
              <div className="flex justify-between items-center mt-10">
                <div className="flex">
                  <input type="text" className="px-2 py-1  text-black shadow w-full placeholder-gray-500 rounded border border-white placeholder:text-sm" placeholder='Job Title ' />
                  <button className="bg-green-500 text-white p-2 ms-2 rounded">Search</button>
                </div>
                <div><AddJob/></div>
              </div>
              <div className='shadow-lg p-8 mt-10 my-5'>
                <div className='flex mb-5'>
                  <div className='w-full'>
                    <h4 className='text-lg mb-2'>Job Title</h4>
                    <hr />
                  </div>
                  <button className='bg-red-600 text-white p-3 ms-5 flex items-center rounded' >Delete<FontAwesomeIcon icon={faTrash} /></button>
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
            </>

          }

          {
            listApplicantStatus &&
            <>
              <div className="p-10 overflow-x">
                <table className='w-full my-5 shadow'>
                  <thead>
                    <tr>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Sl No</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Job Title</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Name</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Qualification</th>

                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Email</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Phone</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Cover Letter</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Resume</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td className="border border-gray-500 p-3 text-center">1</td>
                        <td className="border border-gray-500 p-3 text-center">Front End Developer</td>
                        <td className="border border-gray-500 p-3 text-center">Max Miller</td>
                        <td className="border border-gray-500 p-3 text-center">BCA</td>

                        <td className="border border-gray-500 p-3 text-center">max@gmail.com</td>
                        <td className="border border-gray-500 p-3 text-center">9865463232</td>

                        <td className="border border-gray-500 p-3 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex natus, consequuntur repudiandae alias sapiente deserunt. Error architecto earum quos vel qui explicabo nemo, quae nulla quisquam eligendi repellat magni!</td>
                        <td className="border border-gray-500 p-3 text-center"><Link className='text-blue-600 underline'>Resume</Link></td>
                      </tr>
                  </tbody>
                </table>
              </div>

            </>
          }






        </div>
      </div>

      <Footer />

    </>
  )
}

export default AdminCareer