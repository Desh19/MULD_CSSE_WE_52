import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';
import HeaderTraveler from '../Headers/HeaderTraveler';
import Footer from '../Footer';
import swal from "sweetalert";

const UpdateArticle = () => {

    const id =localStorage.getItem("id");
    const [article, setArticle] = useState({});
    const [user, setUser]=useState({});
    const params=useParams();
    const history = useNavigate();
    const articleID=params.id;

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
    const getOnearticle = async () => {
      await axios.get(`http://localhost:8090/Article/${articleID}`).then((res) => {
        setArticle(res.data);
      }).catch((err) => {
          console.log(err.massage);
      }) 
  }
  getOnearticle();
  },[])
  
  
  const sendRequest = async() =>{
  
    await axios.put(`http://localhost:8090/Article/update/${articleID}` , {
  
    title:String(article.title),
    category:String(article.category),
    description:String(article.description),
    image:String(article.image)

    }).then(()=>{
  
        swal({
            title: "Success!",
            text: "Article Updated Successfully",
            icon: 'success',
            timer: 2000,
            button: false,
          });
        
    })
  
  
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    sendRequest().then(()=>history(`/TravelerOneArticle/${article._id}`));
  };
  
  const handleChange =(e)=>{
  
    setArticle((prevState)=>({
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
        setArticle({
          ...article,
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
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Update Article</h3>
                  </center>
                  <form>
                      <div class="mb-3">
                          <label class="form-label">Publisher Name</label>
                          <input type="text" class="form-control" id='name' name='name' value={user.name} disabled readonly/>
                      </div>
                      <div class="mb-3">
                          <label class="form-label">Article Title</label>
                          <input type="text" class="form-control" id='title' name='title' value={article.title} onChange={handleChange} placeholder="Enter Title" required/>
                      </div>
                      <div class="mb-3">
                          <label class="form-label">Article Category</label>
                        <select class="form-select" id="category"  name="category" value={article.category} onChange={handleChange} aria-label="Floating label select example">
                          <option selected disabled>Select Article Category</option>
                          <option value="Heritage Place">Heritage Place</option>
                          <option value="Cultural Event">Cultural Event</option>
                        </select>
                     </div>
                      <div class="mb-3">
                          <label class="form-label">Description</label>
                          <textarea type="text" class="form-control" style={{ height: "150px" }} id='description' name='description' value={article.description} onChange={handleChange} placeholder="Type Description..." required/>
                      </div>

                      <div class="mb-3">
                          <label for="formFile" class="form-label">Article Image</label>
                        <div class="card" style={{ width:'18rem' }}>
                            <img class="card-img-top" src={article.image} alt="Card image cap" style={{ width:'18rem', height:'auto' }} />
                        </div>
                     </div>

                        <div class="mb-3">
                        <label for="formFile" class="form-label">Change Article Image</label>
                          <input name='image' class="form-control" type="file" id="formFile" onChange={handleImageChange}/>
                        </div>
                      
                      <center>
                      <button type="submit" class="btn btn-success mt-3" onClick={handleSubmit}>Update Article</button>
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