import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
      <div className='w-full h-12 flex justify-between items-center py-1 px-4'>
        <img src="/logo.png" alt="" width={'30px'} />
        <h1 className='font-semibold text-xl ml-38'>BOOK STORE</h1>
        <div className='flex justify-center items-center me-6'>
          <FontAwesomeIcon icon={faInstagram} size="lg" className="me-2" />
          <FontAwesomeIcon icon={faTwitter} size="lg" className="me-2" />
          <FontAwesomeIcon icon={faFacebook} size="lg" className="me-2" />
          <div className='rounded border px-2 py-1 ms-2'>
            <Link to={'/login'}>
              <FontAwesomeIcon icon={faUser} size="sm" className="me-1" />
              Login</Link>
          </div>
        </div>
      </div>
      <div className='bg-slate-800 h-10 text-white p-2 flex justify-center items-center'>
        <Link to={'/'} className='text-sm'>Home</Link>
        <Link to={'/all-books'} className='ms-6 text-sm '>Books</Link>
        <Link to={'/careers'} className='ms-6 text-sm '>Careers</Link>
        <Link to={'/contact'} className='ms-6 text-sm '>Contact</Link>
      </div>
    </>
  )
}

export default Header