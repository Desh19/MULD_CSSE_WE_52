import React, { useEffect } from 'react';
import axios from 'axios';
import './allarticles.css';
import HeaderTraveler from '../Headers/HeaderTraveler';
import Footer from '../Footer';

const Allarticles = () => {

    return (

      <div>
         <HeaderTraveler />
        
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

               <i className="material-icons pr-5" style={{color:"red"}}>favorite</i>
                 {/* {item.likes.includes(state._id) */}
                 <i className="material-icons pr-5" >thumb_up</i>
                 <i className="material-icons mr-5 ">thumb_down</i>
               {/* } */}
                <h6>3 Likes</h6> 
            
              
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

                <Footer />

      

      </div>
    )
  }
  
  
  export default Allarticles