import React from 'react'
import { SideNav } from './SideNav'
import { DashboardHeader } from './HotelOwnerHeader'
import axios from 'axios';
import Swal from 'sweetalert';

const AddHotel = () => {

    const id = localStorage.getItem("id");
    const [image , setImage] = React.useState("");
    const [name , setName] = React.useState("");
    const [about , setAbout] = React.useState("");
    const [location , setLocation] = React.useState("");
    const [contact , setContact] = React.useState("");


    const [hotelPlayload , setHotelPlayloads] = React.useState({
        hotelOwnerID : id,
        name : "",
        about : "",
        image : "",
        location : "",
        contact : "",
        createdAt: Date.now()
    });

    const onChangeInput = (e) => {
      setHotelPlayloads({
          ...hotelPlayload,
          [e.target.id]: e.target.value,
        });
      };

      const onSubmit = async (e) => {
        e.preventDefault();
        try {
          console.log(hotelPlayload)
          const res = await axios.post("http://localhost:8090/Hotel/add",hotelPlayload);
          console.log(res);
          Swal({
            title: "Success!",
            text: "Hotel added successfully",
            icon: 'success',
            timer: 2000,
            button: false,
          }).then(()=>{
            window.location.href = "/hotelOwner_dashboard_ta";
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
            setHotelPlayloads({
              ...hotelPlayload,
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

            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 addHotelContainer">
            <div className='container-sm'>
            <section className="vh-100 gradient-custom">
                <div className="container py-3">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-11">
                    <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px"}}>
                        <div className="card-body p-4 p-md-5">
                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-3">Add Hotel</h3>
                        <form>
                            <div class="mb-3">
                                <label class="form-label">Hotel Name</label>
                                <input type="text" placeholder='Hotel Name...' class="form-control" id='name' name='name' onChange={(e) => onChangeInput(e)} required/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">About</label>
                                <textarea type="text" placeholder='About...' class="form-control" style={{ height: "150px" }} id='about' name='about' onChange={(e) => onChangeInput(e)} required/>
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Images</label>
                                <input class="form-control" type="file" id="formFile" name='image'  onChange={handleImageChange} />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Location</label>
                                <input type="text" class="form-control" id='location' name='location' onChange={(e) => onChangeInput(e)} required/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Contact Number</label>
                                <input type="text" class="form-control" id='contact' name='contact' onChange={(e) => onChangeInput(e)} required/>
                            </div>
                            
                            <button type="submit" class="btn btn-primary btn-sm" onClick={(e)=> onSubmit(e)}>Submit</button>
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

export default AddHotel