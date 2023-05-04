import React from 'react'
import "../TravelAgent/TravelAgentDashboard.css"
import logo from '../../images/muld.png';

export const DashboardHeader = () => {
  return (
    <div>
        <header class="navbar navbar-dark sticky-top bg-light flex-md-nowrap p-0 shadow" >
        <a className="navbar-brand" href="#"><img class="logoimg" src={logo} alt="Logo" style={{ height:"100px" , top:"0px", marginTop:"0px" , paddingTop:"0px"}}/></a>
        
        <div class="navbar-nav">
            <div class="nav-item text-nowrap">
            <li className="nav-item">
                    <a className="nav-link active" href="/" onClick={localStorage.clear} style={{ color:'black' , padding:'15px'}}>Sign Out</a>
            </li>
            </div>
        </div>
        </header>
    </div>
  )
}
