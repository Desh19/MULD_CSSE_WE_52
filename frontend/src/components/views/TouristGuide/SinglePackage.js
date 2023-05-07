import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import HeaderGuide from './HeaderGuide';
import Footer from '../Footer';

const SingaleTravelguide = () => {

    // const id =localStorage.getItem("id");
    const [guide , setGuide] = React.useState({});
    const params=useParams();
    const packageID=params.id;

    useEffect(()=>{
        const getOnepackage = async () => {
          await axios.get(`http://localhost:8090/Package/${packageID}`).then((res) => {
            setGuide(res.data);
          }).catch((err) => {
              console.log(err.massage);
          }) 
      }
      getOnepackage();
      },[])



  return (
    <div className="site-wrap">
      <HeaderGuide/>
      <div className="site-section pt-5">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-5 mr-auto">
              <div className="border text-center">
                <img
                  src={guide.image}
                  alt="Image"
                  className="img-fluid p-5"
                />

              </div>
            </div>
            <div className="col-md-6 mt-5">
              <h2 className="text-black">{guide.userName}</h2>
              <p>{guide.guiderBio}</p>
              <p>Mobile Number  : {guide.mobileNo}</p>
              <p>Price Range : {guide.priceRange}</p>
              <p>Language Competencies : {guide.languages}</p>
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


export default SingaleTravelguide