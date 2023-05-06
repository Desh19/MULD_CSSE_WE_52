import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import { SideNav } from './SideNav'
import { DashboardHeader } from './TravelAgentHeader'
import "../TravelAgent/TravelAgentDashboard.css"
import Swal from 'sweetalert2';

const TravelAgentView = () => {

    const id = localStorage.getItem("id");
    const [place , setPlace] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState("");
    // const params=useParams();
    // const placeID=params.id;

    useEffect(()=>{
        const getOwnPlace = async () => {
          await axios.get(`http://localhost:8090/TravelPlace/ownplace/${localStorage.getItem("id")}`).then((res) => {
            setPlace(res.data);
          }).catch((err) => {
              console.log(err.massage);
          }) 
      }
      getOwnPlace();
      },[])

      const filteredPlace = place.filter((place) => {
        return (
            place.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
    });

    const deleteItem = async (placeID) => {
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
                const res =  axios.delete(`http://localhost:8090/TravelPlace/delete/${placeID}`).then((res) => {
                  if (res) {
                    Swal.fire({
                      title: "Success!",
                      text: "Your file has been deleted",
                      icon: "success",
                      showConfirmButton: false,
                      timer: 1500,
                    }).then(() => {
                      window.location.href = "/travel_agent_view";
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
     <body >
    <DashboardHeader/>
      <div class="container-fluid">
        <div class="row">
          <SideNav/>
      
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 class="h2">Dashboard</h1>
              <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group me-2">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                  <span data-feather="calendar" class="align-text-bottom"></span>
                  This week
                </button>
              </div>
            </div>
      
            {/* <canvas className="my-4 w-100" id="myChart" style={{ width:"900", height:"380" }} ></canvas> */}
      
            {/* <h2>Section title</h2> */}
            <div class="table-responsive">
              <table class="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Place</th>
                    <th scope="col">Place Name</th>
                    <th scope="col">Famous for</th>
                    <th scope="col">Location</th>
                    <th scope="col">Actyion</th>
                  </tr>
                </thead>
                {filteredPlace.map((place,index)=>
                    <tbody>
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td><a href={`/update_travel_place/${place._id}`}><img src={place.image} style={{ width: '250px', height:'150px' }}/></a></td>
                            <td>{place.name}</td>
                            <td>{place.famousfor}</td>
                            <td>{place.location}</td>
                            <td><a href={`/update_travel_place/${place._id}`}><button type="button" class="btn btn-primary" style={{ margin:'5px' }}>Update</button></a>
                            <button type="button" class="btn btn-danger" onClick={()=>deleteItem(place._id)}>Delete</button>
                            </td>
                            
                        </tr>
                </tbody>
                )}
              </table>
            </div>
          </main>
        </div>
      </div>
      
      
    </body>        
    </div>
  )
}

export default TravelAgentView
