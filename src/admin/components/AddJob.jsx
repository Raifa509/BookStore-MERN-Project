import { faAdd, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { addJobAPI } from '../../Services/allAPI'
import { adminNewAddJob } from '../../contextAPI/ContextShare'

function AddJob() {
  const [openModal, setOpenModel] = useState(false)
  const [jobDetails, setJobDetails] = useState({
    jobTitle: "", location: "", jobType: "", salary: "", qualification: "", experience: "", description: ""
  })
  const {setAddJobResponse}=useContext(adminNewAddJob)

  // console.log(jobDetails);

  const handleReset = () => {
    setJobDetails({
      jobTitle: "", location: "", jobType: "", salary: "", qualification: "", experience: "", description: ""

    })
  }

  const handleAddJob = async () => {
    const { jobTitle, location, jobType, salary, qualification, experience, description } = jobDetails
    if (!jobTitle || !location || !jobType || !salary || !qualification || !experience || !description) {
      toast.info("Please fill the form completely!!")
    } else {
      if (sessionStorage.getItem("token")) {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
          'Authorization': `Bearer ${token}`
        }
        try {
          const result = await addJobAPI(jobDetails, reqHeader)
          if (result.status == 200) {
            toast.success("New Job Added!!!")
            handleReset()
            //share data to context
            setAddJobResponse(result.data)
            //close modal
            setOpenModel(false)

          } else if (result.status == 409) {
            toast.warning(result.response.data)
            handleReset()
          } else {
            toast.error("Something went wrong...")
          }
        } catch (err) {
          console.log(err);
          toast.warning("Something went wrong...")
        }
      } else {
        toast.warning("Something went wrong...")
      }
    }
  }

  return (
    <>
      <button onClick={() => setOpenModel(!openModal)} className="px-3 rounded shadow-md py-2 bg-blue-600 text-white border hover:border-blue-600 hover:text-blue-600 hover:bg-white cursor-pointer ms-4 md:ms-0">
        <FontAwesomeIcon icon={faAdd} className='!hidden md:!inline-block ' />Add
      </button>

      {
        openModal &&

        <div>
          <div className='fixed w-full h-full bg-gray-500/40 inset-0 flex items-center justify-center'>
            <div className='bg-white md:w-xl fixed rounded-2xl flex flex-col'>

              {/* header */}
              <div className='w-full h-16 bg-black text-white p-5 flex items-center justify-between rounded-t-2xl'>
                <h2>New Job Opening Form</h2>
                <FontAwesomeIcon icon={faClose} onClick={() => setOpenModel(!openModal)} />
              </div>

              {/* input boxes */}
              <form action="">
                <div className='mt-10 px-5'>
                  <input value={jobDetails?.jobTitle} onChange={(e) => setJobDetails({ ...jobDetails, jobTitle: e.target.value })} type="text" placeholder='Job Title' className='w-full border border-gray-500 py-2 px-4 rounded-xl' />
                </div>
                <div className='mt-5 px-5'>
                  <input value={jobDetails?.location} onChange={(e) => setJobDetails({ ...jobDetails, location: e.target.value })} type="text" placeholder='Location' className='w-full border border-gray-500 py-2 px-4 rounded-xl' />
                </div>
                <div className='mt-5 px-5'>
                  <input value={jobDetails?.jobType} onChange={(e) => setJobDetails({ ...jobDetails, jobType: e.target.value })} type="text" placeholder='Job Type' className='w-full border border-gray-500 py-2 px-4 rounded-xl' />
                </div>
                <div className='mt-5 px-5'>
                  <input value={jobDetails?.salary} onChange={(e) => setJobDetails({ ...jobDetails, salary: e.target.value })} type="text" placeholder='Salary' className='w-full border border-gray-500 py-2 px-4 rounded-xl' />
                </div>
                <div className='mt-5 px-5'>
                  <input value={jobDetails?.qualification} onChange={(e) => setJobDetails({ ...jobDetails, qualification: e.target.value })} type="text" placeholder='Qualification' className='w-full border border-gray-500 py-2 px-4 rounded-xl' />
                </div>
                <div className='mt-5 px-5'>
                  <input value={jobDetails?.experience} onChange={(e) => setJobDetails({ ...jobDetails, experience: e.target.value })} type="text" placeholder='Experience' className='w-full border border-gray-500 py-2 px-4 rounded-xl' />
                </div>
                <div className='mt-5 px-5'>
                  <textarea value={jobDetails?.description} onChange={(e) => setJobDetails({ ...jobDetails, description: e.target.value })} type="text" placeholder='Description' className='w-full border border-gray-500 py-2 px-4 rounded-xl' />
                </div>
              </form>

              {/* buttons */}
              <div className='flex items-center justify-end px-5 my-7'>
                <button onClick={handleReset} className='bg-amber-500 text-white px-3 py-1 border rounded hover:bg-white hover:text-amber-500 hover:border-amber-500 cursor-pointer'>Reset</button>
                <button onClick={handleAddJob} className='bg-green-600 text-white px-3 py-1 border rounded hover:bg-white hover:text-green-600 hover:border-green-600 cursor-pointer ms-4'>Add</button>
              </div>

            </div>
          </div>
        </div>
      }


      {/* toast for alert */}
      <ToastContainer
        position="top-center"
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

export default AddJob