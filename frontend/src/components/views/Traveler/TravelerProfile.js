import axios from "axios";
import "./travelerprofile.css";
import HeaderTraveler from '../Headers/HeaderTraveler';
import Footer from '../Footer';
import React, { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
const Swal = require('sweetalert2')


export default function TravelerProfile() {

  const id =localStorage.getItem("id");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [article, setArticle] = React.useState([]);
  const [user, setUser] = React.useState({});


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
      article.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLocaleLowerCase())
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
                <Link className="nav-link active" aria-current="page" to="/UpdateTravelerProfile">
                    <img
                      src={user.image ? user.image : "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"}
                      alt=""
                      className="travelerimg"
                      />
                      </Link>
                    <div className='nameNdate mt-4'>
                        <h2>{user.name}</h2>
                        <h5>{user.field}</h5>
                    </div>
                </div>
                
                <div class="col-sm-4 rights">
                    <button className='btn btn-success articlebtn'><Link className="nav-link active" aria-current="page" to="/addarticle">Add article</Link></button>
                    <button className='editprofile'><Link className="nav-link active" aria-current="page" to="/UpdateTravelerProfile"><i class="fa-solid fa-user-pen" style={{ color: "#ffffff" }}></i></Link></button>
                    <button className='dltprofile'><i class="fa-solid fa-trash-can" style={{ color: "#ffffff"}}></i></button>
                    
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
                <img
                      src={article.userID.image}
                      alt=""
                      className="pro"
                      />

                </div>
                <div className='nameN'>
                  <h2>{article.userID.name}</h2>
                  <p>{article.postedAt.toString().substring(0,10)}</p>
                  
                </div>

              </div>
              <div className='discri'>
              {article.description} 
              </div>
              
              <br />
              <div className="d-flex">
              <i className="material-icons pr-5" style={{color:"red"}}>favorite</i>
              <p className="px-2">{article.likes.length} people liked your post</p>
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
