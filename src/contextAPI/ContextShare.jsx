import React, { createContext, useState } from 'react'

export const searchBookContext = createContext("")
export const userUpdateContext = createContext("")
export const adminUpdateContext=createContext("")
export const adminNewAddJob=createContext("")

function ContextShare({ children }) {
  const [searchKey, setSearchKey] = useState("")
  const [userEditResponse, setUserEditResponse] = useState({})
  const [adminEditResponse,setAdminEditResponse]=useState({})
  const [addJobResponse,setAddJobResponse]=useState({})
  return (
<searchBookContext.Provider value={{ searchKey, setSearchKey }}>
      <userUpdateContext.Provider value={{ userEditResponse, setUserEditResponse }}>
        <adminUpdateContext.Provider value={{adminEditResponse,setAdminEditResponse}}><adminNewAddJob.Provider value={{addJobResponse,setAddJobResponse}}>{children}</adminNewAddJob.Provider></adminUpdateContext.Provider>
      </userUpdateContext.Provider>
    </searchBookContext.Provider>
  )
}

export default ContextShare