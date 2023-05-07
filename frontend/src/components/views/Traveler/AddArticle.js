import React, { useEffect, useState } from 'react'
import axios from 'axios';
import HeaderTraveler from '../Headers/HeaderTraveler';
import Footer from '../Footer';
const Swal = require('sweetalert2');

const AddItems = () => {

    const id =localStorage.getItem("id");
    const name =localStorage.getItem("name");
    const UserDp =localStorage.getItem("UserDp");
    const [user, setUser]=useState({});

    const [articleplayload, setArticleplayload ] = React.useState({

      userID: id,
      userName: name,
      publisherDP: UserDp,
      title: "",
      category: "",
      description: "",
      image: "",
      postedAt: Date.now()
  
  });

    const onChangeInput = (e) => {
      setArticleplayload({ 
        ...articleplayload, 
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
        console.log(articleplayload)
        const res = await axios.post("http://localhost:8090/Article/add",articleplayload);
        console.log(res);
        Swal.fire({
          title: "Success!",
          text: "Article Posted successfully",
          icon: 'success',
          timer: 2000,
          button: false,
        }).then(()=>{
          window.location.href = "/allarticles";
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
          setArticleplayload({
            ...articleplayload,
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
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Add Article</h3>
                  </center>
                  <form>
                      <div class="mb-3">
                          <label class="form-label">Publisher Name</label>
                          <input type="text" class="form-control" id='name' name='name' value={user.name} disabled readonly/>
                      </div>
                      <div class="mb-3">
                          <label class="form-label">Article Title</label>
                          <input type="text" class="form-control" id='title' name='title' onChange={(e) => onChangeInput(e)} placeholder="Enter Title" required/>
                      </div>
                      <div class="mb-3">
                          <label class="form-label">Article Category</label>
                        <select class="form-select" id="category"  name="category" onChange={(e) => onChangeInput(e)} aria-label="Floating label select example">
                          <option selected disabled>Select Article Category</option>
                          <option value="Heritage Place">Heritage Place</option>
                          <option value="Cultural Event">Cultural Event</option>
                        </select>
                     </div>
                      <div class="mb-3">
                          <label class="form-label">Description</label>
                          <textarea type="text" class="form-control" style={{ height: "150px" }} id='description' name='description' onChange={(e) => onChangeInput(e)} placeholder="Type Description..." required/>
                      </div>
                      <div class="mb-5">
                          <label for="formFile" class="form-label">Article Image</label>
                          <input class="form-control" type="file" id="formFile" name='image' onChange={handleImageChange} />
                      </div>
                      <center>
                      <button type="submit" class="btn btn-success" onClick={(e)=> onSubmit(e)}>Publish Article</button>
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