import React, { useEffect } from 'react';
import axios from 'axios';
import './allarticles.css';
import HeaderTraveler from '../Headers/HeaderTraveler';
import Footer from '../Footer';

const Allarticles = () => {

  const [searchTerm, setSearchTerm] = React.useState("");
  const [article, setArticle] = React.useState([]);
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

    return (

      <div>
         <HeaderTraveler />
        
      <div className='ArticleArea'>

      {filteredarticle.map((article)=>

        <div className="card articlecontainer">
          <div className="card-header w-100">
            <center>
          <h6>{article.title}</h6>
          </center>          
          </div>

          <div className="card-body">
            
            <img src={article.image} alt="image" width="100%"/>

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

               <i className="material-icons pr-5" style={{color:"red"}}>favorite</i>
                 {/* {article.likes.includes(state._id) */}
                 <i className="material-icons pr-5" >thumb_up</i>
                 <i className="material-icons mr-5 ">thumb_down</i>
               {/* } */}
                <h6>3 Likes</h6> 
            
              
              <br />

              <div>
              <button className='readmorebtn'>Read More</button>
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