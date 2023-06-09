import React from 'react'
import { useState } from 'react';
import {NavLink,Link,useNavigate} from 'react-router-dom';
import '../home.css';
import logo from '../../images/muld.png';
import axios from "axios";
import swal from "sweetalert";

const HeaderGuide = () => {

  const id =localStorage.getItem("id");

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar" style={{ position:"fixed" , width:"100%" }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#homevideo"><img class="logoimg" src={logo} alt="Logo"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                   
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/guide_home">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#aboutus">About Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#contactus">Contact Us</a>
                    </li>

                    <div class="rightside">
                    <li className="nav-item">
                    <a className="nav-link active"href="/guide_profile">Profile</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="/" onClick={localStorage.clear} >Sign Out</a>
                    </li>
                    </div>                 
                </ul>


                </div>
            </div>
            </nav>

    </div>
  )
}


export default HeaderGuide