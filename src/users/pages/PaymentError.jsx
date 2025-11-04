import React from 'react'
import Header from "../components/Header"
import Footer from "../../components/Footer";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
function PaymentError() {
  return (
     <>
    <Header/>
    <div className="container my-10">
        <div className="md:grid grid-cols-2 px-20 justify-center items-center">
            <div>
                <h1 className="md:text-2xl text-red-600">Sorry! Your Payment is unsuccessfull...</h1>
                <p className="text-xl mt-4 mb-8">We Apologize for the Inconvience Caused and Appreciate Your Visit to BookStore...</p>
                <Link to={'/'} className='bg-blue-800 px-4 py-3 text-white rounded shadow-xl'><FontAwesomeIcon icon={faBackward} className='me-3'/>Explore More Books</Link>
            </div>
            <div className="flex justify-center items-center">
                <img src="https://img.freepik.com/premium-vector/payment-error-info-message_773186-1131.jpg?semt=ais_hybrid&w=740&q=80" alt="error" />
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default PaymentError