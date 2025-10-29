import React, { useEffect, useState } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import AdminHeader from '../components/AdminHeader'
import Footer from "../../components/Footer";
import { approveBookAPI, getAllAdminBooksAPI, getAllUsersAPI } from '../../Services/allAPI';
import SERVERURL from '../../Services/serverURL';

function AdminResource() {

  const [bookListStatus, setBookListStatus] = useState(true)
  const [usersListStatus, setUsersListStatus] = useState(false)
  const [allUsers, setAllUsers] = useState([])
  const [userBooks, setUserBooks] = useState([])
  const [updateBookStatus,setUpdateBookStatus]=useState({})
  // const [token,setToken]=useState("")
  // console.log(allUsers);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      if (bookListStatus) {
        getAlluserBooks(token)
      } else if (usersListStatus) {
        getAllusers(token)
      } else {
        console.log("Something went wrong!!!");

      }
    }
  }, [usersListStatus,updateBookStatus])

  console.log(userBooks);


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
  const getAlluserBooks = async (userToken) => {
    const reqHeader = {
      'Authorization': `Bearer ${userToken}`
    }
    try {
      const result = await getAllAdminBooksAPI(reqHeader)
      if (result.status == 200) {
        setUserBooks(result.data)
      } else {
        console.log(result);

      }

    } catch (err) {
      console.log(err);

    }
  }

  const approveBook=async(book)=>{
    const userToken=sessionStorage.getItem("token")
        const reqHeader = {
      'Authorization': `Bearer ${userToken}`
    }
    try{
      const result=await approveBookAPI(book,reqHeader)
      if(result.status==200)
      {
        setUpdateBookStatus(result.data)
      }
    }catch(err)
    {
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

              {
                userBooks?.length > 0 ?
                  userBooks?.map((item, index) => (
                    <div key={index} className="shadow p-3 rounded mx-4">
                      <img src={item?.imageUrl} alt="book" width={'100%'} height={'300px'} />
                      <div className='flex flex-col justify-center items-center mt-2'>
                        <p className="text-blue-700 font-bold text-lg">{item?.author}</p>
                        <p className="text-blue-700">{item?.title}</p>
                        <p>${item?.discountPrice}</p>
                        <div className="w-full text-center mt-2">
                          {
                            item?.status == "pending" &&
                            <button onClick={()=>approveBook(item)} className="p-2 rounded bg-green-700 text-white hover:bg-green-600">Approve</button>

                          }
                          {
                            item?.status == "approved" &&
                            <div className="flex justify-end w-full">
                              <img width={'40px'} height={'40px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD43yFj6F2cIDBjKzjTC3do3sWHo8p8WdEqA&s" alt="tick mark" />
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  ))
                  :
                  <div>No Books added yet...</div>
              }

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
                        <img src={item?.profile ? `${SERVERURL}/uploads/${item.profile}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s"} alt="user" width={'50px'} style={{ borderRadius: '50%' }} />
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