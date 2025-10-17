import React, { useState } from 'react'
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faSquarePlus } from '@fortawesome/free-solid-svg-icons';

function Profile() {

  const [sellBookStatus, setSellBookStatus] = useState(true)
  const [bookStatus, setBookStatus] = useState(false)
  const [purchaseStatus, setPurchaseStatus] = useState(false)
  const [bookDetails, setBookDetails] = useState({
    title: "", author: "", noOfPages: "", imageUrl: "", price: "", discountPrice: "", abstract: "", publisher: "", language: "", isbn: "", category: "", uploadImges: [],
  })
  const [preview, setPreview] = useState("")
  const [previewList,setPreviewList]=useState([])
  // console.log(bookDetails);

  const handleUploadBookImage = (e) => {
    console.log(e.target.files[0]);
    const url = URL.createObjectURL(e.target.files[0])

    const fileArray=bookDetails.uploadImges
    fileArray.push(e.target.files[0])
    setBookDetails({...bookDetails,uploadImges:fileArray})
    setPreview(url)
    // console.log(url);

    const bookImgArray=previewList
    bookImgArray.push(url)
    setPreviewList(bookImgArray)

  }
  return (
    <>
      <Header />
      <div className='bg-slate-800' style={{ height: '200px' }}> </div>
      <div className="bg-white p-3" style={{ width: '230px', height: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-130px' }}>
        <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src="/login-bg.jpg" alt="profile" />
      </div>

      <div className="md:flex justify-between px-20 mt-5">
        <div className="flex items-center">
          <h1 className="font-bold md:text-3xl text-2xl">Username</h1>
          <FontAwesomeIcon icon={faCircleCheck} className='text-blue-400 ms-2' />
        </div>
        <div>Edit</div>
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

          <div className="bg-gray-200 p-10 mx-40 my-20">
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
               {   preview &&  <div className="flex justify-center items-center ">
                  {
                    previewList?.map(imgUrl=>(
                       <img src={imgUrl} alt="book image" width={'70px'} height={'70px'} className='mx-3' />
                    ))
                  }
                  {previewList.length<3 && <label htmlFor="bookImage">
                    <input onChange={(e) => handleUploadBookImage(e)} type="file" name="" id="bookImage" className='hidden' />
                    <FontAwesomeIcon icon={faSquarePlus} className='text-4xl text-gray-400' />
                  </label>}
                </div>}

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
          <div className="p-5 rounded mt-4 bg-gray-100">
            <div className="md:grid grid-cols-[3fr_1fr]">
              <div className="px-4">
                <h2 className='text-xl font-bold'>Title</h2>
                <h3 className='text-lg'>Author</h3>
                <h4 className='text-md text-blue-500'>Price</h4>
                <p className="text-justify text-sm mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo optio fugiat soluta reiciendis velit adipisci voluptatum beatae repudiandae, obcaecati eum aspernatur iusto praesentium atque alias placeat sint? Veniam, non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident minus, est repellendus optio officia maxime ipsam consequatur culpa ea inventore earum tenetur sed distinctio rem voluptate quasi reprehenderit molestiae dolorum!
                </p>

                <div className="flex mt-4">
                  <img src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="" width={'100px'} height={'100px'} />
                </div>


              </div>

              <div className="px-4 mt-4 md:mt-0">
                <img src="https://edit.org/img/blog/xk5-1024-free-ebook-cover-templates-download-online.webp" alt="book images" width={'250px'} height={'250px'} className='mx-2 my-3' />

                <div className="mt-4 flex justify-end">
                  <button className="bg-red-600 px-4 py-1 text-white rounded ms-5">Delete</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      }

      {/* purchase status */}

      {
        purchaseStatus &&
        <div className='p-10 my-20 shadow rounded mx-40'>
          {/* duplicate div according to book */}
          <div className="p-5 rounded mt-4 bg-gray-100">
            <div className="md:grid grid-cols-[3fr_1fr]">
              <div className="px-4">
                <h2 className='text-xl font-bold'>Title</h2>
                <h3 className='text-lg'>Author</h3>
                <h4 className='text-md text-blue-500'>Price</h4>
                <p className="text-justify text-sm mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo optio fugiat soluta reiciendis velit adipisci voluptatum beatae repudiandae, obcaecati eum aspernatur iusto praesentium atque alias placeat sint? Veniam, non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident minus, est repellendus optio officia maxime ipsam consequatur culpa ea inventore earum tenetur sed distinctio rem voluptate quasi reprehenderit molestiae dolorum!
                </p>

                <div className="flex mt-4">
                  <img src="https://www.citypng.com/public/uploads/preview/hd-sold-green-stamp-word-png-7017516946853662lgydj6is3.png" alt="" width={'100px'} height={'100px'} />
                </div>


              </div>

              <div className="px-4 mt-4 md:mt-0">
                <img src="https://edit.org/img/blog/xk5-1024-free-ebook-cover-templates-download-online.webp" alt="book images" width={'250px'} height={'250px'} className='mx-2 my-3' />


              </div>
            </div>
          </div>
        </div>
      }
      <Footer />
    </>
  )
}

export default Profile