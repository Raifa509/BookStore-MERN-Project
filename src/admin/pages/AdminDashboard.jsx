import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from "../../components/Footer";
import AdminSideBar from '../components/AdminSideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUsers, faUserTie } from '@fortawesome/free-solid-svg-icons';

function AdminDashboard() {
  return (
    <>
    <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSideBar />
        </div>
        <div className="col-span-4">
          Admin Dashboard
        </div>
      </div>

      <Footer />
    </>
  )
}

export default AdminDashboard