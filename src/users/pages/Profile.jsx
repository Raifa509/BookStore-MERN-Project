import React, { useContext, useEffect, useState } from 'react'
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify'
import { addBookAPI, getAllUserPurchasedBookAPI, getAllUserUploadBookAPI, removeUserUploadBookAPI } from "../../Services/allAPI";
import SERVERURL from '../../Services/serverURL';
import Edit from '../components/Edit';
import { userUpdateContext } from '../../contextAPI/ContextShare';

function Profile() {

  const [sellBookStatus, setSellBookStatus] = useState(true)
  const [bookStatus, setBookStatus] = useState(false)
  const [purchaseStatus, setPurchaseStatus] = useState(false)
  const [bookDetails, setBookDetails] = useState({
    title: "", author: "", noOfPages: "", imageUrl: "", price: "", discountPrice: "", abstract: "", publisher: "", language: "", isbn: "", category: "", uploadImges: [],
  })
  const [preview, setPreview] = useState("")
  const [previewList, setPreviewList] = useState([])
  const [token, setToken] = useState("")
  // console.log(bookDetails);
  const [userUploadedBooks, setUserUploadedBooks] = useState([])
  const [deleteBookStatus, setDeleteBookStatus] = useState(false)
  const [purchaseBooks, setPurchaseBooks] = useState([])
  const [username, setUsername] = useState("")
  const [userDp, setUserDp] = useState("")
  const { userEditResponse } = useContext(userUpdateContext)

  // console.log(userUploadedBooks);
  // console.log(purchaseBooks);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUsername(user.username)
      setUserDp(user.profile)
    }
  }, [userEditResponse])

  useEffect(() => {
    if (bookStatus) {
      getAllUserBooks()
    } else if (purchaseStatus == true) {
      getAllUserBoughtBooks()
    }
  }, [bookStatus, deleteBookStatus, purchaseStatus])


  const getAllUserBooks = async () => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await getAllUserUploadBookAPI(reqHeader)
      if (result.status == 200) {
        setUserUploadedBooks(result.data)
      } else {
        console.log(result);

      }
    } catch (err) {
      console.log(err);

    }
  }


  const handleUploadBookImage = (e) => {
    // console.log(e.target.files[0]);
    const url = URL.createObjectURL(e.target.files[0])

    const fileArray = bookDetails.uploadImges
    fileArray.push(e.target.files[0])
    setBookDetails({ ...bookDetails, uploadImges: fileArray })
    setPreview(url)
    // console.log(url);

    const bookImgArray = previewList
    bookImgArray.push(url)
    setPreviewList(bookImgArray)

  }

  const handleBookSubmit = async () => {
    const { title, author, noOfPages, imageUrl, price, discountPrice, abstract, publisher, language, isbn, category, uploadImges } = bookDetails

    if (!title || !author || !noOfPages || !imageUrl || !price || !discountPrice || !abstract || !publisher || !language || !isbn || !category || uploadImges.length == 0) {
      toast.info("Please fill the form completely")
    } else {
      //api call
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const reqBody = new FormData()
      //append:reqBody.append(key,value)
      for (let key in bookDetails) {
        if (key != "uploadImges") {
          reqBody.append(key, bookDetails[key])
        } else {
          bookDetails.uploadImges.forEach((img) => {
            reqBody.append("uploadImges", img)
          })
        }
      }

      try {
        const result = await addBookAPI(reqBody, reqHeader)
        console.log(result);
        if (result.status == 401) {
          toast.warning(result.response.data)
          // handleReset()
        } else if (result.status == 200) {
          toast.success("Book added Successfully!!")
          handleReset()
        } else {
          toast.error('Something went wrong!!!')
          // handleReset()
        }

      } catch (err) {
        console.log(err);
      }

    }
  }

  //handle reset
  const handleReset = () => {
    setBookDetails({
      title: "", author: "", noOfPages: "", imageUrl: "", price: "", discountPrice: "", abstract: "", publisher: "", language: "", isbn: "", category: "", uploadImges: [],
    })
    setPreview("")
    setPreviewList([])
  }

  //delete user uploaded book
  const removeBook = async (bookId) => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await removeUserUploadBookAPI(bookId, reqHeader)
      if (result.status == 200) {
        toast.success(result.data)
        setDeleteBookStatus(true)
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);

    }
  }


  const getAllUserBoughtBooks = async () => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await getAllUserPurchasedBookAPI(reqHeader)
      if (result.status == 200) {
        setPurchaseBooks(result.data)
      } else {
        console.log(result.data);

      }
    } catch (err) {
      console.log(err);

    }
  }



  return (
    <>
      <Header />
      <div className='bg-slate-800' style={{ height: '200px' }}> </div>
      <div className="bg-white p-3" style={{ width: '230px', height: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-130px' }}>
        <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src={!userDp ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s" : userDp?.startsWith("https://lh3.googleusercontent.com") ? userDp : `${SERVERURL}/uploads/${userDp}`} alt="profile" />
      </div>

      <div className="md:flex justify-between px-20 mt-5">
        <div className="flex items-center">
          <h1 className="font-bold md:text-3xl text-2xl">{username}</h1>
          <FontAwesomeIcon icon={faCircleCheck} className='text-blue-400 ms-2' />
        </div>
        <div><Edit /></div>
      </div>


      <div className="md:px-20 px-5 my-8 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veritatis ex nam officiis voluptate facilis animi reiciendis vero in ipsa obcaecati maxime corrupti delectus voluptatem vitae amet, molestias ipsam quas.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, minus assumenda porro non possimus laudantium architecto vitae ab odit veniam recusandae dolores. Commodi vitae doloremque quas error inventore. Ut, aspernatur.
      </div>

      {/* tabs */}
      <div className="md:px-40">
        <div className="flex justify-center items-center my-5">
          <p onClick={() => { setSellBookStatus(true); setPurchaseStatus(false); setBookStatus(false) }} className={sellBookStatus ? 'text-blue-500 px-4 py-3 border-gray-200  cursor-pointer border-t border-l border-r ' : 'border-b border-gray-200 cursor-pointer px-4 py-3'}>Sell Books</p>

          <p onClick={() => { setBookStatus(true); setPurchaseStatus(false); setSellBookStatus(false) }} className={bookStatus ? 'text-blue-500 px-4 py-3 border-gray-200  cursor-pointer border-t border-l border-r ' : 'border-b border-gray-200 cursor-pointer px-4 py-3'}>Book Status</p>

          <p onClick={() => { setPurchaseStatus(true); setBookStatus(false); setSellBookStatus(false) }} className={purchaseStatus ? 'text-blue-500 px-4 py-3 border-gray-200  cursor-pointer border-t border-l border-r ' : 'border-b border-gray-200 cursor-pointer px-4 py-3'}>Purchase History</p>
        </div>
      </div>

      {/* contents */}

      {/* sellBooks */}

      {
        sellBookStatus &&
        <div>

          <div className="bg-gray-200 p-10 md:mx-40 my-20">
            <h3 className='text-center text-2xl font-medium'>Book Details</h3>

            <div className="md:grid grid-cols-2 mt-10 w-full">

              <div className='px-3'>
                <div className="mb-3 px-3">
                  <input type="text" value={bookDetails?.title} onChange={(e) => setBookDetails({ ...bookDetails, title: e.target.value })} placeholder='Title' className='w-full p-2 rounded text-black placeholder-gray-400 bg-white' />
                </div>
                <div className="mb-3 px-3">
                  <input type="text" value={bookDetails?.author} onChange={(e) => setBookDetails({ ...bookDetails, author: e.target.value })} placeholder='Author' className='w-full p-2 rounded text-black placeholder-gray-400 bg-white' />
                </div>
                <div className="mb-3 px-3">
                  <input type="text" value={bookDetails?.noOfPages} onChange={(e) => setBookDetails({ ...bookDetails, noOfPages: e.target.value })} placeholder='No.of Pages' className='w-full p-2 rounded text-black placeholder-gray-400 bg-white' />
                </div>
                <div className="mb-3 px-3">
                  <input type="text" value={bookDetails?.imageUrl} onChange={(e) => setBookDetails({ ...bookDetails, imageUrl: e.target.value })} placeholder='Image URL' className='w-full p-2 rounded text-black placeholder-gray-400 bg-white' />
                </div>
                <div className="mb-3 px-3">
                  <input type="text" value={bookDetails?.price} onChange={(e) => setBookDetails({ ...bookDetails, price: e.target.value })} placeholder='Price' className='w-full p-2 rounded text-black placeholder-gray-400 bg-white' />
                </div>
                <div className="mb-3 px-3">
                  <input type="text" value={bookDetails?.discountPrice} onChange={(e) => setBookDetails({ ...bookDetails, discountPrice: e.target.value })} placeholder='Discount Price' className='w-full p-2 rounded text-black placeholder-gray-400 bg-white' />
                </div>
                <div className="mb-3 px-3">
                  <textarea type="text" value={bookDetails?.abstract} onChange={(e) => setBookDetails({ ...bookDetails, abstract: e.target.value })} placeholder='Abstract' className='w-full p-2 rounded text-black placeholder-gray-400 bg-white' rows={10} />
                </div>
              </div>

              <div className="px-3">
                <div className="mb-3 px-3">
                  <input type="text" value={bookDetails?.publisher} onChange={(e) => setBookDetails({ ...bookDetails, publisher: e.target.value })} placeholder='Publisher' className='w-full p-2 rounded text-black placeholder-gray-400 bg-white' />
                </div>
                <div className="mb-3 px-3">
                  <input type="text" value={bookDetails?.language} onChange={(e) => setBookDetails({ ...bookDetails, language: e.target.value })} placeholder='Language' className='w-full p-2 rounded text-black placeholder-gray-400 bg-white' />
                </div>
                <div className="mb-3 px-3">
                  <input type="text" value={bookDetails?.isbn} onChange={(e) => setBookDetails({ ...bookDetails, isbn: e.target.value })} placeholder='ISBN' className='w-full p-2 rounded text-black placeholder-gray-400 bg-white' />
                </div>
                <div className="mb-3 px-3">
                  <input type="text" value={bookDetails?.category} onChange={(e) => setBookDetails({ ...bookDetails, category: e.target.value })} placeholder='Category' className='w-full p-2 rounded text-black placeholder-gray-400 bg-white' />
                </div>

                <div className="mb-3 flex justify-center items-center mt-10">
                  <label htmlFor="bookImage">
                    <input onChange={(e) => handleUploadBookImage(e)} type="file" name="" id="bookImage" className='hidden' />
                    {
                      !preview ?
                        <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_640.png" alt="book image" width={'200px'} height={'200px'} />
                        :
                        <img src={preview} width={'200px'} height={'200px'} />
                    }
                  </label>
                </div>
                {preview && <div className="flex justify-center items-center ">
                  {
                    previewList?.map(imgUrl => (
                      <img src={imgUrl} alt="book image" width={'70px'} height={'70px'} className='mx-3' />
                    ))
                  }
                  {previewList.length < 3 && <label htmlFor="bookImage">
                    <input onChange={(e) => handleUploadBookImage(e)} type="file" name="" id="bookImage" className='hidden' />
                    <FontAwesomeIcon icon={faSquarePlus} className='text-4xl text-gray-400' />
                  </label>}
                </div>}

                <div className='flex items-center justify-center mt-25'>

                  <button className='bg-white px-6 py-1 rounded text-gray-600 border hover:bg-gray-600 hover:text-white  cursor-pointer me-7' onClick={handleReset}>Reset</button>
                  <button className='bg-white px-6 py-1 rounded text-blue-500 border hover:bg-blue-500 hover:text-white  cursor-pointer ' onClick={handleBookSubmit}>Submit</button>

                </div>

              </div>



            </div>

          </div>
        </div>
      }

      {/* book status */}
      {
        bookStatus &&
        <div className='p-10 my-20 shadow rounded mx-40'>
          {/* duplicate div according to book */}
          {
            userUploadedBooks?.length > 0 ?
              userUploadedBooks?.map((item, index) => (
                <div key={index} className="p-5 rounded mt-4 bg-gray-100">
                  <div className="md:grid grid-cols-[3fr_1fr]">
                    <div className="px-4">
                      <h2 className='text-xl font-bold'>{item?.title}</h2>
                      <h3 className='text-lg'>{item?.author}</h3>
                      <h4 className='text-md text-blue-500'>$ {item?.discountPrice}</h4>
                      <p className="text-justify text-sm mt-4">
                        {item?.abstract}
                      </p>

                      <div className="flex mt-4">
                        {
                          item?.status == "pending" ? <img src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="pending" width={'115px'} /> : item?.status == "approved" ?
                            <img src="/approved.png" alt="pending" width={'115px'} height={'100px'} /> :
                            <img src="/rejected.png" alt="pending" width={'115px'} />
                        }

                      </div>


                    </div>

                    <div className="px-4 mt-4 md:mt-0">
                      <img src={item?.imageUrl} alt="book images" width={'250px'} height={'250px'} className='mx-2 my-3' />

                      <div className="mt-4 flex justify-end">
                        <button onClick={() => removeBook(item?._id)}
                          className="bg-white px-4 py-1 text-red-500 rounded ms-5 border border-red-500 hover:bg-red-500 hover:text-white cursor-pointer">Delete</button>

                      </div>
                    </div>
                  </div>
                </div>
              ))

              :
              <div className='flex items-center justify-center flex-col'>
                <img src="https://static.wixstatic.com/media/1cf354_fff3948fea4141d4a94d91995105c58e~mv2.gif" alt="" width={'30%'} />
                <p className='font-semibold text-md'>Books not uploaded yet!!!</p>
              </div>
          }


        </div>
      }

      {/* purchase status */}

      {
        purchaseStatus &&
        <div className='p-10 my-20 shadow rounded mx-40'>
          {/* duplicate div according to book */}
          {
            purchaseBooks?.length > 0 ?
              purchaseBooks?.map((item, index) => (
                <div className="p-5 rounded mt-4 bg-gray-100">
                  <div className="md:grid grid-cols-[3fr_1fr]">
                    <div className="px-4">
                      <h2 className='text-xl font-bold'>{item?.title}</h2>
                      <h3 className='text-lg'>{item?.author}</h3>
                      <h4 className='text-md text-blue-500'>{item?.discountPrice}</h4>
                      <p className="text-justify text-sm mt-4">
                        {item?.abstract}
                      </p>

                      <div className="flex mt-4">
                        <img src="https://www.citypng.com/public/uploads/preview/hd-sold-green-stamp-word-png-7017516946853662lgydj6is3.png" alt="" width={'100px'} height={'100px'} />
                      </div>


                    </div>

                    <div className="px-4 mt-4 md:mt-0">
                      <img src={item?.imageUrl} alt="book images" width={'250px'} height={'250px'} className='mx-2 my-3' />

                    </div>
                  </div>
                </div>
              ))
              :
              <div className='flex items-center justify-center flex-col'>
                <img src="https://static.wixstatic.com/media/1cf354_fff3948fea4141d4a94d91995105c58e~mv2.gif" alt="" width={'30%'} />
                <p className='font-semibold text-md'>Books not uploaded yet!!!</p>
              </div>
          }

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
      <Footer />
    </>
  )
}

export default Profile