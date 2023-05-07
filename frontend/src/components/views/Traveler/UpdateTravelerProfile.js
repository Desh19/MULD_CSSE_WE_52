import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';
import HeaderTraveler from '../Headers/HeaderTraveler';
import Footer from '../Footer';
import swal from "sweetalert";

const UpdateArticle = () => {

    const id =localStorage.getItem("id");
    const [user, setUser]=useState({});
    const history = useNavigate();

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
  
      const sendRequest = async() =>{
  
        await axios.put(`http://localhost:8090/User/update/${id}` , {
      
        name:String(user.name),
        email:String(user.email),
        password:String(user.password),
        image:String(user.image)
    
        }).then(()=>{
      
            swal({
                title: "Success!",
                text: "Profile Updated Successfully",
                icon: 'success',
                timer: 2000,
                button: false,
              });
            
        })
      
      
      }
      
      const handleSubmit = (e) =>{
        e.preventDefault();
        sendRequest().then(()=>history("/travelerprofile"));

      };
      
      const handleChange =(e)=>{
      
        setUser((prevState)=>({
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
            setUser({
              ...user,
              image: res.data.url,
            });
          } catch (err) {
            console.log(err.response.data.msg);
            
          }
      }
    
    
  return (
    <div>
       <HeaderTraveler />
    <div className='container-sm '>
      <section className="gradient-custom pt-5">
        <div className="container pt-5 h-100">
          <div className="row justify-content-center align-articles-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                <div className="card-body p-4 p-md-5">
                    <center>
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Update Profile</h3>
                  </center>
                  <form>

                  <div class="mb-3">
                          <label class="form-label">User Type</label>
                          <input type="text" class="form-control" id='field' name='field' value={user.field} disabled readonly/>
                      </div>
                      <div class="mb-3">
                          <label class="form-label">Name</label>
                          <input type="text" class="form-control" id='name' name='name' value={user.name} onChange={handleChange} placeholder="Enter Name" />
                      </div>
                      <div class="mb-3">
                          <label class="form-label">Email</label>
                          <input type="text" class="form-control" id='email' name='email' value={user.email} onChange={handleChange} placeholder="Enter Email" />
                      </div>
                      <div class="mb-3">
                          <label class="form-label">Password</label>
                          <input type="text" class="form-control" id='password' name='password' value={user.password} onChange={handleChange} placeholder="Enter Paasword" />
                      </div>
                      <div class="mb-3">
                          <label for="formFile" class="form-label">Profile Photo</label>
                        <div class="card" style={{ width:'18rem' }}>
                            <img class="card-img-top" src={user.image ? user.image : "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"} alt="Profile Image" style={{ width:'18rem', height:'auto' }} />
                        </div>
                     </div>

                        <div class="mb-3">
                        <label for="formFile" class="form-label">Change Profile Photoe</label>
                          <input name='image' class="form-control" type="file" id="formFile" onChange={handleImageChange}/>
                        </div>
                      
                      <center>
                      <button type="submit" class="btn btn-success mt-3" onClick={handleSubmit}>Update</button>
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


export default UpdateArticle