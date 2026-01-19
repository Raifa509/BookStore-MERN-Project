import commonAPI from "./commonAPI";
import SERVERURL from "./serverURL";

//---------------------------------guest users api-----------------------------------


//register api - called by Auth component when register btn clicked,content-type:"application/json"
export const registerAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/register`, reqBody)
}

//login api-called by Auth component when login btn clicked,
export const loginAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/login`, reqBody)
}

//google-login
export const googleLoginAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/google-login`, reqBody)
}


//home page books api
export const getHomeBooksAPI = async () => {
    return await commonAPI("GET", `${SERVERURL}/home-books`)
}

//all jobs api
export const getAllJobsAPI = async (searchKey) => {
    return await commonAPI("GET", `${SERVERURL}/all-jobs?search=${searchKey}`)
}


//---------------------------  authorised user api - user ---------------------------------------


//view all books
export const getAllBooksAPI = async (search, reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/all-books?search=${search}`, {}, reqHeader)
}

//view single book
export const getSingleBookAPI = async (bookId, reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/book/${bookId}/view`, {}, reqHeader)
}

//upload book
export const addBookAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${SERVERURL}/add-book`, reqBody, reqHeader)
}

//all user's uploaded books
export const getAllUserUploadBookAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/user-books`, {}, reqHeader)
}

//get userbought books
export const getAllUserPurchasedBookAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/user-bought-books`, {}, reqHeader)
}

//delete user uploaded books
export const removeUserUploadBookAPI = async (bookId, reqHeader) => {
    return await commonAPI("DELETE", `${SERVERURL}/user-books/${bookId}/remove`, {}, reqHeader)
}

//profile update
export const updateUserProfileAPI = async (reqBody,reqHeader) => {
    return await commonAPI("PUT", `${SERVERURL}/user-profile/edit`, reqBody, reqHeader)
}

//add application
export const addApplicationAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${SERVERURL}/apply-job`, reqBody, reqHeader)
}

//make payment
export const makePaymentAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${SERVERURL}/make-payment`, reqBody, reqHeader)
}


//------------------------------------ admin ----------------------------------------


//->authorised user api - admin

//add job
export const addJobAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVERURL}/add-job`,reqBody,reqHeader)
}

//delete job
export const removeJobAPI=async(jobId,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVERURL}/job/${jobId}/remove`,{},reqHeader)
}

//update admin profile
export const updateAdminProfileAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/admin-profile/edit`,reqBody,reqHeader)
}

//list books
export const getAllAdminBooksAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/admin-all-books`, {}, reqHeader)
}

//list users
export const getAllUsersAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/all-user`, {}, reqHeader)
}


//approve books
export const approveBookAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/admin/book/approve`,reqBody,reqHeader)
}

//list application - called by admin career component
export const getAllApplicationAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/all-applications`, {}, reqHeader)
}
