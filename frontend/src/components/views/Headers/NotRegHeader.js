import React from 'react'
import { useState } from 'react';
import {NavLink,Link,useNavigate} from 'react-router-dom';
import '../home.css';
import logo from '../../images/muld.png';
import axios from "axios";
import swal from "sweetalert";

const NotRegHeader = () => {

  const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [field, setField] = useState("");

    function sendData(e){
        const newForm={

          name,
          email,
          password,
          field

    }

    if( name==='' && email === '' && password === '' && field === '' ) {
        swal("All Fields are empty");
    }else if(name === ''){
        swal("Name Field is empty")
    }else if(email === ''){
        swal("Email Field is empty")
    }else if(password === ''){
        swal("Password Field is empty")
    }else if(field === ''){
        swal("Field is empty")
    }
    else{

    axios.post('http://localhost:8090/User/add',newForm).then(()=>{

        swal({
        title: "Success!",
        text: "Registered Successfully",
        icon: 'success',
        timer: 2000,
        button: false,
        });
        const timer = setTimeout(() => {
          window.location.reload()
        }, 2000);                             
    }).catch((e)=>{
    alert(e);
    })

    }

    }


  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar" style={{ position:"fixed" , width:"100%" }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#homevideo"><img class="logoimg" src={logo} alt="Logo"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                   
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#aboutus">About Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#contactus">Contact Us</a>
                    </li>

                    <div class="rightside">
                    <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="modal"
                     data-bs-target="#signInModal" data-bs-whatever="@fat" aria-current="page" href="#signInModal">Sign In</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="modal"
                     data-bs-target="#signUpModal" data-bs-whatever="@fat" aria-current="page" href="#signUpModal">Sign Up</a>
                    </li>
                    </div>                 
                </ul>

                {/*------------------- Sign In Modal--------------------- */}

                  <div class="modal fade" id="signInModal" aria-labelledby="signInModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="signInModalLabel">Sign In</h5>   
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">

                        <form>

                        <div class="form-floating mb-3">
                          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                          <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                          <label for="floatingPassword">Password</label>
                        </div>
                        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                          <option selected disabled>Select User Type</option>
                          <option value="1">Traveler</option>
                          <option value="2">Tourist Guider</option>
                          <option value="3">Hotel Owner</option>
                          <option value="4">Travel Agent</option>
                        </select>

                        </form>

                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Sign In</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/*--------------------------------------------------------- */}

                {/*------------------- Sign Up Modal--------------------- */}

                <div class="modal fade" id="signUpModal" aria-labelledby="signUpModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="signUpModalLabel">Sign Up</h5>   
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">

                        <form>

                        <div class="form-floating mb-3">
                          <input type="name" class="form-control" id="floatingInput" 
                          onChange={(e) => ( setName(e.target.value) )} placeholder="Name"/>
                          <label for="floatingInput">Name</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input type="email" class="form-control" id="floatingInput"
                          onChange={(e) => ( setEmail(e.target.value) )} placeholder="name@example.com"/>
                          <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input type="password" class="form-control" id="floatingPassword" 
                          onChange={(e) => ( setPassword(e.target.value) )} placeholder="Password"/>
                          <label for="floatingPassword">Password</label>
                        </div>
                        <select class="form-select" id="feild" onChange={(e) => ( setField(e.target.value) )}aria-label="Floating label select example">
                          <option selected disabled>Select User Type</option>
                          <option value="Traveler">Traveler</option>
                          <option value="Tourist_Guider">Tourist Guider</option>
                          <option value="Hotel_Owner">Hotel Owner</option>
                          <option value="Travel_Agent">Travel Agent</option>
                        </select>

                        </form>

                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={sendData} >Sign Up</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/*--------------------------------------------------------- */}



                </div>
            </div>
            </nav>

    </div>
  )
}


export default NotRegHeader