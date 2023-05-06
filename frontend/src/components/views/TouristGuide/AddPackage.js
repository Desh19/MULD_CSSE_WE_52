import React, { useEffect, useState } from 'react'
import axios from 'axios';
import HeaderTraveler from '../Headers/HeaderTraveler';
import Footer from '../Footer';
const Swal = require('sweetalert2');

const AddItems = () => {

    const id =localStorage.getItem("id");
    const name =localStorage.getItem("name");
    const [user, setUser]=useState({});

    const [packageplayload, setPackageplayload ] = React.useState({

      userID: id,
      userName: name,
      mobileNo: "",
      priceRange: "",
      guiderBio: "",
      languages: "",
      image: "",
      postedAt: Date.now()
  
  });

    const onChangeInput = (e) => {
      setPackageplayload({ 
        ...packageplayload, 
        [e.target.name]: e.target.value
       });
  };

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

    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        console.log(packageplayload)
        const res = await axios.post("http://localhost:8090/Package/add",packageplayload);
        console.log(res);
        Swal.fire({
          title: "Success!",
          text: "Package Posted successfully",
          icon: 'success',
          timer: 2000,
          button: false,
        }).then(()=>{
          window.location.href = "#";
        })       
      } catch (err) {
        Swal.fire({
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
          setPackageplayload({
            ...packageplayload,
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
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                <div className="card-body p-4 p-md-5">
                    <center>
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Add Tourist Guide Package</h3>
                  </center>
                  <form>
                      <div class="mb-3">
                          <label class="form-label">Guider Name</label>
                          <input type="text" class="form-control" id='name' name='name' value={user.name} disabled readonly/>
                      </div>
                      <div class="mb-3">
                          <label class="form-label">Mobile No</label>
                          <input type="text" class="form-control" id='mobileNo' name='mobileNo' onChange={(e) => onChangeInput(e)} placeholder="Enter Mobile No" required/>
                      </div>
                      <div class="mb-3">
                          <label class="form-label">Price Range</label>
                          <input type="text" class="form-control" id='priceRange' name='priceRange' onChange={(e) => onChangeInput(e)} placeholder="Enter Price Range" required/>
                     </div>
                      <div class="mb-3">
                          <label class="form-label">Guider Bio</label>
                          <textarea type="text" class="form-control" style={{ height: "150px" }} id='guiderBio' name='guiderBio' onChange={(e) => onChangeInput(e)} placeholder="Type Bio..." required/>
                      </div>
                      <div class="mb-3">
                          <label class="form-label">Language Competencies</label>
                          <input type="text" class="form-control" id='languages' name='languages' onChange={(e) => onChangeInput(e)} placeholder="Enter Languages" required/>
                      </div>
                      <div class="mb-5">
                          <label for="formFile" class="form-label">Add Thumbnail Image</label>
                          <input class="form-control" type="file" id="formFile" name='image' onChange={handleImageChange} />
                      </div>
                      <center>
                      <button type="submit" class="btn btn-success" onClick={(e)=> onSubmit(e)}>Submit Package</button>
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


export default AddItems