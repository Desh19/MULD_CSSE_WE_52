import React, { useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import HeaderTraveler from '../Headers/HeaderTraveler';
import Footer from '../Footer';

const TravelerOneArticle = () => {

    // const id =localStorage.getItem("id");
    const [article , setArticle] = React.useState({});
    const params=useParams();
    const articleID=params.id;

    useEffect(()=>{
        const ViewOneArticle = async () => {
          await axios.get(`http://localhost:8090/Article/${articleID}`).then((res) => {
            setArticle(res.data);
          }).catch((err) => {
              console.log(err.massage);
          }) 
      }
      ViewOneArticle();
      },[])



  return (
    <div className="site-wrap">
      <HeaderTraveler/>
      <div className="site-section pt-5">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-6 mr-auto">
              <div className="border text-center">
                <img
                  src={article.image}
                  alt="Image"
                  className="img-fluid p-5"
                />

              </div>
            </div>
            <div className="col-md-6 mt-5">
              <h2 className="text-black">{article.title} ( {article.category} )</h2>
              <p>{article.description}</p>
              {/* <p>Publisher Name : {article.userID.name}</p>
              <p>Posted Date : {article.postedAt}</p> */}
              <Link to={`/UpdateArticle/${article._id}`}>
              <button className='btn btn-success'>Update Article</button>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}


export default TravelerOneArticle