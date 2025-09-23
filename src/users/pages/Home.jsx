import React from 'react'
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Home() {
  return (
    <>
    <Header/>
    {/* landing */}
    <div className="flex flex-col justify-center items-center bg-[url('/bg.jpg')] h-screen w-full bg-cover bg-center text-white">
    <h1 className='text-5xl font-extrabold'>Wonderful Gifts</h1>
    <p>Give your family and friends a book</p>
    <div className='mt-10 relative w-130'>
      <input type="text" className='w-full rounded-4xl border px-5 bg-white py-2 placeholder-gray-500 placeholder:text-sm' placeholder='Search Books' />
      <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute right-3 text-sky-400 top-1/2 transform -translate-y-1/2 me-2 cursor-pointer' />

    </div>
    </div>
    {/* arrival */}
    {/* author */}
    {/* testimony */}
    <Footer/>
    </>
  )
}

export default Home