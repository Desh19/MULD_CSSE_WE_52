import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import HeaderTraveler from '../Headers/HeaderTraveler';
import Footer from '../Footer';
import back from '../../images/back.jpg'


const AllPackages = () => {

  const [searchTerm, setSearchTerm] = React.useState("");
  const [guide, setGuide] = React.useState([]);
  useEffect(()=>{
    const getAllpackages = async () => {
      await axios.get(`http://localhost:8090/Package`).then((res) => {
        setGuide(res.data);
      console.log( res.data)
      }).catch((err) => {
          console.log(err.massage);
      }) 
  }
  getAllpackages();
  },[])

  const filteredguide = guide.filter((guide) => {
    return (
      guide.userName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      guide.mobileNo.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
});

  return (
    <div>
         <HeaderTraveler />
          <body>
            <main>

              <div class="album pt-5 h-100">
                <div class="container mt-5">

                  <div class="row row-cols-1 row-cols row-cols-md-3 g-3">
                  {filteredguide.map((guide)=>
                  <div class="col">
                    
                    <div class="card shadow-sm">
                    
                    <a href={`/guidepackageview/${guide._id}`}><img class="bd-placeholder-img card-img-top" width="100%" height="225" src={guide.image}  /></a>
                    
                    <div class="card-body">
                      <h6 className="text-dark"><a href={`/guidepackageview/${guide._id}`} style={{ textDecoration:'none', color:'black' }}>{guide.userName}</a></h6>
                      <p class="card-text" style={{ maxHeight:'6em', overflow:'hidden' }}>{guide.guiderBio} </p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <Link to={`/guidepackageview/${guide._id}`}>
                          <button type="button" class="btn btn-sm btn-outline-secondary">See More..</button>
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

            </main>
            <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>

              
          </body>
      

          


        <Footer />
      </div>
  )
}

export default AllPackages
