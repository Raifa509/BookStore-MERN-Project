import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Auth({register}) {
  return (
    <>
     <div className='flex flex-col justify-center items-center bg-[url("/login-bg.jpg")] bg-cover bg-center min-h-screen'>
      <div className='p-10 w-[30rem]'>
        <h1 className='text-3xl font-bold text-center'>BOOK STORE</h1>
         <div className='bg-black text-white p-5 flex flex-col justify-center items-center my-5 w-full'>
          <div style={{width:'60px',height:'60px',borderRadius:'50%'}} className='border flex justify-center items-center mt-3'>
            <FontAwesomeIcon icon={faUser} size='2xl'/>
          </div>
          <h1 className='text-xl mt-3'>{register?"Register":"Login"}</h1>
          <div className='mt-4 w-full p-2'>
            {
              register && 
              <input type="text" className='border w-full px-3 py-1 mb-4 placeholder-gray-400 rounded bg-white text-black' placeholder='Username' />

            }
            <input type="text" className='border w-full px-3 py-1 mb-4 placeholder-gray-400 rounded bg-white text-black' placeholder='Email Id' />
            <input type="text" className='border w-full px-3 py-1 mb-2 placeholder-gray-400 rounded bg-white text-black' placeholder='Password' />
            <div className='flex justify-between mt-1'>
              <p className='text-xs text-yellow-400'>*Never share the password with others</p>

              {!register && <p className='text-xs underline'>Forget Password</p>}

            </div>

            {
              register ?

            <button className='w-full bg-green-700 font-bold rounded py-2 mt-6'>Register</button>

              :
           <button className='w-full bg-green-700 font-bold rounded py-2 mt-6'>Login</button>

            }

            {/* google authentication */}

            <div className='text-center mt-15 text-sm mb-6'>
              
              {
                register ?
                <p>Are you a Already User?<Link to={'/login'} className='underline ms-2 text-sky-500'>Login</Link></p>
                :
                <p>Are you a New User?<Link to={'/register'} className='underline ms-2 text-sky-500'>Register</Link></p>
              }
            </div>
          </div>
      </div>
      </div>
     
     </div>
    </>
  )
}

export default Auth