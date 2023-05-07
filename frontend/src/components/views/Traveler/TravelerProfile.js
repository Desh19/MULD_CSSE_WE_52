import axios from "axios";
import "./travelerprofile.css";
import HeaderTraveler from '../Headers/HeaderTraveler';
import Footer from '../Footer';
import { useParams, useNavigate} from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import {Link} from 'react-router-dom';
const Swal = require('sweetalert2')


export default function TravelerProfile() {

  const id =localStorage.getItem("id");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [article, setArticle] = React.useState([]);
  const [user, setUser] = React.useState([]);


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
    const getOwnArticles = async () => {
      await axios.get(`http://localhost:8090/Article/ownarticles/${localStorage.getItem("id")}`).then((res) => {
        setArticle(res.data);
      }).catch((err) => {
          console.log(err.massage);
      }) 
  }
  getOwnArticles();
  },[])

  const filteredarticle = article.filter((article) => {
    return (
      article.userName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      article.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
});

const deleteArticle = async (_id) => {
  try{
      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.value === true) {
            const res =  axios.delete(`http://localhost:8090/Article/delete/${_id}`).then((res) => {
              if (res) {
                Swal.fire({
                  title: "Success!",
                  text: "Your Article has been deleted",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 1500,
                }).then(() => {
                  window.location.reload();
                });
              } else {
                Swal.fire({
                  title: "Error!",
                  text: "Something went wrong",
                  icon: "error",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
          }
        });

  }catch(err){
      console.log(err.data.msg);
  }
}
 
  return (
    <div>
         <HeaderTraveler />
        <div className='TravelProfileArea'>
            <div class="row TravelerProfile">
                <div class="col-sm-8 lefts">
                    <div className='profileimg'>

                    </div>
                    <div className='nameNdate'>
                        <h2>{user.name}</h2>
                        <p>{article.registerAt}</p>
                    </div>
                
                </div>
                <div class="col-sm-4 rights">
                    <button className='btn btn-success articlebtn'><Link className="nav-link active" aria-current="page" to="/addarticle">Add article</Link></button>
                    <button className='editprofile'><Link className="nav-link active" aria-current="page" to="/editProfileS">Edit Profile</Link></button>
                    <button className='dltprofile'>Delete Profile</button>
                    
                </div>
            </div>

            <div className='TravelerArea'>

                <h3><span>M</span>y <span>A</span>rticles</h3>

  
       {filteredarticle.map((article)=>

        <div className="card travelerontainer">
          <div className="card-header w-100">
            <center>
          <h6>{article.title} - {article.category}</h6>
          </center>
                    
          </div>

          <div className="card-body">
          <Link to={`/TravelerOneArticle/${article._id}`}>
            <img src={article.image} alt="image" width="100%"/>
            </Link>
          </div>

          <div className="card-footer w-100">
              <div className='profileArea'>

                <div className='pro'>

                </div>
                <div className='nameN'>
                  <h2>{article.userName}</h2>
                  <p>{article.postedAt}</p>
                  
                </div>

              </div>
              <div className='discri'>
              {article.description} 
              </div>
              
              <br />

              <div>
              <Link to={`/TravelerOneArticle/${article._id}`}>
              <button className='readmorebtn'>Read More</button>
              </Link>
              <button className='btn btn-danger'onClick={()=>deleteArticle(article._id)}>Remove</button>
              </div>
              
          </div>
        </div>

          )}

            </div>

        </div>
        <Footer />
    </div>
  )
}
