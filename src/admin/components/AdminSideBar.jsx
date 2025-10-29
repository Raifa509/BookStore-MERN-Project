import { faBars, faBook, faGear, faGraduationCap, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { adminUpdateContext } from '../../contextAPI/ContextShare'
import SERVERURL from '../../Services/serverURL'

function AdminSideBar() {
  const [listStatus,setListStatus]=useState(false)
  const {adminEditResponse}=useContext(adminUpdateContext)
  const [token,setToken]=useState("")
  const [userDp,setUserDp]=useState("")
 const [userName,setUserName]=useState("")
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      setToken(token)
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDp(user?.profile)
      setUserName(user?.username)
    }

  }, [token,adminEditResponse])
  return (
    <>
      <div className='md:min-h-screen bg-sky-100 md:mb-0 mb-3'>
        <div className="flex justify-center items-center flex-col ">
          {/* icon+name */}
          <div className='md:pt-20 pt-15'>

            <img src={userDp == "" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s" : userDp.startsWith("https://lh3.googleusercontent.com") ? userDp : `${SERVERURL}/uploads/${userDp}`} alt="admin profile" style={{width:'90px',height:'90px',borderRadius:'50%'}} />

          <h1 className='text-lg mt-4 -ml-6'>{userName}</h1>

            <button onClick={() => setListStatus(!listStatus)} className='md:hidden'><FontAwesomeIcon icon={faBars} size="lg" className="ms-6 mt-4 mb-3" />
            </button>
          </div>
        </div>
        
        {/* navs */}
        <div className={listStatus?'block ms-18 pb-5':'md:block hidden ms-18 '}>
          <div className='mt-5'>
            <Link to={'/admin-dashboard'}><FontAwesomeIcon icon={faHouse} className='me-2'/>Home</Link>
          </div>

          <div className='mt-3'>
            <Link to={'/admin-resources'}><FontAwesomeIcon icon={faBook} className='me-2'/>Books</Link>
          </div>

          <div className='mt-3'>
           <Link to={'/admin-career'}> <FontAwesomeIcon icon={faGraduationCap} className='me-2'/>Careers</Link>
          </div>

          <div className='mt-3'>
            <Link to={'/admin-setting'}><FontAwesomeIcon icon={faGear} className='me-2'/>Settings</Link>   
          </div>


        </div>


      </div>


    </>
  )
}

export default AdminSideBar