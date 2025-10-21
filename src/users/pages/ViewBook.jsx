import React, { useEffect, useState } from 'react'
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faCamera, faClose, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { getSingleBookAPI } from '../../Services/allAPI';
import { toast, ToastContainer } from 'react-toastify'
import SERVERURL from '../../Services/serverURL';

function ViewBook() {

  const [modalStatus, setModalStatus] = useState(false)
  const { id } = useParams()
  const [book, setBook] = useState({})
  // console.log("Book ID:", id);
  console.log(book);

  useEffect(() => {
    viewBookDetails()
  }, [])

  const viewBookDetails = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await getSingleBookAPI(id, reqHeader)
        if (result.status == 200) {
          setBook(result.data)
        } else if (result.response.status == 401) {
          toast.warning(result.response.data)
        } else {
          console.log(result);

        }
      } catch (err) {
        console.log(err);

      }
    }
  }

  return (
    <>
      <Header />
      <div className='md:m-10 m-5 '>
        <div className="border shadow p-5 border-gray-200">


          <div className="md:grid grid-cols-4">
            <div className="col-span-1">
              <div className='flex justify-center items-center'><img src={book?.imageUrl
              } alt="book" width={'250px'} height={'250px'} /></div>
            </div>

            <div className="col-span-3 md:mt-0 mt-10">
              <div className="flex justify-between">
                <h1 className='text-xl font-bold'>{book?.title}</h1>
                <button onClick={() => setModalStatus(true)} className='text-gray-400 cursor-pointer'><FontAwesomeIcon icon={faEye} /></button>
              </div>

              <p className="my-3 text-blue-700">- Author : {book?.author}</p>

              <div className="md:grid grid-cols-3 gap-5 my-10">
                <p className='font-bold'>Publisher : {book?.publisher} </p>
                <p className='font-bold'>Language : {book?.language} </p>
                <p className='font-bold'>No.of Pages : {book?.noOfPages} </p>
                <p className='font-bold'>Seller Mails : {book?.userMail} </p>
                <p className='font-bold'>Real Price : $ {book?.price} </p>
                <p className='font-bold'>ISBN : {book?.isbn} </p>
              </div>


              <div className="md:my-10 my-4">
                <p>{book?.abstract}</p>
              </div>


              <div className="flex justify-end">
                <button className="bg-blue-700 px-4 py-1 text-white rounded"><Link to={'/all-books'}><FontAwesomeIcon icon={faBackward} className='me-1' />Back</Link>
                </button>
                <button className="bg-green-600 px-4 py-1 text-white rounded ms-5"><Link to={'/'}>Buy $ {book?.discountPrice}</Link></button>
              </div>
            </div>

          </div>




        </div>


      </div>

      {/* modal content */}

      {
        modalStatus &&
        <div className='relative z-10' onClick={() => setModalStatus(false)}>
          {/* this div for overlay */}
          <div className='bg-gray-500/75 fixed inset-0'>

            {/* content div goes here */}
            <div className="flex justify-center items-center min-h-screen ">
              <div className='bg-white rounded md:w-250 w-100 ' >
                <div className='flex justify-between items-center bg-black text-white p-3'>
                  <h3>Books Images</h3>
                  <FontAwesomeIcon onClick={() => setModalStatus(false)} icon={faClose} />
                </div>

                <div className='my-5 ml-5'>
                  <p className='text-blue-600 '>
                    <FontAwesomeIcon icon={faCamera} className='me-2' />
                    Camera click of the book in the hand of seller</p>

                  {/* duplicate images */}

                  <div className='md:flex my-4'>
                    {/* duplicate images */}
                    {
                      book?.uploadImg?.length > 0 ?
                       book?.uploadImg?.map(item=>(
                         <img src={`${SERVERURL}/uploads/${item}`} alt="book images" width={'250px'} height={'250px'} className='mx-2 my-3' />
                       ))

                        :
                        <p>User uploaded book images are unavailable</p>
                    }


                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      }


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

export default ViewBook