import React, { useEffect, useState } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import AdminHeader from '../components/AdminHeader'
import Footer from "../../components/Footer";
import { getAllUsersAPI } from '../../Services/allAPI';
import SERVERURL from '../../Services/serverURL';

function AdminResource() {

  const [bookListStatus, setBookListStatus] = useState(true)
  const [usersListStatus, setUsersListStatus] = useState(false)
  const [allUsers, setAllUsers] = useState([])
  // const [token,setToken]=useState("")
  // console.log(allUsers);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      if (bookListStatus) {

      } else if (usersListStatus) {
        getAllusers(token)
      } else {
        console.log("Something went wrong!!!");

      }
    }
  }, [usersListStatus])



  const getAllusers = async (userToken) => {
    const reqHeader = {
      'Authorization': `Bearer ${userToken}`
    }
    try {
      const result = await getAllUsersAPI(reqHeader)
      if (result.status == 200) {
        setAllUsers(result.data)
      } else {
        console.log(result);

      }

    } catch (err) {
      console.log(err);

    }
  }


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
            <div className="md:grid grid-cols-3 gap-5 w-full my-5">

              {/* duplicating */}
              {
                allUsers?.length > 0 ?
                  allUsers.map((item, index) => (
                    <div key={index} className="shadow p-3 rounded bg-gray-100 mx-4">
                      <p className='text-blue-400 font-bold text-md'>{item?._id}</p>
                      <div className='flex mt-3'>
                        <img src={item?.profile?`${SERVERURL}/uploads/${item.profile}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s"} alt="user" width={'50px'}  style={{ borderRadius: '50%' }} />
                        <div className="flex flex-col text-md ml-6">
                          <p className='text-yellow-500 font-semibold'>{item?.username}</p>
                          <p>{item?.email}</p>
                        </div>
                      </div>
                    </div>
                  ))
                  :
                  <p>No users yet</p>

              }


            </div>
          }




        </div>
      </div>

      <Footer />

    </>
  )
}

export default AdminResource