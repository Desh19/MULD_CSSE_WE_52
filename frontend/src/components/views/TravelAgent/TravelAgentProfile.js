import React, { useRef, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { SideNav } from './SideNav'
import { DashboardHeader } from './TravelAgentHeader'
import axios from 'axios';

const TravelAgentProfile = () => {

    const id =localStorage.getItem("id");
    const [searchTerm, setSearchTerm] = React.useState("");
    const [user, setUser] = React.useState({});

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


  return (
    <div>
        <DashboardHeader />
      <SideNav/>
      <div className="allcoursesviewArea" >
            <div className="page-content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="page-title-box">
                      <div className="row">
                        <div className="col">
                          <h4 className="page-title">Profile</h4>
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item active">Admin</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ marginLeft:'500px' }}>
                  <div className="col-md-4">
                    <div className="card" style={{ width: "450px", marginTop: "100px" , marginRight:'200px'}}>
                      <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                          <img src={user.image ? user.image : "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"} alt="Admin" className="rounded-circle" style={{ width:'200px', height:'200px' }} />
                          <div className="mt-3">
                              <h4>{user.name}</h4>
                            <p className="text-secondary mb-1">{user.field}</p>
                            <a href={`/update_travel_agent_profile/${user._id}`}><p className="text-muted font-size-sm">Manage Profiles</p></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mt-3">

                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card mb-3" style={{ marginLeft: "100px", width: "700px", marginTop: "60px" }}>
                      <div className="card-body" >
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Full Name</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                          {user.name}
                          </div>
                           
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {user.email}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Trust</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <div className="star-ratings">
                              <div className="fill-ratings" style={{ width: '75%' }}>
                                <span>🟊🟊🟊🟊🟊</span>
                              </div>
                              <div className="empty-ratings">
                                <span>🟊🟊🟊🟊🟊</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Discription</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    
                              </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Position</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {user.field}
                          </div>
                        </div>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </div>

    </div>
  )
}

export default TravelAgentProfile