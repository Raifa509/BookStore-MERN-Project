import React from 'react'
import AdminSideBar from '../components/AdminSideBar'
import AdminHeader from '../components/AdminHeader'
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faP, faPen } from '@fortawesome/free-solid-svg-icons';



function AdminSetting() {
  return (
    <>

      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSideBar />
        </div>
        <div className="col-span-4">

          <h1 className='mt-10 font-semibold text-xl text-center'>Settings</h1>
          <div className="md:grid grid-cols-2 md:m-10 p-4 gap-15">
            <div className='text-justify md:mt-18'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, rerum! Esse, impedit ratione commodi repudiandae eos doloribus in cumque quod est officia corrupti ullam aut, sapiente iusto quo nihil qui!
                Lorem ipsum dolor sit<br /> <br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis, pariatur cumque quidem, ipsum neque, atque magnam cupiditate excepturi ea repellat harum vero voluptatem cum ratione alias. Commodi, vero quibusdam?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam deleniti temporibus qui recusandae sit est nulla soluta, modi obcaecati repudiandae alias officiis nihil minus quos nobis, a sunt dicta fugiat!
              </p>
            </div>
            <div className='rounded bg-sky-100 flex justify-center items-center flex-col px-10 py-2 md:mt-0 my-10'>

              {/* admic pic change */}
              <label htmlFor="admicPic" className='relative'>
                <img src="/login-bg.jpg" alt="admin profile" style={{ width: '90px', height: '90px', borderRadius: '50%' }} className='mt-5' />
                <FontAwesomeIcon icon={faPen} className="bg-yellow-400 p-1 text-white rounded absolute right-0 bottom-0" />
                <input type="file" className='hidden' id='admicPic' />

              </label>


              <input type="text" placeholder='Username' className='w-full rounded bg-white px-3 py-2 mt-10' />
              <input type="text" placeholder='Password' className='w-full rounded bg-white px-3 py-2 mt-5' />
              <input type="text" placeholder='Confirm Password' className='w-full rounded bg-white px-3 py-2 mt-5' />
              <div className="flex mt-7 w-full">
                <button className='px-4 w-full py-1 bg-orange-400 text-white rounded m-2 '>Reset</button>
                <button className='px-3 w-full py-1 bg-green-600 text-white rounded m-2 '>Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}

export default AdminSetting