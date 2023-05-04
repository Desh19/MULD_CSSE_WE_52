import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
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
              <p>Location  : {place.location}</p>
              <p>Famous For : {place.famousfor}</p>
              <p>Best Time to Visit: {place.bestTimeVisit}</p>
              <p>Tourist Attraction : {place.attraction}</p>
              <div className="mb-5">
                <div className="input-group mb-3" style={{ maxWidth: "220px" }}>
                 
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