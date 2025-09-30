import React, { useState } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import AdminHeader from '../components/AdminHeader'
import Footer from "../../components/Footer";

function AdminResource() {

  const [bookListStatus, setBookListStatus] = useState(true)
  const [usersListStatus, setUsersListStatus] = useState(false)

  return (
    <>

      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSideBar />
        </div>
        <div className="col-span-4">
          {/* content */}
          <div className="p-10">
            <h1 className='text-2xl text-center '>All Resources</h1>

            {/* tabs */}
            <div className="md:px-40">
              <div className="flex justify-center items-center my-5">
                <p onClick={() => { setBookListStatus(true); setUsersListStatus(false) }} className={bookListStatus ? 'text-blue-500 px-4 py-3 border-gray-200  cursor-pointer border-t border-l border-r ' : 'border-b border-gray-200 cursor-pointer px-4 py-3'}>Books</p>
                <p onClick={() => { setUsersListStatus(true); setBookListStatus(false) }} className={usersListStatus ? 'text-blue-500 px-4 py-3 border-gray-200  cursor-pointer border-t border-l border-r ' : 'border-b border-gray-200 cursor-pointer px-4 py-3'}>Users</p>
              </div>
            </div>
          </div>

          {
            bookListStatus &&
            <div className="md:grid grid-cols-4 w-full mt-5">

              <div className="shadow p-3 rounded mx-4">
                <img src="https://edit.org/img/blog/xk5-1024-free-ebook-cover-templates-download-online.webp" alt="book" width={'100%'} height={'300px'} />
                <div className='flex flex-col justify-center items-center mt-2'>
                  <p className="text-blue-700 font-bold text-lg">Author</p>
                  <p className="text-blue-700">Book Title</p>
                  <p>$Price</p>
                </div>
              </div>
              <div className="shadow p-3 rounded mx-4">
                <img src="https://edit.org/img/blog/xk5-1024-free-ebook-cover-templates-download-online.webp" alt="book" width={'100%'} height={'300px'} />
                <div className='flex flex-col justify-center items-center mt-2'>
                  <p className="text-blue-700 font-bold text-lg">Author</p>
                  <p className="text-blue-700">Book Title</p>
                  <p>$Price</p>
                </div>
              </div>
              <div className="shadow p-3 rounded mx-4">
                <img src="https://edit.org/img/blog/xk5-1024-free-ebook-cover-templates-download-online.webp" alt="book" width={'100%'} height={'300px'} />
                <div className='flex flex-col justify-center items-center mt-2'>
                  <p className="text-blue-700 font-bold text-lg">Author</p>
                  <p className="text-blue-700">Book Title</p>
                  <p>$Price</p>
                </div>
              </div>
              <div className="shadow p-3 rounded mx-4">
                <img src="https://edit.org/img/blog/xk5-1024-free-ebook-cover-templates-download-online.webp" alt="book" width={'100%'} height={'300px'} />
                <div className='flex flex-col justify-center items-center mt-2'>
                  <p className="text-blue-700 font-bold text-lg">Author</p>
                  <p className="text-blue-700">Book Title</p>
                  <p>$Price</p>
                </div>
              </div>
            </div>
          }

          {
            usersListStatus &&
            <div className="md:grid grid-cols-4 w-full my-5">

              <div className="shadow p-3 rounded mx-4 bg-gray-100 mx-4">
                <p className='text-red-500 font-bold text-lg'>ID : 53624589633248852</p>
                <div className='flex mt-3'>
                  <img src="/login-bg.jpg" alt="user" width={'60px'} height={'80px'} style={{ borderRadius: '50%' }} />
                  <div className="flex flex-col text-md ml-6">
                    <p className='text-blue-600'>Username</p>
                    <p>Email</p>
                  </div>
                </div>
              </div>
              <div className="shadow p-3 rounded mx-4 bg-gray-100 mx-4">
                <p className='text-red-500 font-bold text-lg'>ID : 53624589633248852</p>
                <div className='flex mt-3'>
                  <img src="/login-bg.jpg" alt="user" width={'60px'} height={'80px'} style={{ borderRadius: '50%' }} />
                  <div className="flex flex-col text-md ml-6">
                    <p className='text-blue-600'>Username</p>
                    <p>Email</p>
                  </div>
                </div>
              </div>
              <div className="shadow p-3 rounded mx-4 bg-gray-100 mx-4">
                <p className='text-red-500 font-bold text-lg'>ID : 53624589633248852</p>
                <div className='flex mt-3'>
                  <img src="/login-bg.jpg" alt="user" width={'60px'} height={'80px'} style={{ borderRadius: '50%' }} />
                  <div className="flex flex-col text-md ml-6">
                    <p className='text-blue-600'>Username</p>
                    <p>Email</p>
                  </div>
                </div>
              </div>
              <div className="shadow p-3 rounded mx-4 bg-gray-100 mx-4">
                <p className='text-red-500 font-bold text-lg'>ID : 53624589633248852</p>
                <div className='flex mt-3'>
                  <img src="/login-bg.jpg" alt="user" width={'60px'} height={'80px'} style={{ borderRadius: '50%' }} />
                  <div className="flex flex-col text-md ml-6">
                    <p className='text-blue-600'>Username</p>
                    <p>Email</p>
                  </div>
                </div>
              </div>
            </div>
          }




        </div>
      </div>

      <Footer />

    </>
  )
}

export default AdminResource