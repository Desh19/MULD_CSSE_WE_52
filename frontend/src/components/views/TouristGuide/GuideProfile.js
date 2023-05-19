import axios from "axios";
import "./GuideProfile.css";
import HeaderGuide from "./HeaderGuide";
import Footer from '../Footer';
import { useParams, useNavigate} from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import {Link} from 'react-router-dom';
const Swal = require('sweetalert2')


export default function GuideProfile() {

  const id =localStorage.getItem("id");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [guide, setGuide] = React.useState([]);
  const [user, setUser] = React.useState([]);


  useEffect(()=>{
    const getUser= async () => {
      await axios.get(`http://localhost:8090/User/get/${id}`).then((res) => {
          console.log(res.data);
          setUser(res.data.data);
      }).catch((err) => {
          console.log(err.massage);
      })
  }
  getUser();
  },[id])

  useEffect(()=>{
    const getOwnPackage = async () => {
      await axios.get(`http://localhost:8090/Package/ownPackage/${localStorage.getItem("id")}`).then((res) => {
        setGuide(res.data);
      }).catch((err) => {
          console.log(err.massage);
      }) 
  }
  getOwnPackage();
  },[])

  const filteredpackage = guide.filter((guide) => {
    return (
      guide.userName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      guide.mobileNo.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
});

const deletepackage = async (_id) => {
  try{
      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.value === true) {
            const res =  axios.delete(`http://localhost:8090/Package/delete/${_id}`).then((res) => {
              if (res) {
                Swal.fire({
                  title: "Success!",
                  text: "Your package has been deleted",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 1500,
                }).then(() => {
                  window.location.reload();
                });
              } else {
                Swal.fire({
                  title: "Error!",
                  text: "Something went wrong",
                  icon: "error",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
          }
        });

  }catch(err){
      console.log(err.data.msg);
  }
}
  
 
  return (
    <div>
         <HeaderGuide />
        <div className='GuideProfileArea'>
            <div class="row GuideProfile">
                <div class="col-sm-8 lefts">
                <Link className="nav-link active" aria-current="page" to="/update_profile">
                    <img
                      src={user.image ? user.image : "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"}
                      alt=""
                      className="guideProfilePic"
                      />
                      </Link>
                    <div className='nameNdate'>
                        <h2>{user.name}</h2>
                        <h5>{user.field}</h5>
                    </div>
                
                </div>
                <div class="col-sm-4 rights">
                    <button className='btn btn-success guidebtn'><Link className="nav-link active" aria-current="page" to="/add_package">Add Package</Link></button>
                    <button className='editprofile'><Link className="nav-link active" aria-current="page" to="/update_profile">Edit Profile</Link></button>
                    
                </div>
            </div>

            <div class="album h-100">
                <div class="container">

                  <div class="row row-cols-1 row-cols row-cols-md-3 g-3">
                  {filteredpackage.map((guide)=>

                  <div class="col">
                    <div class="card shadow-sm">
                    <div class="card-body">

                    
                    <div className='profileArea'>
                    <a href={`/single_package/${guide._id}`}>
                      <div className='pro'>
                      <img
                            src={guide.userID.image}
                            alt=""
                            className="pro"
                            />

                      </div>
                      </a>
                      <div className='nameN'>
                      <h2>{guide.userID.name}</h2>
                      <p>{guide.postedAt.toString().substring(0,10)}</p>
                        
                      </div>
                      </div>

                      <div className='bio mb-3'>
                      {guide.guiderBio} 
                      </div>
                      <h6>Price Range: Rs. {guide.priceRange} (Per Day)</h6>
                      <p>Contact: {guide.mobileNo}</p>

                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <Link to={`/single_package/${guide._id}`}>
                          <button type="button" class="btn btn-primary">Read More</button>
                          </Link>
                          <Link to={`/update_package/${guide._id}`}>
                          <i class="fa-sharp fa-solid fa-pen-to-square ms-4" style= {{ color: "#051957", fontSize:31 }}></i>
                          </Link>
                          <Link>
                          <i class="fa-solid fa-trash-can ms-3" style={{ color: "#ff0000", fontSize:31 }} onClick={()=>deletepackage(guide._id)}></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                   
                      
                  </div>
                   )}
                  {/* {filteredguide.map((guide)=>
                          <div class="card shadow-sm" style={{ margin:'2px' }}>
                            <h3 className="text-dark" style={{ textAlign:'center' }}>{guide.name}</h3>
                             <img src={guide.image} alt="Image" style={{ width:'100%', height:'225px' }}/>
                              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" img={guide.image} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                            <div class="card-body">
                              <p class="card-text" style={{ textAlign:'center' }}>{guide.discription}</p>
                              <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                </div>
                                <small class="text-body-secondary">9 mins</small>
                              </div>
                            </div>
                        </div>
                      )} */}
                  </div>
                  
                </div>
              </div>


        </div>
        <Footer />
    </div>
  )
}
