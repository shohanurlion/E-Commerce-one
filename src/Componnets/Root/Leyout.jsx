import React from 'react'
import Header from '../Pages/Header'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'
import { Outlet } from 'react-router-dom'
const Leyout = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Leyout