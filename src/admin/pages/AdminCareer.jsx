import React, { useContext, useEffect, useState } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import AdminHeader from '../components/AdminHeader'
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AddJob from '../../users/components/AddJob';
import { getAllApplicationAPI, getAllJobsAPI, removeJobAPI } from '../../Services/allAPI';
import { adminNewAddJob } from '../../contextAPI/ContextShare';
import SERVERURL from '../../Services/serverURL';



function AdminCareer() {
  const [jobListStatus, setJobListStatus] = useState(true)
  const [listApplicantStatus, setListApplicantStatus] = useState(false)
  const [allJobs, setAllJobs] = useState([])
  const [searchKey, setSearchKey] = useState("")
  const [deleteJobStatus, setDeleteJobStatus] = useState(false)
  const { addJobResponse } = useContext(adminNewAddJob)
  const [applications, setApplications] = useState([])

  // console.log(allJobs);
  console.log(applications);

useEffect(() => {
  if (jobListStatus) {
    getAllJobs();
  } else if (listApplicantStatus) {
    getApplications();
  }
}, [searchKey, deleteJobStatus, addJobResponse, jobListStatus, listApplicantStatus]);


  useEffect

  const getAllJobs = async () => {
    try {
      const result = await getAllJobsAPI(searchKey)
      if (result.status == 200) {
        setAllJobs(result.data)
      }
    } catch (err) {
      console.log(err);

    }
  }

  const removeJob = async (id) => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token")
      const reqHeader = {
        'Authorization': `Bearer ${userToken}`
      }
      try {
        const result = await removeJobAPI(id, reqHeader)
        if (result.status == 200) {
          setDeleteJobStatus(result.data)
        }
      } catch (err) {
        console.log(err);

      }
    }

  }

  const getApplications = async () => {
    const userToken = sessionStorage.getItem("token");
    if (!userToken) {
      console.log("No token found");
      return;
    }

    const reqHeader = {
      Authorization: `Bearer ${userToken}`,
    };

    try {
      const result = await getAllApplicationAPI(reqHeader);
      if (result.status === 200) {
        setApplications(result.data);
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <>

      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSideBar />
        </div>
        <div className="col-span-4 p-10">
          {/* content */}

          <h1 className='text-2xl text-center '>Careers</h1>

          {/* tabs */}
          <div className="md:px-40">
            <div className="flex justify-center items-center my-5">
              <p onClick={() => { setJobListStatus(true); setListApplicantStatus(false) }} className={jobListStatus ? 'text-blue-500 px-4 py-3 border-gray-200  cursor-pointer border-t border-l border-r ' : 'border-b border-gray-200 cursor-pointer px-4 py-3'}>Job Post</p>
              <p onClick={() => { setListApplicantStatus(true); setJobListStatus(false) }} className={listApplicantStatus ? 'text-blue-500 px-4 py-3 border-gray-200  cursor-pointer border-t border-l border-r ' : 'border-b border-gray-200 cursor-pointer px-4 py-3'}>View Applicant</p>
            </div>
          </div>


          {/* tab content */}
          {
            jobListStatus &&
            <>
              <div className="flex justify-between items-center mt-10">
                <div className="flex">
                  <input onChange={e => setSearchKey(e.target.value)} type="text" className="px-2 py-1  text-black shadow w-full placeholder-gray-500 rounded border border-white placeholder:text-sm" placeholder='Job Title ' />
                  <button className="bg-green-500 text-white p-2 ms-2 rounded">Search</button>
                </div>
                <div><AddJob /></div>
              </div>

              {/* duplicate */}
              {
                allJobs?.length > 0 ?
                  allJobs.map((item, index) => (
                    <div key={index} className='shadow-lg p-8 mt-10 my-5'>
                      <div className='flex mb-5'>
                        <div className='w-full'>
                          <h4 className='text-lg mb-2'>{item?.jobTitle}</h4>
                          <hr />
                        </div>
                        <button onClick={() => removeJob(item?._id)} className='bg-red-600 text-white p-3 ms-5 flex items-center rounded' >Delete<FontAwesomeIcon icon={faTrash} /></button>
                      </div>
                      <div className='mt-5'>
                        <h3 className='my-2 text-blue-500'><FontAwesomeIcon icon={faLocationDot} className='me-2' />{item?.location}</h3>
                        <h3 className='my-2'>Job Type: {item?.jobType}</h3>
                        <h3 className='my-2'>Salary: {item?.salary}</h3>
                        <h3 className='my-2'>Qualification: {item?.qualification}</h3>
                        <h3 className='my-2'>Experience: {item?.experience}</h3>
                        <h3 className='my-2'>Description: {item?.description}</h3>
                      </div>
                    </div>
                  ))
                  :
                  <div className='flex items-center mt-15 text-md font-semibold'>No Job openings...</div>
              }
            </>

          }

          {
            listApplicantStatus &&
            <>
              <div className="p-10 overflow-x">
                <table className='w-full my-5 shadow'>
                  <thead>
                    <tr>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Sl No</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Job Title</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Name</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Qualification</th>

                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Email</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Phone</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Cover Letter</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Resume</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      applications?.length > 0 ?
                        applications?.map((item, index) => (
                          <tr key={item?._id}>
                            <td className="border border-gray-500 p-3 text-center">{index + 1}</td>
                            <td className="border border-gray-500 p-3 text-center">{item?.jobTitle}</td>
                            <td className="border border-gray-500 p-3 text-center">{item?.fullname}</td>
                            <td className="border border-gray-500 p-3 text-center">{item?.qualification}</td>

                            <td className="border border-gray-500 p-3 text-center">{item?.email}</td>
                            <td className="border border-gray-500 p-3 text-center">{item?.phone}</td>

                            <td className="border border-gray-500 p-3 text-center">{item?.coverLetter}</td>
                            <td className="border border-gray-500 p-3 text-center"><Link className='text-blue-600 underline' to={`${SERVERURL}/pdf/${item?.resume}`} target='_blank'>Resume</Link></td>
                          </tr>
                        ))

                        :
                        (
                          <tr>
                            <td colSpan="8" className="p-5 text-center text-gray-600 font-semibold">
                              No Applications are available
                            </td>
                          </tr>
                        )
                    }
                  </tbody>
                </table>
              </div>

            </>
          }






        </div>
      </div>

      <Footer />

    </>
  )
}

export default AdminCareer