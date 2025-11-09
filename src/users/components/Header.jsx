import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faBars, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import SERVERURL from '../../Services/serverURL'
import { userAuthContext } from '../../contextAPI/AuthContext';
import { userUpdateContext } from '../../contextAPI/ContextShare';

function Header() {

  // for menu 
  const [listStatus, setListStatus] = useState(false)
  const [token, setToken] = useState("")
  const [userDp, setUserDp] = useState("")
  const [dropDownStatus, setDropDownStatus] = useState(false)
  const navigate = useNavigate()
  const { userEditResponse } = useContext(userUpdateContext)
  const { role, authorisedUser, setAuthorisedUser } = useContext(userAuthContext)

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      setToken(token)
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDp(user.profile)
    }

  }, [token, userEditResponse])

  //logout handle
  const handlelogout = () => {
    sessionStorage.clear();
    setAuthorisedUser(false)
    setToken("");
    setUserDp("");
    setDropDownStatus(false)
    navigate("/");
  }


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
                <div className='relative inline-block text-left'>
                  <button onClick={() => setDropDownStatus(!dropDownStatus)} className=' bg-white px-3 py-2 shadow-xs hover:bg-gray-50 w-full cursor-pointer'>
                    <img width={'40px'} height={'40px'} style={{ borderRadius: "50%" }} src={userDp == "" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s" : userDp.startsWith("https://lh3.googleusercontent.com") ? userDp : `${SERVERURL}/uploads/${userDp}`} alt="user" />
                  </button>

                  {
                    dropDownStatus &&
                    <div className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg'>
                      <div className="py-1">
                        <Link to={'/profile'} className='block px-4 py-2 text-sm text-gray-700'><FontAwesomeIcon icon={faAddressCard} className='me-2' />Profile</Link>
                        <button onClick={handlelogout} className='block px-4 py-2 text-sm text-gray-700 cursor-pointer'><FontAwesomeIcon icon={faPowerOff} className='me-2' />Logout</button>
                      </div>
                    </div>
                  }

                </div>
            }





          </div>
        </div>
      </div>

      {/* menu and login */}
      <nav className='bg-slate-800 text-white p-2 w-full'>
        <div className='flex justify-between items-center md:hidden'>
          <button onClick={() => setListStatus(!listStatus)}><FontAwesomeIcon icon={faBars} size="lg" className="me-2" />
          </button>

          {
            !token ?
              <Link to={'/login'}><button className='border border-black rounded px-2 py-1 ms-3 hover:bg-black hover:text-white'><FontAwesomeIcon icon={faUser} size="sm" className="me-2" />
                Login</button></Link>

              :

              <div className='relative inline-block text-left'>
                <button onClick={() => setDropDownStatus(!dropDownStatus)} className=' bg-gray-100 rounded-full px-1 py-1 shadow-xs hover:bg-gray-50 w-full cursor-pointer'>
                  <img width={'40px'} height={'40px'} style={{ borderRadius: "50%" }} src={userDp == "" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s" : userDp.startsWith("https://lh3.googleusercontent.com") ? userDp : `${SERVERURL}/uploads/${userDp}`} alt="user" />
                </button>

                {
                  dropDownStatus &&
                  <div className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg'>
                    <div className="py-1">
                      <Link to={'/profile'} className='block px-4 py-2 text-sm text-gray-700'><FontAwesomeIcon icon={faAddressCard} className='me-2' />Profile</Link>
                      <button onClick={handlelogout} className='block px-4 py-2 text-sm text-gray-700 cursor-pointer'><FontAwesomeIcon icon={faPowerOff} className='me-2' />Logout</button>
                    </div>
                  </div>
                }

              </div>
          }

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