import React, { useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import HeaderTraveler from '../Headers/HeaderTraveler';
import Footer from '../Footer';

const SingaleTravelPlace = () => {

    // const id =localStorage.getItem("id");
    const [place , setPlace] = React.useState({});
    const params=useParams();
    const placeID=params.id;

    useEffect(()=>{
        const getOnePlace = async () => {
          await axios.get(`http://localhost:8090/travelplace/${placeID}`).then((res) => {
            setPlace(res.data);
          }).catch((err) => {
              console.log(err.massage);
          }) 
      }
      getOnePlace();
      },[])



  return (
    <div className="site-wrap">
      <HeaderTraveler />
      <div className="bg-light py-5">
        <div className="container">
          <div className="row">
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mr-auto">
              <div className="border text-center">
                <img
                  src={place.image}
                  alt="Image"
                  className="img-fluid p-5"
                />

              </div>
            </div>
            <div className="col-md-6">
              <h2 className="text-black">{place.name}</h2>
              <p>{place.discription}</p>
              <p class="fw-bold">Location  :</p><p> {place.location}</p>
              <p class="fw-bold">Famous For :</p><p> {place.famousfor}</p>
              <p class="fw-bold">Best Time to Visit:</p><p> {place.bestTimeVisit}</p>
              <p class="fw-bold">Tourist Attraction :</p><p> {place.attraction}</p>
              <p class="fw-bold">Find In Map : 
                <div className='col-md-6'>
                  <iframe className="img-fluid rounded-end hotelMap" 
                  src={place.map}
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>  
              </p>
              <div className='col-md-3'>

              </div>
              <div className="mb">
                <div className="input-group mb-3" style={{ maxWidth: "220px" }}>
                <div class="btn-group" style={{ marginTop:'20px' }}>
                          <Link to={`/all_travel_place`}>
                          <button type="button" class="btn btn-dark" ><i class="fa-solid fa-backward"></i> Back</button>
                          </Link>
                        </div>
                 
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}


export default SingaleTravelPlace