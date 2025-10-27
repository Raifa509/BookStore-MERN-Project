import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import SERVERURL from '../../Services/serverURL';
import { toast, ToastContainer } from 'react-toastify'
import { userUpdateContext } from '../../contextAPI/ContextShare';
import { updateUserProfileAPI } from '../../Services/allAPI';

function Edit() {
    const [offCanvasStatus, setOffCanvasStatus] = useState(false)
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
    const [preview, setPreview] = useState("")//to store file as url
    const { setUserEditResponse } = useContext(userUpdateContext)

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            const userToken = sessionStorage.getItem("token")
            setToken(userToken)
            const user = JSON.parse(sessionStorage.getItem("user"))
            setUserDetails({ username: user?.username, password: user?.password, cpassword: user?.password, bio: user?.bio, role: user?.role })
            setExistingProfile(user?.profile)
        }
    }, [])


    const handlePictureUpload = (e) => {
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
        const { username, password, bio, role, cpassword, profile } = userDetails
        if (!username || !password || !cpassword || !bio) {
            toast.info("Please fill the form completely")
        } else {
            if (password != cpassword) {
                toast.warning("Password & confirm password must be the same")
            } else {
                const reqHeader = {
                    'Authorization': `Bearer ${token}`
                }
                const reqBody=new FormData()
                if(preview)
                {
                    for(let key in userDetails)
                    {
                        reqBody.append(key,userDetails[key])
                    }
                    const result=await updateUserProfileAPI(reqBody,reqHeader)
                    if(result.status==200)
                    {
                        sessionStorage.setItem("user",JSON.stringify(result.data))
                        handleReset()
                        setOffCanvasStatus(false)
                        setUserEditResponse(result.data)
                    }else{
                        toast.error("something went wrong!!!")
                        console.log(result);
                    }
                }else{
                    const result=await updateUserProfileAPI({username,password,bio,role,profile:existingProfile},reqHeader)
                     if(result.status==200)
                    {
                        toast.success("Profile updated successfully")
                        sessionStorage.setItem("user",JSON.stringify(result.data))
                        handleReset()
                        setOffCanvasStatus(false)
                        setUserEditResponse(result.data)
                    }else{
                        toast.error("something went wrong!!!")
                        console.log(result);
                    }

                }


               

            }
        }
    }
    return (
        <>
            <button onClick={() => setOffCanvasStatus(!offCanvasStatus)} className='text-blue-600 border border-blue-600 rounded px-3 py-1 hover:text-white'>
                <FontAwesomeIcon icon={faPenToSquare} />Edit
            </button>

            {/* offcanvas */}
            {offCanvasStatus &&
                <div>
                    <div className="fixed bg-gray-500/75 w-full h-full inset-0 transition-opacity">

                        <div className='bg-white h-full w-90 fixed top-0 left-0 z-50'>
                            <div className='bg-gray-900 px-3 py-4 flex justify-between text-white text-lg'>
                                <h1>Edit User Profile</h1>
                                <FontAwesomeIcon onClick={() => setOffCanvasStatus(false)} icon={faXmark} />
                            </div>
                            <div className='flex justify-center items-center flex-col my-5 relative'>

                                <label htmlFor="profilePic">
                                    <input onChange={e => handlePictureUpload(e)} type="file" name="" id="profilePic" style={{ display: 'none' }} />


                                    {
                                        existingProfile == "" ?
                                            <img className='z-52' style={{ width: '100px', height: '100px', borderRadius: '50%' }} src={preview ? preview : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s"} alt="" />
                                            :
                                            existingProfile.startsWith("https://lh3.googleusercontent.com") ?
                                                <img className='z-52' style={{ width: '100px', height: '100px', borderRadius: '50%' }} src={preview ? preview : existingProfile} alt="" />

                                                :
                                                <img className='z-52' style={{ width: '100px', height: '100px', borderRadius: '50%' }} src={preview ? preview : `${SERVERURL}/uploads/${existingProfile}`} alt="" />

                                    }



                                    <button className="bg-yellow-300 z-53  text-white py-1 px-2 rounded absolute right-33 top-18">
                                        <FontAwesomeIcon icon={faPen} />
                                    </button>
                                </label>

                                <div className="mt-10 mb-3 w-full px-5">
                                    <input value={userDetails.username} onChange={e => setUserDetails({ ...userDetails, username: e.target.value })} type="text" className='w-full border border-gray-300 placeholder-gray-400 p-2 rounded' placeholder='Username' />
                                </div>
                                <div className="mb-3 w-full px-5">
                                    <input value={userDetails.password} onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} type="text" className='w-full border border-gray-300 placeholder-gray-400 p-2 rounded' placeholder='Password' />
                                </div>
                                <div className="mb-3 w-full px-5">
                                    <input value={userDetails.cpassword} onChange={e => setUserDetails({ ...userDetails, cpassword: e.target.value })} type="text" className='w-full border border-gray-300 placeholder-gray-400 p-2 rounded' placeholder='Confirm Password' />
                                </div>
                                <div className="mb-3 w-full px-5">

                                    <textarea value={userDetails.bio} onChange={e => setUserDetails({ ...userDetails, bio: e.target.value })} name="" id="" className='w-full border border-gray-300 placeholder-gray-400 p-2 rounded' placeholder='Bio'></textarea>
                                </div>
                                <div className="flex justify-end w-full px-5 mt-7">
                                    <button onClick={handleReset} className="bg-amber-600 text-white rounded border py-3 px-4 hover:text-amber-600 hover:border-amber-600 hover:bg-white">
                                        Reset
                                    </button>
                                    <button onClick={handleUpdate} className="bg-green-600 text-white rounded border py-3 px-4 hover:text-green-600 hover:border-green-600 hover:bg-white ms-4">
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}

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

export default Edit