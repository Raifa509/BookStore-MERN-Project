import React from 'react'
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ViewBook() {
  return (
    <>
      <Header />
      <div className='md:m-10 m-5 '>
        <div className="border shadow p-5 border-gray-200">
          <div className="md:grid grid-cols-4">
            <div className="col-span-1">
              <div className='flex justify-center items-center'><img src="https://edit.org/img/blog/xk5-1024-free-ebook-cover-templates-download-online.webp" alt="book" width={'250px'} height={'250px'} /></div>
            </div>

            <div className="col-span-3 md:mt-0 mt-10">
              <div className="flex justify-between">
                <h1 className='text-xl font-bold'>Title</h1>
                <button className='text-gray-400'><FontAwesomeIcon icon={faEye} /></button>
              </div>

              <p className="my-3 text-blue-700">-Author</p>

              <div className="md:grid grid-cols-3 gap-5 my-10">
                <p className='font-bold'>Publisher : demo </p>
<p className='font-bold'>Language : demo </p>
<p className='font-bold'>No.of Pages : demo </p>
<p className='font-bold'>Seller Mails : demo </p>
<p className='font-bold'>Real Price : demo </p>
<p className='font-bold'>ISBN : demo </p>
              </div>


              <div className="md:my-10 my-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ex iusto magnam nihil, eligendi numquam odit modi quas est saepe atque. Fugiat delectus quod quaerat quis odio beatae ipsum maxime?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam facere possimus saepe tempora iure fugiat est ut aperiam, consectetur eius maxime sunt, officia quia laudantium quos, suscipit sint minus! Quaerat.</p>
              </div>


              <div className="flex justify-end">
                  <button className="bg-blue-700 px-4 py-1 text-white rounded"><Link to={'/all-books'}><FontAwesomeIcon icon={faBackward} className='me-1'/>Back</Link>
                  </button>
                   <button className="bg-green-600 px-4 py-1 text-white rounded ms-5"><Link to={'/'}>Buy $123</Link></button>
              </div>
            </div>

          </div>


        </div>


      </div>
      <Footer />
    </>
  )
}

export default ViewBook