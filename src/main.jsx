import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import AboutUs from './components/AboutUs.jsx'
import ContactUs from './components/ContactUs.jsx'
import Projects from './components/Projects.jsx'


 const router = createBrowserRouter(
 createRoutesFromElements(
 <Route path='' element= {<App/>}>
 <Route path='/about' element={<AboutUs/>} />
 <Route path='/contact' element={<ContactUs/>} />
 <Route path='/projects' element={<Projects/>} />
 <Route path='/' element={<Home/>} />
 </Route>
 )
 )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
