import React from 'react'
import AdminSideBar from '../components/AdminSideBar'
import AdminHeader from '../components/AdminHeader'
import Footer from "../../components/Footer";

function AdminCareer() {
  return (
    <>
    
    <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSideBar />
        </div>
        <div className="col-span-4">
          Admin career
        </div>
      </div>

      <Footer />
      
      </>
  )
}

export default AdminCareer