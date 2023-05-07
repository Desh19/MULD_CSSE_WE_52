import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './AllTravelPlace.css';
import HeaderTraveler from '../Headers/HeaderTraveler';
import Footer from '../Footer';
import back from '../../images/back.jpg'


const AllTravelPlace = () => {

  const [searchTerm, setSearchTerm] = React.useState("");
  const [places, setPlaces] = React.useState([]);
  useEffect(()=>{
    const getAllPlaces = async () => {
      await axios.get(`http://localhost:8090/TravelPlace`).then((res) => {
        setPlaces(res.data);
      console.log( res.data)
      }).catch((err) => {
          console.log(err.massage);
      }) 
  }
  getAllPlaces();
  },[])

  const filteredplaces = places.filter((places) => {
    return (
      places.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
});

  return (
    <div>
         <HeaderTraveler />
          <body>
            <main>

              <section class="py-5 text-center" >
                <div class="row py-lg-5" >
                
                  <div class="col-lg-6 col-md-8 mx-auto" >
                    <h1 class="fw-light">Album example</h1>
                    <p class="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                    <p>
                      <a href="#" class="btn btn-primary my-2" style={{ margin:'8px' }}>Main call to action</a>
                      <a href="#" class="btn btn-secondary my-2">Secondary action</a>
                    </p>
                  </div>
                </div>
              </section>

              <div class="album py-5 bg-body-tertiary">
                <div class="container">

                  <div class="row row-cols-1 row-cols row-cols-md-3 g-3">
                  {filteredplaces.map((places,index)=>
                  <div class="col">
                    
                    <div class="card shadow-sm" key={index}>
                    <h3 className="text-dark" style={{ textAlign:'center' }}><a href={`/singale_travel_place/${places._id}`} style={{ textDecoration:'none', color:'black' }}>{index+1}. {places.name}</a></h3>
                    <a href={`/singale_travel_place/${places._id}`}><img class="bd-placeholder-img card-img-top" width="100%" height="225" src={places.image}  /></a>
                    <div class="card-body">
                      <p class="card-text" style={{ maxHeight:'3em', overflow:'hidden' }}>{places.discription} </p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <Link to={`/singale_travel_place/${places._id}`}>
                          <button type="button" class="btn btn-sm btn-outline-secondary">See More..</button>
                          </Link>
                        </div>
                        <small class="text-body-secondary">9 mins</small>
                      </div>
                    </div>
                  </div>
                   
                      
                  </div>
                   )}
                  {/* {filteredplaces.map((places)=>
                          <div class="card shadow-sm" style={{ margin:'2px' }}>
                            <h3 className="text-dark" style={{ textAlign:'center' }}>{places.name}</h3>
                             <img src={places.image} alt="Image" style={{ width:'100%', height:'225px' }}/>
                              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" img={places.image} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                            <div class="card-body">
                              <p class="card-text" style={{ textAlign:'center' }}>{places.discription}</p>
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

            </main>
            <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>

              
          </body>
      

          


        <Footer />
      </div>
  )
}

export default AllTravelPlace
