import React, { useContext, useEffect, useState } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import AdminHeader from '../components/AdminHeader'
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faP, faPen } from '@fortawesome/free-solid-svg-icons';
import SERVERURL from '../../Services/serverURL';
import { toast, ToastContainer } from 'react-toastify'
import { updateAdminProfileAPI } from '../../Services/allAPI';
import { adminUpdateContext } from '../../contextAPI/ContextShare';




function AdminSetting() {

  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    cpassword: "",
    bio: "",
    profile: "",//to hold only uploading profile
    role: ""
  })
  const [token, setToken] = useState("")
  const [existingProfile, setExistingProfile] = useState("")
  const [preview, setPreview] = useState("")
  const {setAdminEditResponse}=useContext(adminUpdateContext)


  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDetails({ username: user?.username, password: user?.password, cpassword: user?.password, bio: user?.bio, role: user?.role })
      setExistingProfile(user?.profile)
    }
  }, [])

  // console.log(userDetails);

  const handlePictureUpdate = (e) => {
    setUserDetails({ ...userDetails, profile: e.target.files[0] })
    const url = URL.createObjectURL(e.target.files[0])
    setPreview(url)
  }


  const handleReset = () => {
    const user = JSON.parse(sessionStorage.getItem("user"))
    setUserDetails({ username: user.username, password: user.password, cpassword: user.password, bio: user.bio, role: user.role })
    setExistingProfile(user.profile)
    setPreview("")
  }

  const handleUpdate = async () => {
    const { username, password, cpassword, bio, profile, role } = userDetails
    if (!username || !password || !cpassword) {
      toast.info("Fill the form completely")
    } else {
      if (password != cpassword) {
        toast.info("Password & Confirm password must be same")
      } else {
        const reqHeader = {
          'Authorization': `Bearer ${token}`
        }
        const reqBody = new FormData()
        if (preview) {
          for (let key in userDetails) {
            reqBody.append(key, userDetails[key])
          }
          const result = await updateAdminProfileAPI(reqBody, reqHeader)
          if (result.status == 200) {
            sessionStorage.setItem("user", JSON.stringify(result.data))
            handleReset()
            setAdminEditResponse(result.data)
          } else {
            toast.error("something went wrong!!!")
            console.log(result);
          }
        }
        else {
          const result = await updateAdminProfileAPI({ username, password, bio, role, profile: existingProfile }, reqHeader)
          if (result.status == 200) {

            toast.success("Profile updated successfully")
            sessionStorage.setItem("user", JSON.stringify(result.data))
            handleReset()
            setAdminEditResponse(result.data)

          }
          else {
            toast.error("something went wrong!!!")
            console.log(result);
          }
        }
      }
    }
  }

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

                {
                  existingProfile == "" ?
                    <img src={preview ? preview :
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s"
                    } alt="" style={{ width: '90px', height: '90px', borderRadius: '50%' }} className='mt-5' />
                    :
                    existingProfile.startsWith("https://lh3.googleusercontent.com") ?
                      <img src={preview ? preview : existingProfile} alt="" style={{ width: '90px', height: '90px', borderRadius: '50%' }} className='mt-5' />

                      :
                      <img src={preview ? preview : `${SERVERURL}/uploads/${existingProfile}`} alt="" style={{ width: '90px', height: '90px', borderRadius: '50%' }} className='mt-5' />
                }



                <FontAwesomeIcon icon={faPen} className="bg-yellow-400 p-1 text-white rounded absolute right-0 bottom-0" />

                <input onChange={e => handlePictureUpdate(e)} type="file" className='hidden' id='admicPic' />

              </label>


              <input type="text" value={userDetails?.username} onChange={e => setUserDetails({ ...userDetails, username: e.target.value })} placeholder='Username' className='w-full rounded bg-white px-3 py-2 mt-10' />
              <input type="text" value={userDetails?.password} onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} placeholder='Password' className='w-full rounded bg-white px-3 py-2 mt-5' />
              <input type="text" value={userDetails?.cpassword} onChange={e => setUserDetails({ ...userDetails, cpassword: e.target.value })} placeholder='Confirm Password' className='w-full rounded bg-white px-3 py-2 mt-5' />

              <div className="flex mt-7 w-full">
                <button className='px-4 w-full py-1 bg-orange-400 text-white rounded m-2 ' onClick={handleReset}>Reset</button>
                <button onClick={handleUpdate} className='px-3 w-full py-1 bg-green-600 text-white rounded m-2 '>Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      {/* toast for alert */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default AdminSetting