import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function AdminHeader() {
  const navigate=useNavigate()
  const logout=()=>{
    sessionStorage.clear()
    navigate('/')
  }
  return (
    <>
    <div className='flex justify-between md:px-10 px-3 py-4'>
      <div className='flex items-center'>
        <img src="/logo.png" alt="logo" />
        <h2 className='md:text-xl font-semibold ms-2 '>BOOK STORE</h2>
      </div>
      {/* logout btn */}
      <button onClick={logout} className="rounded border px-3 text-lg md:me-5 hover:bg-black hover:text-white"><FontAwesomeIcon icon={faPowerOff} className='me-2' />Logout</button>
    </div>

    <div className='w-full bg-black text-white p-3'>
      <marquee>Welcome,  Admin!    You're all set to manage and monitor the system. Let’s get to work!</marquee>

    </div>
    </>
  )
}

export default AdminHeader