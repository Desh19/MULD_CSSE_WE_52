// import React, { useEffect } from 'react';
// import axios from 'axios';
// const Swal = require('sweetalert2')

import './home.css';
import BgVideo from '../videos/bgVideo.mp4';

const Home = () => {

  return (
    <div>
          <div className="landingpage">

          <video src={BgVideo} autoPlay muted loop class="video-bg" />
          <div className="bg-overlay"></div>

          <div className="home-text">
              <h1>#VIST SRILANKA</h1>
              <p>Come live out your ideal vacation with us</p>
          </div>

          <div className="home-btn">About Us</div>

          </div>

    </div>  
  )
}


export default Home