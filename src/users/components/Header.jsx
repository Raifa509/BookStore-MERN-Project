import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function Header() {

  // for menu 
  const [listStatus, setListStatus] = useState(false)
  const [token,setToken]=useState("")
  const [userDp,setUserDp]=useState("")


  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const token=sessionStorage.getItem("token")
      setToken(token)
      const user=JSON.parse(sessionStorage.getItem("user"))
      setUserDp(user.profile)
    }

  },[])

  return (
    <>
      <div className="grid grid-cols-3 p-3">

        {/* logo */}
        <div className='flex items-center'>
          <img src="/logo.png" alt="" width={'50px'} height={'50px'} />
          <h1 className="text-xl font-bold ms-2 md:hidden">BOOKSTORE</h1>
        </div>

        {/* title */}
        <div className='md:flex justify-center items-center hidden'>
          <h1 className='font-bold text-3xl'>BOOK STORE</h1>
        </div>

        {/* login */}
        <div>
          <div className='md:flex justify-end items-center me-3 hidden'>
            <FontAwesomeIcon icon={faInstagram} size="lg" className="me-2" />
            <FontAwesomeIcon icon={faTwitter} size="lg" className="me-2" />
            <FontAwesomeIcon icon={faFacebook} size="lg" className="me-2" />

            {/* login link */}

           {
            !token ?
             <Link to={'/login'}><button className='border border-black rounded px-2 py-1 ms-3 hover:bg-black hover:text-white'><FontAwesomeIcon icon={faUser} size="sm" className="me-2" />
              Login</button></Link>

            :
           <div className='ms-2'>
            <button>
              <img width={'40px'} height={'40px'} src={userDp==""?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s":""} alt="user" />
            </button>
           </div>
           }

           



          </div>
        </div>
      </div>

      {/* menu and login */}
      <nav className='bg-slate-800 text-white p-2 w-full'>
        <div className='flex justify-between items-center md:hidden'>
          <button onClick={()=>setListStatus(!listStatus)}><FontAwesomeIcon icon={faBars} size="lg" className="me-2" />
          </button>

          {/* login link */}
          <Link to={'/login'}><button className='border border-white rounded px-2 py-1 me-3 hover:bg-black hover:text-white cursor-pointer'><FontAwesomeIcon icon={faUser} size="sm" className="me-2" />
            Login</button>
          </Link>

        </div>

        <ul className={listStatus ? "flex flex-col" : 'md:flex justify-center items-center hidden'}>
          <li className='md:mx-4 mt-3 md:mt-0 mx-2'><Link to={'/'} className='text-sm'>Home</Link></li>
          <li className='md:mx-4 mt-3 md:mt-0 mx-2'><Link to={'/all-books'} className='text-sm '>Books</Link></li>
          <li className='md:mx-4 mt-3 md:mt-0 mx-2'><Link to={'/careers'} className='text-sm '>Careers</Link></li>
          <li className='md:mx-4 mt-3 md:mt-0 mx-2'><Link to={'/contact'} className='text-sm '>Contact</Link></li>        
          </ul>
      </nav>
    </>
  )
}

export default Header