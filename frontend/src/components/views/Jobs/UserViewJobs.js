import React, { useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import HeaderTraveler from '../Headers/HeaderTraveler';
import Footer from '../Footer';

const UserViewJobs = () => {

    const [job , setJob] = React.useState({});
    const params=useParams();
    const jobID=params.id;

    useEffect(()=>{
        const getOneJob = async () => {
          await axios.get(`http://localhost:8090/JobVacancy/${jobID}`).then((res) => {
            setJob(res.data);
          }).catch((err) => {
              console.log(err.massage);
          }) 
      }
      getOneJob();
      },[])

  return (
    <div> 
        <HeaderTraveler />
        <div class="container-fluid" >
       
            <div class="row" >
            
            <center>
                 <div className="col-lg-6" style={{ marginTop:'90px' }}>
                    <div className="card" >
                                            <div className="card-header">
                                                <h4 className="card-title">Job Vacancy</h4>
                                            </div>
                                            <div className="card-body">
                                                <table className="table table-borderless dt-responsive">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '8rem' }} />
                                                            <th />
                                                        </tr>
                                                    </thead>
                                                    <tbody >
                                                        <tr>
                                                            <td>
                                                                <h6 className="card-subtitle mb-2 text-muted" >Job Title</h6>
                                                            </td>
                                                            <td>
                                                                <p className="card-text">{job.title}</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6 className="card-subtitle mb-2 text-muted" >Job Description</h6>
                                                            </td>
                                                            <td>
                                                                <p className="card-text" >{job.discription}</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6 className="card-subtitle mb-2 text-muted" >Job Category </h6>
                                                            </td>
                                                            <td>
                                                                <p className="card-text" >{job.jobCategory}</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6 className="card-subtitle mb-2 text-muted">Job Type </h6>
                                                            </td>
                                                            <td>
                                                                <p className="card-text" >{job.jobType}</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6 className="card-subtitle mb-2 text-muted" >Closing Date </h6>
                                                            </td>
                                                            <td>
                                                                <p className="card-text" >{job.closing_date}</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6 className="card-subtitle mb-2 text-muted" >Job Create By</h6>
                                                            </td>
                                                            <td>
                                                                <p className="card-text" >{job.createdByName}</p>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                                <a href="#" className="btn btn-success btn-block">Apply</a>
                                            </div>
                    </div>
             </div>
            </center>
           
            </div>
        </div>   
        <Footer />   
    </div>    
  )
}

export default UserViewJobs