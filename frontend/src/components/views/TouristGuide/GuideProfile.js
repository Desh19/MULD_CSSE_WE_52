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
                    <div className='profileimg'>

                    </div>
                    <div className='nameNdate'>
                        <h2>{user.name}</h2>
                        <p>{user.registerAt}</p>
                    </div>
                
                </div>
                <div class="col-sm-4 rights">
                    <button className='btn btn-success guidebtn'><Link className="nav-link active" aria-current="page" to="/add_package">Add Package</Link></button>
                    <button className='editprofile'><Link className="nav-link active" aria-current="page" to="/editProfileS">Edit Profile</Link></button>
                    <button className='dltprofile'>Delete Profile</button>
                    
                </div>
            </div>

            <div class="album h-100">
                <div class="container">

                  <div class="row row-cols-1 row-cols row-cols-md-3 g-3">
                  {filteredpackage.map((guide)=>
                  <div class="col">
                    
                    <div class="card shadow-sm">
                    
                    <a href={`/single_package/${guide._id}`}><img class="bd-placeholder-img card-img-top" width="100%" height="225" src={guide.image}  /></a>
                    
                    <div class="card-body">
                      <h6 className="text-dark"><a href={`/single_package/${guide._id}`} style={{ textDecoration:'none', color:'black' }}>{guide.userName}</a></h6>
                      <p class="card-text" style={{ maxHeight:'6em', overflow:'hidden' }}>{guide.guiderBio} </p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <Link to={`/single_package/${guide._id}`}>
                          <button type="button" class="btn btn-primary">Read More</button>
                          </Link>
                          <Link to={`/update_package/${guide._id}`}>
                          <button type="button" class="btn btn-success ms-3">Update</button>
                          </Link>
                          <Link>
                          <button type="button" class="btn btn-danger ms-3" onClick={()=>deletepackage(guide._id)}>Delete</button>
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
