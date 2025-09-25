import React, { useState } from 'react'
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function AllBooks() {

  // for filter
  const [listStatus, setListStatus] = useState(false)


  return (
    <>
      <Header />
      <>
        <div className='flex flex-col justify-center items-center my-5'>
          <h1 className='text-3xl font-bold'>Collections</h1>
          <div className="flex my-5">
            <input type="text" className="px-2 py-1  border border-gray-600 text-black shadow w-full placeholder-gray-500 placeholder:text-sm" placeholder='Search By Title ' />
            <button className="bg-blue-900 text-white p-2">Search</button>
          </div>
        </div>

        {/* grid */}
        <div className="md:grid grid-cols-4 p-5 md:px-20 p-5">
          <div className="col-span-1">
            <div className='flex justify-between'>
              <h1 className="text-lg font-semibold">Filter</h1>
              <button onClick={() => setListStatus(!listStatus)} className='md:hidden'><FontAwesomeIcon icon={faBars} size="lg" className="me-2" />
              </button>
            </div>

            {/* filter list */}
            <div className={listStatus?'block':'md:block hidden'}>
              <div className='mt-3'>
                <input type="radio" id='Literary' name='filter' />
                <label className='ms-2' htmlFor="Literary">Literary Fiction</label>
              </div>

              <div className='mt-3'>
                <input type="radio" id='philosophy' name='filter' />
                <label className='ms-2' htmlFor="philosophy">Philosophy</label>
              </div>
              <div className='mt-3'>
                <input type="radio" id='romance' name='filter' />
                <label className='ms-2' htmlFor="romance">Romance</label>
              </div>

              <div className='mt-3'>
                <input type="radio" id='mystery' name='filter' />
                <label className='ms-2' htmlFor="mystery">Mystery/Thriller</label>
              </div>
              <div className='mt-3'>
                <input type="radio" id='horror' name='filter' />
                <label className='ms-2' htmlFor="horror">Horror</label>
              </div>

              <div className='mt-3'>
                <input type="radio" id='auto' name='filter' />
                <label className='ms-2' htmlFor="auto">Auto/Biography</label>
              </div>

              <div className='mt-3'>
                <input type="radio" id='selfhelp' name='filter' />
                <label className='ms-2' htmlFor="selfhelp">Self-Help</label>
              </div>

              <div className='mt-3'>
                <input type="radio" id='politics' name='filter' />
                <label className='ms-2' htmlFor="politics">Politics</label>
              </div>
              <div className='mt-3'>
                <input type="radio" id='no-filter' name='filter' />
                <label className='ms-2' htmlFor="no-filter">No filter</label>
              </div>
            </div>


          </div>

          <div className="col-span-3">
            <div className="md:grid grid-cols-4 gap-5 mt-8 md:mt-0">

              <div className="shadow p-3 rounded">
                <img src="https://edit.org/img/blog/xk5-1024-free-ebook-cover-templates-download-online.webp" alt="book" width={'100%'} height={'300px'} />
                <div className='flex flex-col justify-center items-center mt-2'>
                  <p className="text-blue-700 font-bold text-lg">Author</p>
                  <p className="text-blue-700">Book Title</p>
                  <Link to={'/book/id/view'}><button className='bg-blue-700 text-white px-4 py-1 rounded my-3 cursor-pointer'>View Book</button></Link>
                </div>
              </div>

              <div className="shadow p-3 rounded">
                <img src="https://edit.org/img/blog/xk5-1024-free-ebook-cover-templates-download-online.webp" alt="book" width={'100%'} height={'300px'} />
                <div className='flex flex-col justify-center items-center mt-2'>
                  <p className="text-blue-700 font-bold text-lg">Author</p>
                  <p className="text-blue-700">Book Title</p>
                  <Link to={'/book/id/view'}><button className='bg-blue-700 text-white px-4 py-1 rounded my-3 cursor-pointer'>View Book</button></Link>

                </div>
              </div>

              <div className="shadow p-3 rounded">
                <img src="https://edit.org/img/blog/xk5-1024-free-ebook-cover-templates-download-online.webp" alt="book" width={'100%'} height={'300px'} />
                <div className='flex flex-col justify-center items-center mt-2'>
                  <p className="text-blue-700 font-bold text-lg">Author</p>
                  <p className="text-blue-700">Book Title</p>
                  <Link to={'/book/id/view'}><button className='bg-blue-700 text-white px-4 py-1 rounded my-3 cursor-pointer'>View Book</button></Link>

                </div>
              </div>


              <div className="shadow p-3 rounded">
                <img src="https://edit.org/img/blog/xk5-1024-free-ebook-cover-templates-download-online.webp" alt="book" width={'100%'} height={'300px'} />
                <div className='flex flex-col justify-center items-center mt-2'>
                  <p className="text-blue-700 font-bold text-lg">Author</p>
                  <p className="text-blue-700">Book Title</p>
                  <Link to={'/book/id/view'}><button className='bg-blue-700 text-white px-4 py-1 rounded my-3 cursor-pointer'>View Book</button></Link>
                </div>
              </div>

            </div>
          </div>
        </div>

      </>
      <Footer />
    </>
  )
}

export default AllBooks