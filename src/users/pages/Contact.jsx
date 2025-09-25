import React from 'react'
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';


function Contact() {
  return (
    <>
      <Header />

      <div className='md:px-40 p-5'>
        <div className="text-center my-5">
          <h1 className='text-2xl mt-3 font-bold'>Contacts</h1>
          <p className='mt-5 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur placeat aperiam molestias ex, atque eveniet beatae consequatur pariatur sint suscipit laudantium dicta quasi debitis dolore eaque distinctio omnis aut corporis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus assumenda veniam sequi repellendus voluptas, eum corrupti unde.</p>
        </div>

        <div className='md:flex justify-evenly items-center md:ms-0 ms-15'>

          <div className="flex items-center w-75 md:my-0 my-5">
            <div style={{ height: '40px', width: '40px', borderRadius: '50%' }} className='bg-neutral-300 flex justify-evenly items-center me-4'>
              <FontAwesomeIcon icon={faLocationDot} size='xl' />
            </div>
            <p>123 Main Street,Apt 4B,Anytown,CA 91234</p>
          </div>

          <div className="flex items-center w-75 md:my-0 my-5">
            <div style={{ height: '40px', width: '40px', borderRadius: '50%' }} className='bg-neutral-300 flex justify-evenly items-center me-4'>
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <p>+91 9874561230</p>
          </div>


          <div className="flex items-center w-75 md:my-0 my-5">
            <div style={{ height: '40px', width: '40px', borderRadius: '50%' }} className='bg-neutral-300 flex justify-evenly items-center me-4'>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <p>Bookstore@gmail.com</p>
          </div>
        </div>


        <div className='md:grid grid-cols-2 w-full md:mt-5 mt-10 '>
          <div className='md:p-4 w-full'>
            <div className='bg-neutral-300 md:m-5 p-6 flex flex-col justify-center items-center md:w-[80%]' >
              <h1 className='text-lg font-bold my-4'>Send me Message</h1>

              <input type="text" placeholder='Name' className='bg-white rounded px-2 py-1 text-black w-full my-2 placeholder:text-sm' />

              <input type="text" placeholder='Email Id' className='bg-white rounded px-2 py-1 text-black w-full my-2 placeholder:text-sm' />

              <textarea type="text" placeholder='Message' className='bg-white rounded px-2 py-1 text-black w-full my-2 placeholder:text-sm' rows={4} />

              <button className='bg-sky-900 text-white mt-4 w-full p-1'>Send<FontAwesomeIcon icon={faPaperPlane} className='ms-1' /></button>
            </div>
          </div>


          <div className=' md:p-4 mt-5 md:mt-0'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.55832925056!2d76.30939519235461!3d10.008813454140235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1758723011433!5m2!1sen!2sin"
              title='Kakkanad'
              className='md:w-[90%] w-full h-64 md:h-98 border-0 md:p-5'
              allowfullscreen
              loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contact