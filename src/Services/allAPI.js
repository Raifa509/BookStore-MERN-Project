import commonAPI from "./commonAPI";
import SERVERURL from "./serverURL";

//->guest users api

    //register api - called by Auth component when register btn clicked,content-type:"application/json"
    export const registerAPI=async(reqBody)=>{
        return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
    }

    //login api-called by Auth component when login btn clicked,
    export const loginAPI=async(reqBody)=>{
        return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
    }

    //google-login
   export const googleLoginAPI=async(reqBody)=>{
        return await commonAPI("POST",`${SERVERURL}/google-login`,reqBody)
    }


    //home page books api
      export const getHomeBooksAPI=async()=>{
        return await commonAPI("GET",`${SERVERURL}/home-books`)
    }

    //all career api
    

//-------------------  authorised user api - user --------------------------------------------

    //view all books
    export const getAllBooksAPI=async(search,reqHeader)=>{
        return await commonAPI("GET",`${SERVERURL}/all-books?search=${search}`,{},reqHeader)
    }

    //view single book
    export const getSingleBookAPI=async(bookId,reqHeader)=>{
        return await commonAPI("GET",`${SERVERURL}/book/${bookId}/view`,{},reqHeader)
    }

    //upload book
     export const addBookAPI=async(reqBody,reqHeader)=>{
        return await commonAPI("POST",`${SERVERURL}/add-book`,reqBody,reqHeader)
    }


    //profile update
    //view purchase book
    //view approve books

//->authorised user api - admin
    //add career
    //update admin profile
    //list books
    //list users
    //approve books
    