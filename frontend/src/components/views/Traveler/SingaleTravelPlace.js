import React from 'react'
import { Link } from "react-router-dom";
import HeaderTraveler from '../Headers/HeaderTraveler';
import Footer from '../Footer';

const SingaleTravelPlace = () => {
  return (
    <div className="site-wrap">
      <HeaderTraveler />
      <div className="bg-light py-5">
        <div className="container">
          <div className="row">
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mr-auto">
              <div className="border text-center">
                <img
                  
                  alt="Image"
                  className="img-fluid p-5"
                />
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="text-black"></h2>
             
              <div className="mb-5">
                <div className="input-group mb-3" style={{ maxWidth: "220px" }}>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}


export default SingaleTravelPlace