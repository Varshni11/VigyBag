import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="h-full box-border bg-cream">
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    </div >
  )
}

export default Layout