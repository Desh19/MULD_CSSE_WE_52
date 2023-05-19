import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './allarticles.css';
import HeaderTraveler from '../Headers/HeaderTraveler';
import Footer from '../Footer';

const Allarticles = () => {

  const userId =localStorage.getItem("id");

  const [searchTerm, setSearchTerm] = React.useState("");
  const [article, setArticle] = React.useState([]);
  const UserId =localStorage.getItem("id");
  
  useEffect(()=>{
      const getAllarticles = async () => {
        await axios.get(`http://localhost:8090/Article/`).then((res) => {
          setArticle(res.data);
        }).catch((err) => {
            console.log(err.massage);
        }) 
    }
    getAllarticles();
    },[])

    // console.log(article)

    const filteredarticle = article.filter((article) => {
      return (
        article.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
  });

  const likePost = (id)=>{
    fetch('http://localhost:8090/Article/like',{
        method:"put",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ArticleId:id,
          userId,
        })
    }).then(res=>res.json())
    .then(result=>{
             //   console.log(result)
      const newData = article.map(article=>{
          if(article._id==result._id){
              return {...article, likes: result.likes}
          }else{
              return article
          }
      })
      setArticle(newData)
    }).catch(err=>{
        console.log(err)
    })
}

const unlikePost = (id)=>{
  fetch('http://localhost:8090/Article/unlike',{
      method:"put",
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        ArticleId:id,
        userId,
      })
  }).then(res=>res.json())
  .then(result=>{
    //   console.log(result)
    const newData = article.map(article=>{
        if(article._id==result._id){
          return {...article, likes: result.likes}
        }else{
            return article
        }
    })
    setArticle(newData)
  }).catch(err=>{
    console.log(err)
})
}

    return (

      <div>
         <HeaderTraveler />
        
      <div className='ArticleArea '>

      {filteredarticle.map((article)=>

        <div className="card articlecontainer mb-3">
          <div className="card-header w-100">
            <center>
          <h6>{article.title} - {article.category}</h6>
          </center>          
          </div>
          

          <div className="card-body">
          <Link to={`/SingleArticleView/${article._id}`}>
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

               <i className="material-icons pr-5" style={{color:"red"}}>favorite</i>
               {article.likes.includes(UserId)
               ?
                <i className="material-icons pr-5 ms-1" style={{cursor:"pointer"}} onClick={()=>{unlikePost(article._id)}}>thumb_down</i>
                
                 :
                 <i className="material-icons pr-5 ms-1" style={{cursor:"pointer"}} onClick={()=>{likePost(article._id)}}>thumb_up</i>
                 
                }
                <h6>{article.likes.length} Likes</h6> 
            
              
              <br />

              <div>
              <Link to={`/SingleArticleView/${article._id}`}>
              <button className='readmorebtn'>Read More</button>
              </Link>
              </div>
              
          </div>
        </div>

            )}

        </div>

      <Footer />
      
      </div>
    )
  }
  
  
  export default Allarticles