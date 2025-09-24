import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Auth({register}) {
  return (
    <>
     <div className='flex flex-col justify-center items-center bg-[url("/login-bg.jpg")] bg-cover bg-center min-h-screen'>
      <div className='p-10 w-[30rem]'>
        <h1 className='text-3xl font-bold text-center'>BOOK STORE</h1>
         <div className='bg-black text-white p-5 flex flex-col justify-center items-center my-5 w-full'>
          <div style={{width:'60px',height:'60px',borderRadius:'50%'}} className='border flex justify-center items-center'>
            <FontAwesomeIcon icon={faUser} size='2xl'/>
          </div>
          <h1 className='text-xl mt-3'>{register?"Register":"Login"}</h1>
          <div className='mt-4 w-full p-2'>
            <input type="text" className='border w-full px-3 py-1 mb-4 placeholder-gray-400 rounded bg-white text-black' placeholder='Email Id' />
            <input type="text" className='border w-full px-3 py-1 mb-2 placeholder-gray-400 rounded bg-white text-black' placeholder='Password' />
            <div className='flex justify-between'>
              <p className='text-xs text-yellow-400'>*Never share the password with others</p>
              <p className='text-xs underline'>Forget Password</p>

            </div>
          </div>
      </div>
      </div>
     
     </div>
    </>
  )
}

export default Auth