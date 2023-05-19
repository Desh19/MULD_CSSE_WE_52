import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import "../HotelOwner/hotelOwner.css";
import HeaderTraveler from '../Headers/HeaderTraveler';
import Footer from '../Footer';
import { SideNav } from "./SideNav";
import { DashboardHeader } from "./HotelOwnerHeader";
import hotelImg1 from "../../images/hotelImg1.jpg";
import hotelImg2 from "../../images/hotelImg2.jpg";
import hotelImg3 from "../../images/hotelImg3.jpg";

const ViewHotelsTraveller = () => {

  const [searchTerm, setSearchTerm] = React.useState("");
  const [hotel, setHotel] = React.useState([]);

  useEffect(()=>{
    const getHotels = async () => {
      await axios.get(`http://localhost:8090/Hotel/`).then((res) => {
        setHotel(res.data);
      }).catch((err) => {
          console.log(err.massage);
      }) 
  }
  getHotels();
  },[])

  const filteredhotels = hotel.filter((hotel) => {
    return (
      hotel.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      hotel.location.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
});

  return (
    <div>
      <HeaderTraveler />
      <div className='viewHotelsAreaTraveller grid-container'>

      {filteredhotels.map((hotel)=>

      <div class="card mb-3 hotelItem grid-item">
        <div id="carouselExampleControls" class="carousel slide carousel-fade card-img-bottom" data-bs-ride="carousel">
              <div class="carousel-inner ">
                <div class="carousel-item active imgcarosolArea">
                  <img src={hotel.image}  class="d-block w-100 croImg" alt="..."/>
                </div>
                {/* <div class="carousel-item">
                  <img src={hotelImg2} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src={hotelImg3} class="d-block w-100" alt="..."/>
                </div> */}
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
          <div class="card-body">
            <h5 class="card-title">{hotel.name}</h5>
            <p class="card-text card-about">{hotel.about}</p>

            <Link to={`/ViewHotelTravler/${hotel._id}`}>
              <button class="btn btn-primary mb-2">View</button>
            </Link>
            
            <p class="card-text"><small class="text-muted">{hotel.createdAt}</small></p>
          </div>
        </div>

      )}
          
      </div>
      <Footer />
    </div>
  );
};

export default ViewHotelsTraveller;
