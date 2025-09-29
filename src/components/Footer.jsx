import React from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full bg-slate-800 text-white p-10 h-auto mt-10">
        <div>
          <h5>ABOUT US</h5>
          <p className="text-sm mt-3 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos velit sequi
            odio eveniet illo iste a possimus nesciunt necessitatibus voluptatum
            debitis, cupiditate in! Quae exercitationem obcaecati dignissimos?
            Consectetur, quisquam vitae!
          </p>
        </div>

        <div className="md:ms-30">
          <h5>NEWSLETTER</h5>
          <p className="text-sm mt-3">Stay updated with our latest trends</p>
          <div className="flex">
            <input type="text" className="bg-white mt-3 placeholder-gray-500 px-2" placeholder='Email ID' />
            <button className="bg-yellow-300 text-black mt-3 px-1">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        <div className="md:ms-15">
          <h5>FOLLOW US</h5>
          <p className="text-sm mt-3">Let us be social</p>
          <div className="flex items-center mt-3">
            <FontAwesomeIcon icon={faInstagram} size="lg" className="me-1" />
            <FontAwesomeIcon icon={faTwitter} size="lg" className="mx-1" />
            <FontAwesomeIcon icon={faFacebook} size="lg" className="mx-1" />
            <FontAwesomeIcon icon={faLinkedin} size="lg" className="mx-1" />
          </div>
        </div>
      </div>

      <div className="bg-black text-white flex justify-center items-center py-4 px-2 text-xs md:text-sm text-center">
        <p>
          Copyright © 2025 All rights reserves | This website is made with by 💛
          Raifa
        </p>
      </div>

    </>
  )
}

export default Footer