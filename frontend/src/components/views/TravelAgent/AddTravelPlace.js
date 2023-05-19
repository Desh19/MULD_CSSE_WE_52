import React from 'react'
import { SideNav } from './SideNav'
import { DashboardHeader } from './TravelAgentHeader'
import axios from 'axios';
import Swal from 'sweetalert';

const AddTravelPlace = () => {

    const id = localStorage.getItem("id");
    const [image , setImage] = React.useState("");
    const [name , setName] = React.useState("");
    const [discription , setDescription] = React.useState("");
    const [location , setLocation] = React.useState("");
    const [famousfor , setFamousfor] = React.useState("");
    const [bestTimeVisit , setBestTimeVisit] = React.useState("");
    const [attraction , setAttraction] = React.useState("");
    const [map , setMap] = React.useState("");


    const [placePlayload , setPlacePlayloads] = React.useState({
        agentID : id,
        name : "",
        discription : "",
        image : "",
        location : "",
        famousfor : "",
        bestTimeVisit : "",
        attraction : "",
        map : "",
        
    });

    const onChangeInput = (e) => {
        setPlacePlayloads({
          ...placePlayload,
          [e.target.id]: e.target.value,
        });
      };

      const onSubmit = async (e) => {
        e.preventDefault();
        try {
          console.log(placePlayload)
          const res = await axios.post("http://localhost:8090/TravelPlace/add",placePlayload);
          console.log(res);
          Swal({
            title: "Success!",
            text: "Device added successfully",
            icon: 'success',
            timer: 2000,
            button: false,
          }).then(()=>{
            window.location.href = "/dashboard_ta";
          })       
        } catch (err) {
          Swal({
            title: "Error!",
            text: err.response.data.msg,
            icon: 'warning',
            timer: 2000,
            button: false,
          })
        }
      };      

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
            setPlacePlayloads({
              ...placePlayload,
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
                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Add Places</h3>
                        <form>
                            <div class="mb-3">
                                <label class="form-label">Place Name</label>
                                <input type="text" class="form-control" id='name' name='name' onChange={(e) => onChangeInput(e)} required/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Description</label>
                                <textarea type="text" class="form-control" style={{ height: "150px" }} id='discription' name='discription' onChange={(e) => onChangeInput(e)} required/>
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Place Image</label>
                                <input class="form-control" type="file" id="formFile" name='image'  onChange={handleImageChange} />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Location</label>
                                <input type="text" class="form-control" id='location' name='location' onChange={(e) => onChangeInput(e)} required/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Famous For</label>
                                <input type="text" class="form-control" id='famousfor' name='famousfor' onChange={(e) => onChangeInput(e)} required/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Best time to Visit</label>
                                <input type="text" class="form-control" id='bestTimeVisit' name='bestTimeVisit' onChange={(e) => onChangeInput(e)} required/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Tourist attraction</label>
                                <input type="text" class="form-control" id='attraction' name='attraction' onChange={(e) => onChangeInput(e)} required/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Location in Map</label>
                                <input type="text" class="form-control" id='map' name='map' onChange={(e) => onChangeInput(e)} required/>
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={(e)=> onSubmit(e)}>Add</button>
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

export default AddTravelPlace