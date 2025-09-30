import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from "../../components/Footer";
import AdminSideBar from '../components/AdminSideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUsers, faUserTie } from '@fortawesome/free-solid-svg-icons';

function AdminDashboard() {
  return (
    <>
    <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSideBar />
        </div>
        <div className="col-span-4 p-10">
          <div className="md:grid grid-cols-3">

            <div className="md:px-5 py-5 md:py-0">
              <div className="bg-blue-800 md:p-8 p-4 flex items-center rounded text-white">
                  <FontAwesomeIcon icon={faBook} size='4x'/>
                  <div className='flex flex-col items-center'>
                    <h3 className="text-lg">Total Number of Books</h3>
                    <h3 className='text-4xl'>100+</h3>
                  </div>
              </div>
            </div>
             <div className="md:px-5 py-5 md:py-0">
              <div className="bg-green-900 md:p-8 p-4 flex items-center rounded text-white">
                  <FontAwesomeIcon icon={faUsers} size='4x'/>
                  <div className='flex flex-col items-center'>
                    <h3 className="text-lg">Total Number of Users</h3>
                    <h3 className='text-4xl'>100+</h3>
                  </div>
              </div>
            </div>
             <div className="md:px-5 py-5 md:py-0">
              <div className="bg-yellow-600 md:p-8 p-4  flex items-center rounded text-white">
                  <FontAwesomeIcon icon={faUserTie} size='4x'/>
                  <div className='flex flex-col items-center'>
                    <h3 className="text-lg">Total no of Employees</h3>
                    <h3 className='text-4xl'>100+</h3>
                  </div>
              </div>
            </div>
          </div>
          <div className="md:grid grid-cols-2 p-5 my-5">
            <div>Bar chart</div>
            <div>Pie chart</div>
          </div>
        </div>
      </div>



      <Footer />
    </>
  )
}

export default AdminDashboard