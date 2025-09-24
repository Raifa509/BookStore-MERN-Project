import React from 'react'
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Header />
      {/* landing */}
      <div style={{ height: '500px' }} className="flex flex-col justify-center items-center bg-[url('/bg.jpg')] w-full bg-cover bg-center text-white">
        <div style={{ height: '500px', backgroundColor: 'rgba(0,0,0,0.5)' }} className='w-full flex flex-col justify-center items-center '>
          <h1 className='text-5xl font-extrabold'>Wonderful Gifts</h1>
          <p>Give your family and friends a book</p>
          <div className='mt-10 relative w-100'>
            <input type="text" className='w-100 rounded-4xl border px-5 bg-white py-2 placeholder-gray-500 placeholder:text-sm' placeholder='Search Books' />
            <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute right-3 text-sky-400 top-1/2 transform -translate-y-1/2 me-2 cursor-pointer' />
          </div>
        </div>

      </div>
      {/* arrival */}

      <section className='md:px-40 p-5 text-center mt-7' >

        <h1 className='text-2xl font-bold'>NEW ARRIVALS</h1>
        <h1 className='text-2xl'>Explore Our Latest Collection</h1>

        <div className="grid md:grid-cols-4 w-full mt-5">
          <div className="p-3">
            <div className="shadow p-3 rounded">
              <img src="https://edit.org/img/blog/xk5-1024-free-ebook-cover-templates-download-online.webp" alt="book" width={'100%'} height={'300px'}/>
              <div className='flex flex-col justify-center items-center mt-2'>
                  <p className="text-blue-700 font-bold text-lg">Author</p>
                  <p className="text-blue-700">Book Title</p>
                  <p>$Price</p>
              </div>
            </div>
          </div>
        </div>

           <div className='text-center my-6'>
            <Link to={'/all-books'} className='rounded px-3 py-2 text-white bg-blue-500 font-bold'>Explore More</Link>
          </div>
      </section>



      {/* author */}

      <section className='md:px-40 p-5 md:grid grid-cols-2 gap-15 mt-10'>
      <div className='text-center'>
        <h1 className='font-bold text-lg'>FEATURED AUTHORS</h1>
        <h2 className='font-medium text-md'>Captivates with every word</h2>
        <p className='text-justify mt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsum eius adipisci quibusdam? Aspernatur magnam nobis vel dignissimos, libero laudantium pariatur tenetur, corporis saepe voluptates at ab iste consequuntur temporibus.
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, quae cumque magni sequi placeat repudiandae labore aperiam harum aliquam, at sapiente! Veniam repellat doloremque at assumenda reprehenderit, enim repudiandae molestiae.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem rerum, reprehenderit qui facilis quaerat natus ut tempora magni mollitia amet tempore quod aperiam iusto voluptas eaque odio minus cum minima?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo voluptates minima ullam vitae debitis dignissimos enim, odio provident animi commodi ab error est soluta vero itaque. Ipsam odit nihil cupiditate.
        </p>
      </div>

      <div className='flex justify-center items-center'>
        <img src="https://t3.ftcdn.net/jpg/03/61/29/34/360_F_361293465_apAoVqTuoUmwVYKJugqL271lmBwWrSKI.jpg" alt="" />
      </div>

      </section>

      {/* testimony */}

      <section className='md:px-40 p-5 flex flex-col justify-center items-center mt-10'>
        <h1 className='text-2xl font-bold mt-2'>TESTIMONIALS</h1>
        <h1 className='text-xl font-medium mt-2'>See What Others Are Saying</h1>
        
        <div className='my-7 flex flex-col justify-center items-center'>
          <img src="https://thumbs.dreamstime.com/b/portrait-happy-african-american-female-company-leader-ceo-boss-executive-standing-front-company-building-copy-spac-167982879.jpg" alt="" width={'200px'} height={'200px'} style={{borderRadius:'50%'}}/>
          <h4 className='mt-3 font-medium'>Treesa Joseph</h4>
          <p className='text-justify my-4 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dicta enim nemo rerum! Magni eos aperiam ratione officiis tempore qui modi, facilis sapiente expedita repudiandae voluptate dolorem fuga perferendis! Dolorum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem suscipit temporibus quam officiis ex itaque voluptas eos dolorum doloremque accusamus laudantium laborum labore tempore fuga quas, et sint voluptates eveniet?</p>
        </div>

      </section>

      <Footer />
    </>
  )
}

export default Home