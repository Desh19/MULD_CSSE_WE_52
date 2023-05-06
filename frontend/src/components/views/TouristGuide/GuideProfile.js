import axios from "axios";
import "./GuideProfile.css";
import HeaderGuide from "./HeaderGuide";
import Footer from '../Footer';
import { useParams, useNavigate} from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import {Link} from 'react-router-dom';


export default function GuideProfile() {
 
  return (
    <div>
         <HeaderGuide />
        <div className='GuideProfileArea'>
            <div class="row GuideProfile">
                <div class="col-sm-8 lefts">
                    <div className='profileimg'>

                    </div>
                    <div className='nameNdate'>
                        <h2>Lanka Karunathilake</h2>
                        <p>2023.05.05</p>
                    </div>
                
                </div>
                <div class="col-sm-4 rights">
                    <button className='btn btn-success articlebtn'><Link className="nav-link active" aria-current="page" to="/add_package">Add Package</Link></button>
                    <button className='editprofile'><Link className="nav-link active" aria-current="page" to="/editProfileS">Edit Profile</Link></button>
                    <button className='dltprofile'>Delete Profile</button>
                    
                </div>
            </div>

            


        </div>
        <Footer />
    </div>
  )
}
