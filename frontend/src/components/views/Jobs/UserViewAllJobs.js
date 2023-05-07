import React, { useEffect } from 'react'
import HeaderTraveler from '../Headers/HeaderTraveler';
import Footer from '../Footer';
import axios from 'axios';

const UserViewAllJobs = () => {

    const [searchTerm, setSearchTerm] = React.useState("");
    const [jobvacancy, setJobvacancy] = React.useState([]);
    
    useEffect(()=>{
        const getAllVacancy = async () => {
            await axios.get(`http://localhost:8090/JobVacancy`).then((res) => {
                setJobvacancy(res.data);
            console.log( res.data)
            }).catch((err) => {
                console.log(err.massage);
            })
        }
        getAllVacancy();
    },[])

    const filteredvacancy = jobvacancy.filter((jobvacancy) => {
        return (
            jobvacancy.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            jobvacancy.jobType.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
    });

    // const { closing_date } = jobvacancy;
    const date = new Date(jobvacancy.closing_date);
    
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).split('/').join('-');
  


  return (
    <div>
        <HeaderTraveler />
    <div className='album py-5 bg-body-tertiary'>
        <div class="container py-3" style={{ marginTop:'50px' }}>
  <main>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {filteredvacancy.map((jobvacancy,index)=>
        <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm" key={index}>
          <div class="card-header py-3">
            <h2 class="my-0 fw-normal"><a href={`/user_view_jobs/${jobvacancy._id}`} style={{ textDecoration:'none', color:'black' }}>{jobvacancy.title}</a></h2>
          </div>
          <div class="card-body">
          <h3 class="card-title pricing-card-title">Position : {jobvacancy.jobCategory}</h3>
            <p class="card-title pricing-card-title">{jobvacancy.jobType}</p>
            <p className="card-text" style={{ marginTop: "5px" }} >{jobvacancy.closing_date}</p>
            
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">View More</button>
          </div>
        </div>
      </div>
        )}
      
    </div>

  </main>


</div>
<Footer />
        </div>

    </div>
  )
}

export default UserViewAllJobs