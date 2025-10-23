import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ContextShare from './contextAPI/ContextShare.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter> 
   <GoogleOAuthProvider clientId='333485718377-eqqk430tvlkf2mjullesh1hrs3q1ps71.apps.googleusercontent.com'>
   <ContextShare> <App /></ContextShare>
    </GoogleOAuthProvider>
   </BrowserRouter>
  </StrictMode>,
)
