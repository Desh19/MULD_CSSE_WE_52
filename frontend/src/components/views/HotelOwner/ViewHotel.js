import React from 'react'
import "../HotelOwner/hotelOwner.css";
import { SideNav } from './SideNav'
import { DashboardHeader } from './HotelOwnerHeader';
import hotelImg1 from '../../images/hotelImg1.jpg';
import hotelImg2 from '../../images/hotelImg2.jpg';
import hotelImg3 from '../../images/hotelImg3.jpg';

const ViewHotel = () => {
    
  return (
    <div>
      <body >
            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
            <symbol id="check2" viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            </symbol>
            <symbol id="circle-half" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
            </symbol>
            <symbol id="moon-stars-fill" viewBox="0 0 16 16">
                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
            </symbol>
            <symbol id="sun-fill" viewBox="0 0 16 16">
                <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
            </symbol>
            </svg>

    <div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
      <button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
              id="bd-theme"
              type="button"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              aria-label="Toggle theme (auto)">
        <svg class="bi my-1 theme-icon-active" style={{ width:"1em", height:"1em" }}><use href="#circle-half"></use></svg>
        <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
      </button>
      <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
            <svg class="bi me-2 opacity-50 theme-icon" style={{ width:"1em", height:"1em" }}><use href="#sun-fill"></use></svg>
            Light
            <svg class="bi ms-auto d-none" style={{ width:"1em", height:"1em" }}><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
            <svg class="bi me-2 opacity-50 theme-icon"style={{ width:"1em", height:"1em" }}><use href="#moon-stars-fill"></use></svg>
            Dark
            <svg class="bi ms-auto d-none" style={{ width:"1em", height:"1em" }}><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
            <svg class="bi me-2 opacity-50 theme-icon" style={{ width:"1em", height:"1em" }}><use href="#circle-half"></use></svg>
            Auto
            <svg class="bi ms-auto d-none" style={{ width:"1em", height:"1em" }} ><use href="#check2"></use></svg>
          </button>
        </li>
      </ul>
    </div>

    <DashboardHeader/>
    


<div class="container-fluid">
  <div class="row">
    <SideNav/>

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 dashContainer">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom ">
        <h1 class="h2">Hotel Name</h1>
      </div>

      <div id="carouselExampleControls" class="carousel slide carousel-fade carousel-area" data-bs-ride="carousel">
            <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={hotelImg1}  class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={hotelImg2} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={hotelImg3} class="d-block w-100" alt="..."/>
                  </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
      </div>

      <div class="mt-5 mb-5 hotelDetailArea">
            <form class="row g-3">
                  <div class="col-md-12">
                        <label for="inputEmail4" class="form-label">Hotel Name</label>
                        <input type="name" class="form-control" id="inputEmail4"/>
                  </div>
                  <div class="col-12">
                        <label for="exampleFormControlTextarea1" class="form-label">About</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='about..'></textarea>
                  </div>
                  <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4"/>
                  </div>
                  <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword4"/>
                  </div>
                  <div class="col-12">
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                  </div>
                  <div class="col-12">
                        <label for="inputAddress2" class="form-label">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                  </div>
                  <div class="col-md-6">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity"/>
                  </div>
                  <div class="col-md-4">
                  <label for="inputState" class="form-label">State</label>
                  <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                  </select>
                  </div>
                  <div class="col-md-2">
                  <label for="inputZip" class="form-label">Zip</label>
                  <input type="text" class="form-control" id="inputZip"/>
                  </div>

                  <div class="col-md-5 mt-4">
                        <button type='submit' class="btn updateBtn "><i class="fa-solid fa-pen-to-square btnFaIcon"></i>Update</button>
                        <button type='submit' class="btn btn-outline-danger removeBtn ms-3"><i class="fa-sharp fa-solid fa-trash btnFaIcon"></i>Remove</button>
                        
                  </div>
            </form>
      </div>

      
    </main>
  </div>
</div>


     </body>
    </div>
  )
}

export default ViewHotel