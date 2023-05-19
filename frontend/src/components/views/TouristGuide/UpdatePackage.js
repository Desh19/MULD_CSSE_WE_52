import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';
import HeaderGuide from './HeaderGuide';
import Footer from '../Footer';
import swal from "sweetalert";
const Swal = require('sweetalert2');


const UpdatePackage = () => {

    const id =localStorage.getItem("id");
    const [guide, setGuide] = useState({});
    const [user, setUser]=useState({});
    const params=useParams();
    const history = useNavigate();
    const packageID=params.id;

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
  
  
  const sendRequest = async() =>{
  
    await axios.put(`http://localhost:8090/Package/update/${packageID}` , {
  
    mobileNo:String(guide.mobileNo),
    priceRange:String(guide.priceRange),
    guiderBio:String(guide.guiderBio),
    languages:String(guide.languages)
    }).then(()=>{
  
        swal({
            title: "Success!",
            text: "Package Updated Successfully",
            icon: 'success',
            timer: 2000,
            button: false,
          });
        
    })
  
  
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    sendRequest().then(()=>history(`/guide_profile`));
  };
  
  const handleChange =(e)=>{
  
    setGuide((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
  }
    
    
  return (
    <div>
       <HeaderGuide />
    <div className='container-sm '>
      <section className="gradient-custom pt-5">
        <div className="container pt-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                <div className="card-body p-4 p-md-5">
                    <center>
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Update Tourist Guide Package</h3>
                  </center>
                  <form>
                      <div class="mb-3">
                          <label class="form-label">Guider Name</label>
                          <input type="text" class="form-control" id='name' name='name' value={guide.userName}  disabled readonly/>
                      </div>
                      <div class="mb-3">
                          <label class="form-label">Guider Bio</label>
                          <textarea type="text" class="form-control" style={{ height: "150px" }} id='guiderBio' name='guiderBio'value={guide.guiderBio} onChange={handleChange}  placeholder="Type Bio..." required/>
                      </div>
                      <div class="mb-3">
                          <label class="form-label">Mobile No</label>
                          <input type="text" class="form-control" id='mobileNo' name='mobileNo' value={guide.mobileNo} onChange={handleChange} placeholder="Enter Mobile No" required/>
                      </div>
                      <div class="mb-3">
                          <label class="form-label">Price Range Per Day</label>
                          <input type="text" class="form-control" id='priceRange' name='priceRange' value={guide.priceRange} onChange={handleChange} placeholder="Enter Price Range" required/>
                     </div>
                      <div class="mb-3">
                          <label class="form-label">Language Competencies</label>
                          <input type="text" class="form-control" id='languages' name='languages' value={guide.languages} onChange={handleChange} placeholder="Enter Languages" required/>
                      </div>
                      <center>
                      <button type="submit" class="btn btn-success" onClick={handleSubmit} >Update Package</button>
                      </center>
                  </form>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </section>      
       
    </div>
    <Footer />
    </div>

  )
}


export default UpdatePackage