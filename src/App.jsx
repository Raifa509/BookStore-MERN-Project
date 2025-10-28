import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from "./users/pages/Home";
import { useEffect, useState } from 'react';
import Preloader from "./components/Preloader";
import Auth from "./pages/Auth";
import Pnf from "./pages/Pnf";
import AllBooks from "./users/pages/AllBooks";
import ViewBook from "./users/pages/ViewBook";
import Profile from "./users/pages/Profile";
import Careers from "./users/pages/Careers";
import Contact from "./users/pages/Contact";
import AdminCareer from "./admin/pages/AdminCareer";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminResource from "./admin/pages/AdminResource";
import AdminSetting from "./admin/pages/AdminSetting";




function App() {

  const [loading,setLoading]=useState(true)

  useEffect(() => {
  console.log("✅ App mounted");
}, []);

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 7000);
  },[])

  return (
    <>
    <Routes>
      <Route path='/' element={loading?<Preloader/>:<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='/all-books' element={<AllBooks/>}/>
      <Route path='/book/:id/view' element={<ViewBook/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/careers' element={<Careers/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/admin-dashboard' element={loading?<Preloader/>:<AdminDashboard/>}/>
      <Route path='/admin-career' element={<AdminCareer/>}/>
      <Route path='/admin-resources' element={<AdminResource/>}/>
      <Route path='/admin-setting' element={<AdminSetting/>}/>
      <Route path='/*' element={<Pnf/>}/>
    </Routes>
    </>
  )
}

export default App
