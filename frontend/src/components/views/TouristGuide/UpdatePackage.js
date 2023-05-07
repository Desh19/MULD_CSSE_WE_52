import React, { useEffect, useState } from 'react'
import axios from 'axios';
import HeaderGuide from './HeaderGuide';
import Footer from '../Footer';
const Swal = require('sweetalert2');

const UpdatePackage = () => {

    
    
  return (
    <div>
       <HeaderGuide />
    <div className='container-sm '>
      <section className="gradient-custom pt-5">
        <div className="container pt-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                <div className="card-body p-4 p-md-5">
                    <center>
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Update Tourist Guide Package</h3>
                  </center>
                  <form>
                      <div class="mb-3">
                          <label class="form-label">Guider Name</label>
                          <input type="text" class="form-control" id='name' name='name'  disabled readonly/>
                      </div>
                      <div class="mb-3">
                          <label class="form-label">Mobile No</label>
                          <input type="text" class="form-control" id='mobileNo' name='mobileNo'  placeholder="Enter Mobile No" required/>
                      </div>
                      <div class="mb-3">
                          <label class="form-label">Price Range</label>
                          <input type="text" class="form-control" id='priceRange' name='priceRange'  placeholder="Enter Price Range" required/>
                     </div>
                      <div class="mb-3">
                          <label class="form-label">Guider Bio</label>
                          <textarea type="text" class="form-control" style={{ height: "150px" }} id='guiderBio' name='guiderBio'  placeholder="Type Bio..." required/>
                      </div>
                      <div class="mb-3">
                          <label class="form-label">Language Competencies</label>
                          <input type="text" class="form-control" id='languages' name='languages'  placeholder="Enter Languages" required/>
                      </div>
                      <div class="mb-5">
                          <label for="formFile" class="form-label">Add Thumbnail Image</label>
                          <input class="form-control" type="file" id="formFile" name='image'  />
                      </div>
                      <center>
                      <button type="submit" class="btn btn-success" >Update Package</button>
                      </center>
                  </form>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </section>      
       
    </div>
    <Footer />
    </div>

  )
}


export default UpdatePackage