import React from 'react'
import "../TravelAgent/TravelAgentDashboard.css"
import logo from '../../images/muld.png';

export const DashboardHeader = () => {
  return (
    <div>
        <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand" href="#"><img class="logoimg" src={logo} alt="Logo" style={{ height:"100px" , top:"0px", marginTop:"0px" , paddingTop:"0px"}}/></a>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <input class="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search" />
        <div class="navbar-nav">
            <div class="nav-item text-nowrap">
            <a class="nav-link px-3" href="#">Sign out</a>
            </div>
        </div>
        </header>
    </div>
  )
}