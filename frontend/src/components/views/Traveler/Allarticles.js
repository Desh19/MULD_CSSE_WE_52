import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './allarticles.css';
import HeaderTraveler from '../Headers/HeaderTraveler';
import Footer from '../Footer';

const Allarticles = () => {

  const [searchTerm, setSearchTerm] = React.useState("");
  const [article, setArticle] = React.useState([]);
  const UserId =localStorage.getItem("id");
  useEffect(()=>{
      const getAllarticles = async () => {
        await axios.get(`http://localhost:8090/Article/`).then((res) => {
          setArticle(res.data);
        console.log( res.data)
        }).catch((err) => {
            console.log(err.massage);
        }) 
    }
    getAllarticles();
    },[])

    // console.log(article)

    const filteredarticle = article.filter((article) => {
      return (
        article.userName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        article.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
  });

  const likePost = (id)=>{
    fetch('/like',{
        method:"put",
        body:JSON.stringify({
          ArticleId:id
        })
    }).then(res=>res.json())
    .then(result=>{
             //   console.log(result)
      const newData = article.map(article=>{
          if(article._id==result._id){
              return result
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
  fetch('/unlike',{
      method:"put",
      body:JSON.stringify({
          ArticleId:id
      })
  }).then(res=>res.json())
  .then(result=>{
    //   console.log(result)
    const newData = article.map(article=>{
        if(article._id==result._id){
            return result
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
        
      <div className='ArticleArea'>

      {filteredarticle.map((article)=>

        <div className="card articlecontainer">
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
                      src={article.publisherDP}
                      alt=""
                      className="pro"
                      />
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

               <i className="material-icons pr-5" style={{color:"red"}}>favorite</i>
               {article.likes.includes(UserId)
               ?<button>
                <i className="material-icons mr-5" onClick={()=>{unlikePost(article._id)}}>thumb_down</i>
                </button>
                 :
                 <i className="material-icons pr-5" onClick={()=>{likePost(article._id)}} >thumb_up</i>
                 
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