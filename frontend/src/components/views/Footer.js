import React from 'react'
// import logo from '../Image/logo.png';
import './home.css';

const Footer = () => {
  return (
    <div>
       
                <footer class="bg-light text-center text-lg-start mt-5">
         
            <div class="container p-5">
       
                <div class="row">
              
                <div id="aboutus" class="col-lg-6 col-md-12 mb-4 mb-md-0">
                    <h5 class="text-uppercase">About Us</h5>

                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                    molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                    aliquam voluptatem veniam, est atque cumque eum delectus sint!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                    molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                    aliquam voluptatem veniam, est atque cumque eum delectus sint!
                    </p>
                </div>
  
                <div id="contactus" class="col-lg-6 col-md-12 mb-4 mb-md-0">
                    <h5 class="text-uppercase ms-2">Contact Us</h5>
    
                <a
                  class="btn text-white btn-floating "
                  style= {{ color: "#3b5998", fontSize:25 }}
                  href="#!"
                  role="button"
                  ><i class="fa-brands fa-facebook" style= {{ color: "#3b5998" }} ></i></a>
                <a
                  class="btn text-white btn-floating m-1"
                  style= {{ color: "#55acee", fontSize:25 }}
                  href="#!"
                  role="button"
                  ><i class="fa-brands fa-twitter" style= {{ color: "#55acee" }}></i></a>
                <a
                  class="btn text-white btn-floating m-1"
                  style= {{ color: "#dd4b39", fontSize:25 }}
                  href="#!"
                  role="button"
                  ><i class="fa-brands fa-google" style= {{ color: "#dd4b39" }}></i></a>
                <a
                  class="btn text-white btn-floating m-1"
                  style= {{ color: "#ac2bac", fontSize:25 }}
                  href="#!"
                  role="button"
                  ><i class="fa-brands fa-instagram" style= {{ color: "#ac2bac" }}></i></a>
                <a
                  class="btn text-white btn-floating m-1"
                  style= {{ color: "#0082ca", fontSize:25 }}
                  href="#!"
                  role="button"
                  ><i class="fa-brands fa-linkedin" style= {{ color: "#0082ca" }}></i></a>
              
                </div>
            
                </div>
      
            </div>
        
            <div class="text-center p-3" style={{ background: "rgba(0, 0, 0, 0.2)" }}>
                © 2023 Copyright: MULD 
            </div>
        
            </footer>

    </div>
  )
}


export default Footer