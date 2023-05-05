import React, { useEffect, useState } from 'react'
import { NavLink,Link,useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';
import { SideNav } from './SideNav'
import { DashboardHeader } from './TravelAgentHeader'
import Swal from 'sweetalert';

const UpdateTravelPlace = () => {

    const id = localStorage.getItem("id");
    const [place , setPlace] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState("");
    const params=useParams();
    const placeID=params.id;
    const history = useNavigate();

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

    const sendRequest = async() =>{

        await axios.put(`http://localhost:8090/travelplace/update/${placeID}` , {
      

        name:String(place.name),
        discription:String(place.discription),
        image:String(place.image),
        location:String(place.location),
        famousfor:String(place.famousfor),
        bestTimeVisit:String(place.bestTimeVisit),
        attraction:String(place.attraction),
            
      
        }).then(()=>{
      
            Swal({
                title: "Success!",
                text: "Place Details Updated Successfully",
                icon: 'success',
                timer: 2000,
                button: false,
              });
            
        })
      
      
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        sendRequest().then(()=>history(`/view_travel_place`));
    };

    const handleChange =(e)=>{

        setPlace((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
      }

      const handleImageChange = async e => {
        e.preventDefault()
        try {
            const file = e.target.files[0]
    
            if (!file) return alert("File not exist.")
    
            if (file.size > 1024 * 1024) // 1mb
                return alert("Size too large!")
    
            if (file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
                return alert("File format is incorrect.")
    
            let formData = new FormData()
            formData.append('file', file)
            formData.append('upload_preset', 'Af_Assignment')
            formData.append('cloud_name', 'drao60sj6')
    
            // setLoading(true)
            const res = await axios.post( "https://api.cloudinary.com/v1_1/drao60sj6/image/upload",
            formData,
            {
              method: "post",
              body: formData,
              headers: {
                "content-type": "multipart/form-data",
              },
            })
            // setLoading(false)
            setPlace({
              ...place,
              image: res.data.url,
            });
          } catch (err) {
            console.log(err.response.data.msg);
            
          }
   }


  return (
    <div>
        <DashboardHeader />
    <div class="container-fluid" >
        <div class="row">
            <SideNav/>

            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Taravel Places</h1>
                {/* <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group me-2">
                    <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                    <span data-feather="calendar" class="align-text-bottom"></span>
                    This week
                </button>
                </div> */}
            </div>
            <div className='container-sm'>
            <section className="vh-100 gradient-custom">
                <div className="container py-5">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                    <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                        <div className="card-body p-4 p-md-5">
                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Update Places Detials</h3>
                        <form>
                            <div class="mb-3">
                                <label class="form-label">Place Name</label>
                                <input type="text" class="form-control" id='name' name='name' value={place.name} onChange={handleChange} required/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Description</label>
                                <textarea type="text" class="form-control" style={{ height: "150px" }} id='discription' name='discription' value={place.discription} onChange={handleChange} required/>
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Place Image</label>
                                <div class="card" style={{ width:'18rem' }}>
                                    <img class="card-img-top" src={place.image} alt="Card image cap" />
                                    <div class="card-body">
                                    </div>
                                </div>
                                <label for="formFile" class="form-label">Change Place Image</label>
                                <input class="form-control" type="file" id="formFile" name='image'  onChange={handleImageChange} />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Location</label>
                                <input type="text" class="form-control" id='location' name='location' value={place.location} onChange={handleChange} required/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Famous For</label>
                                <input type="text" class="form-control" id='famousfor' name='famousfor' value={place.famousfor} onChange={handleChange} required/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Best time to Visit</label>
                                <textarea type="text" class="form-control" id='bestTimeVisit' name='bestTimeVisit' value={place.bestTimeVisit} onChange={handleChange} required/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Tourist attraction</label>
                                <input type="text" class="form-control" id='attraction' name='attraction' value={place.attraction} onChange={handleChange} required/>
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={handleSubmit} >Update Details</button>
                        </form>
                        </div>
                    </div>  
                    </div>
                </div>
                </div>
            </section>      
            
            </div>
            </main>
        </div>
    </div>

    </div>
  )
}


export default UpdateTravelPlace