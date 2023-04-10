// import React, { useEffect } from 'react';
// import axios from 'axios';
// const Swal = require('sweetalert2')

import './allarticles.css';

const Allarticles = () => {

    return (

      <div>

      <h2><span>A</span>ll <span>A</span>rticles</h2>
        
      <div className='ArticleArea'>

        <div className="card articlecontainer">
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
                  <p>2023.03.08</p>
                  
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
              </div>
              
          </div>
        </div>
        </div>

          <div className='ArticleArea'>

                <div className="card articlecontainer">
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
                          <p>2023.01.22</p>
                          
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
                      </div>
                      
                  </div>
                </div>
                </div>

      

      </div>
    )
  }
  
  
  export default Allarticles