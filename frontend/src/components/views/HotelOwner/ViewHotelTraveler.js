import React from "react";
import "../HotelOwner/hotelOwner.css";
import NotRegHeader from "../Headers/NotRegHeader";
import { SideNav } from "./SideNav";
import { DashboardHeader } from "./HotelOwnerHeader";
import hotelImg1 from "../../images/hotelImg1.jpg";
import hotelImg2 from "../../images/hotelImg2.jpg";
import hotelImg3 from "../../images/hotelImg3.jpg";

const ViewHotelTraveler = () => {
  return (
    <div>
      <NotRegHeader />
      <div className="viewHotelAreaTraveller">
        <div
          id="carouselExampleIndicators"
          class="carousel slide carousel-fade carosolArea"
          data-bs-ride="true"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={hotelImg1}
                class="d-block w-100 carosolArea"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={hotelImg2}
                class="d-block w-100 carosolArea"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={hotelImg3}
                class="d-block w-100 carosolArea"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>


        <div className="HotelinformationArea">

        <div class="card mb-5">
            <div class="row g-0">
            <div class="col-md-9">
                  <div class="card-body">
                  <h5 class="card-title">Hotel Name</h5>
                  <p class="card-text">This is In publishing and graphic design, Lorem ipsum is a 
                  placeholder text commonly used to demonstrate the visual form of a document or a 
                  typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is available. </p>
                  <div className="socialmed">
                        <i class="fa-brands fa-square-whatsapp fa-lg"></i>
                        <i class="fa-solid fa-square-phone fa-lg ms-2"></i>
                        <i class="fa-solid fa-envelope fa-lg ms-2"></i>
                  </div>
                  </div>
            </div>
            <div class="col-md-3">
                  <iframe className="img-fluid rounded-end hotelMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63373.15701797536!2d79.81056026367561!3d6.911837780340022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259251b57a431%3A0x8f44e226d6d20a7e!2sGaladari%20Hotel!5e0!3m2!1sen!2slk!4v1683365417933!5m2!1sen!2slk" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            </div>
      </div>

            {/* =======================================booking area=================================== */}
          <form class="row g-3">
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Email
              </label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Password
              </label>
              <input type="password" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">
                Address 2
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">
                City
              </label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                State
              </label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="inputZip" class="form-label">
                Zip
              </label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label class="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Book Now
              </button>
            </div>
          </form>

          {/* =======================================booking area=================================== */}
        </div>
      </div>
    </div>
  );
};

export default ViewHotelTraveler;
