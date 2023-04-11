// import React, { useEffect } from 'react';
// import axios from 'axios';
// const Swal = require('sweetalert2')
import {NavLink,Link} from 'react-router-dom';
import './home.css';
import BgVideo from '../videos/bgVideo.mp4';

const Home = () => {

  return (
    <div>
          <div className="landingpage">

          <video src={BgVideo} autoPlay muted loop class="video-bg" />
          <div className="bg-overlay"></div>

          <div className="home-text">
              <h1>#VISIT SRILANKA</h1>
              <p>Come live out your ideal vacation with us</p>
          </div>

          <div id="explore" className="home-btn"><a href="#category">Explore</a></div>

          </div>

          <div id="category" className="section-container">
            <div className="sec-card">
              <div className="card-box">
                <div className="card-content">
                  <h3>Culture & Tourism Articles</h3>
                  <p>
                    Applicant User Profile allows you to edit user profiles,
                    search for jobs, apply them, view their statuses and much more.
                  </p>
                  <Link aria-current="page" to={"/allarticles"}>View</Link>
                </div>
              </div>
            </div>

            <div className="sec-card">
              <div className="card-box">
                <div className="card-content">
                  <h3>Travel Informations</h3>
                  <p>
                    Applicant User Profile allows you to edit user profiles,
                    search for jobs, apply them, view their statuses and much more.
                  </p>
                  <Link aria-current="page" to={""}>View</Link>
                </div>
              </div>
            </div>

            <div className="sec-card">
              <div className="card-box">
                <div className="card-content">
                  <h3>Hotel Informations</h3>
                  <p>
                    Applicant User Profile allows you to edit user profiles,
                    search for jobs, apply them, view their statuses and much more.
                  </p>
                  <Link aria-current="page" to={""}>View</Link>
                </div>
              </div>
            </div>

            <div className="sec-card">
              <div className="card-box">
                <div className="card-content">
                  <h3>Tourist Guiders Packages</h3>
                  <p>
                    Applicant User Profile allows you to edit user profiles,
                    search for jobs, apply them, view their statuses and much more.
                  </p>
                  <Link aria-current="page" to={""}>View</Link>
                </div>
              </div>
            </div>

            <div className="sec-card">
              <div className="card-box">
                <div className="card-content">
                  <h3>Job Advertisment</h3>
                  <p>
                    Applicant User Profile allows you to edit user profiles,
                    search for jobs, apply them, view their statuses and much more.
                  </p>
                  <Link aria-current="page" to={""}>View</Link>
                </div>
              </div>
            </div>

          </div>

    </div>  
  )
}


export default Home