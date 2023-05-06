import axios from "axios";
// import "./travelerprofile.css";
import HeaderTraveler from '../Headers/HeaderTraveler';
import Footer from '../Footer';
import { useParams, useNavigate} from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import {Link} from 'react-router-dom';


export default function GuideProfile() {
 
  return (
    <div>
         <HeaderTraveler />
        <div className='TravelProfileArea'>
            <div class="row TravelerProfile">
                <div class="col-sm-8 lefts">
                    <div className='profileimg'>

                    </div>
                    <div className='nameNdate'>
                        <h2>Lanka Karunathilake</h2>
                        <p>2023.05.05</p>
                    </div>
                
                </div>
                <div class="col-sm-4 rights">
                    <button className='btn btn-success articlebtn'><Link className="nav-link active" aria-current="page" to="/addarticle">Add article</Link></button>
                    <button className='editprofile'><Link className="nav-link active" aria-current="page" to="/editProfileS">Edit Profile</Link></button>
                    <button className='dltprofile'>Delete Profile</button>
                    
                </div>
            </div>

            <div className='TravelerArea'>

                <h3><span>M</span>y <span>A</span>rticles</h3>

  
        {/* {courses.map((scourse, index) => */}

        <div className="card travelerontainer">
          <div className="card-header">
          <h6>Article Name</h6>
                    
          </div>

          <div className="card-body">
            
            <img src="./images/msi2.jpg" alt="image" width="100%"/>

          </div>

          <div className="card-footer">
              <div className='profileArea'>

                <div className='pro'>

                </div>
                <div className='nameN'>
                  <h2>Lanka Karunathilake</h2>
                  <p>2023.05.05</p>
                  
                </div>

              </div>
              <div className='discri'>

              There are many variations of passages of Lorem Ipsum available, 
              but the majority have suffered alteration in some form, by injected humour,
              or randomised words which don't look even slightly believable. If you are going 
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to 
              repeat predefined chunks as necessary, making this the first true generator on the Internet. 
              It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, 
              to generate Lorem Ipsum which looks reasonable. 

              </div>
              
              <br />

              <div>
              <button className='readmorebtn'>Read More</button>
              <button className='btn btn-danger'>Remove</button>
              </div>
              
          </div>
        </div>
{/* 
        <div className="card travelerontainer">
          <div className="card-header">
          <h6>Article Name</h6>
                    
          </div>

          <div className="card-body">
            
            <img src="./images/msi2.jpg" alt="image" width="100%"/>

          </div>

          <div className="card-footer">
              <div className='profileArea'>

                <div className='pro'>

                </div>
                <div className='nameN'>
                  <h2>Deshan Rajapaksha</h2>
                  <p>2023.o1.22</p>
                  
                </div>

              </div>
              <div className='discri'>

              There are many variations of passages of Lorem Ipsum available, 
              but the majority have suffered alteration in some form, by injected humour,
              or randomised words which don't look even slightly believable. If you are going 
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to 
              repeat predefined chunks as necessary, making this the first true generator on the Internet. 
              It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, 
              to generate Lorem Ipsum which looks reasonable. 

              </div>
              
              <br />

              <div>
              <button className='readmorebtn'>Read More</button>
              <button className='btn btn-danger'>Remove</button>
              </div>
              
          </div>
        </div> */}

            {/* )} */}
   

            </div>


        </div>
        <Footer />
    </div>
  )
}
