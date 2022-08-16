import React from 'react'
import {Outlet} from 'react-router-dom'
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

function Layout() {
  return (
    <>
    <Topbar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </>
  )
}

export default Layout