import React, { useEffect, useState } from 'react'
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { getAllBooksAPI } from '../../Services/allAPI';
import { toast, ToastContainer } from 'react-toastify'
import { all } from 'axios';

function AllBooks() {

  // for filter
  const [listStatus, setListStatus] = useState(false)
  const [token, setToken] = useState("")
  const [books, setBooks] = useState([])
  const [tempBooks, setTempBooks] = useState([])
  const [allCategories, setAllCategories] = useState([])
  const [searchKey,setSearchKey]=useState("")

  // console.log(books);
  // console.log(allCategories);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      getAllBooks(userToken)
    }
  }, [searchKey])

  const getAllBooks = async (userToken) => {
    const reqHeader = {
      'Authorization': `Bearer ${userToken}`
    }
    try {
      const result = await getAllBooksAPI(searchKey,reqHeader)
      if (result.status == 200) {
        setBooks(result.data)

        //steps for filtering
        setTempBooks(result.data)
        const tempCategory = result.data.map(item => item.category)
        // console.log(tempCategory);
        const tempArray = [...new Set(tempCategory)]
        // console.log(tempArray);
        setAllCategories(tempArray)

      } else {
        console.log(result);
        toast.warning(result.response.data)
      }
    } catch (err) {
      console.log(err);

    }
  }

  //filtering according to book category
  const filterBooks = (category) => {
    if (category == "No filter") {
      setBooks(tempBooks)
    } else {
      setBooks(tempBooks?.filter(item => item.category.toLowerCase() == category.toLowerCase()))

    }



  }
  return (
    <>
      <Header />
      <>
        {
          token ?
            <>
              <div className='flex flex-col justify-center items-center my-5'>
                <h1 className='text-3xl font-bold'>Collections</h1>
                <div className="flex my-5">
                  <input onChange={e=>setSearchKey(e.target.value)} type="text" className="px-2 py-1  border border-gray-600 text-black shadow w-full placeholder-gray-500 placeholder:text-sm" placeholder='Search By Title ' />
                  <button className="bg-blue-900 text-white p-2">Search</button>
                </div>
              </div>

              {/* grid */}
              <div className="md:grid grid-cols-4 md:px-20 p-5">
                <div className="col-span-1">
                  <div className='flex justify-between'>
                    <h1 className="text-lg font-semibold">Filter</h1>
                    <button onClick={() => setListStatus(!listStatus)} className='md:hidden'><FontAwesomeIcon icon={faBars} size="lg" className="me-2" />
                    </button>
                  </div>

                  {/* filter list */}
                  <div className={listStatus ? 'block' : 'md:block hidden'}>

                    {
                      allCategories?.length > 0 &&
                      allCategories?.map((item, index) => (
                        <div key={index} className='mt-3'>
                          <input type="radio" id={item} name='filter' onClick={() => filterBooks(item)} />
                          <label className='ms-2' htmlFor={item}>{item}</label>
                        </div>


                      ))
                    }
                    <div className='mt-3'>
                      <input type="radio" id='no-filter' name='filter' onClick={() => filterBooks("No filter")} />
                      <label className='ms-2' htmlFor="no-filter">No filter</label>
                    </div>
                  </div>


                </div>

                <div className="col-span-3">
                  <div className="md:grid grid-cols-4 gap-5 mt-8 md:mt-0">
                    {
                      books?.length > 0 ?
                        books?.map((item) => (
                          <div key={item?._id} className="shadow p-3 rounded">
                            <img src={item.imageUrl
                            } alt="book" width={'100%'} height={'300px'} />
                            <div className='flex flex-col justify-center items-center mt-2'>
                              <p className="text-blue-700 font-bold text-lg">{item.
                                author.slice(0, 20)
                              }</p>
                              <p className="text-blue-700">{item.title.slice(0, 20)
                              }</p>
                              <Link to={`/book/${item?._id}/view`}><button className='bg-blue-700 text-white px-4 py-1 rounded my-3 cursor-pointer'>View Book</button></Link>
                            </div>
                          </div>

                        ))
                        :
                        <div className='flex items-center justify-center'>
                          <p>No Books Available</p>
                        </div>

                    }

                  </div>
                </div>
              </div>
            </>
            :
            <div className='flex flex-col my-4 justify-center items-center min-h-52'>
              <img src="https://assets-v2.lottiefiles.com/a/790b2fc0-1171-11ee-afd8-87913996c05d/JCzKThXsSJ.gif" alt="lock" className='w-72' />
              <h1 className='font-semibold text-lg'>Please <Link to={'/login'} className='text-blue-500 underline'>Login</Link> to explore more...</h1>
            </div>
        }

      </>
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

export default AllBooks