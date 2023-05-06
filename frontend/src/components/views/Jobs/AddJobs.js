import React from 'react'
import { SideNav } from '../TravelAgent/SideNav'
import { DashboardHeader } from '../TravelAgent/TravelAgentHeader'
import axios from 'axios';
import Swal from 'sweetalert';
import Select from 'react-select';

const AddJobs = () => {

  const JobCategoryies = [
    { value: "Full Time", label: "Full Time" },
    { value: "Part Time", label: "Part Time" },
    { value: "Contract", label: "Contract" },

  ];

  const JobType = [
    { value: "Human Resources Managment", label: "Human Resources Managment" },
    { value: "Information Technology", label: "Information Technology" },
    { value: "Accounting and Finance", label: "Accounting and Finance" },
    { value: "Health Sector", label: "Health Sector" },
    { value: "Education", label: "Education" },

  ];



  return (
    <div>
        <DashboardHeader />
    <div class="container-fluid" >
        <div class="row">
            <SideNav/>

            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Jobs Vacancies </h1>
                {/* <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group me-2">
                    <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                    <span data-feather="calendar" class="align-text-bottom"></span>
                    This week
                </button>
                </div> */}
            </div>
            <div className='container-sm'>
            <section className="vh-100 gradient-custom">
                <div className="container py-5">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                    <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                        <div className="card-body p-4 p-md-5">
                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">New Jobs Vacancy </h3>
                        <form>
                            <div class="mb-3">
                                <label class="form-label">Job Title</label>
                                <input type="text" class="form-control" id='name' name='name'  required/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Job Description</label>
                                <textarea type="text" class="form-control" style={{ height: "150px" }} id='discription' name='discription' required/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Job Type</label>
                                <Select
                                    placeholder="Select Job Type"
                                    options={JobCategoryies}
                                />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Job Category</label>
                                <Select
                                  placeholder="Select Job Category"
                                  options={JobType}
                                />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Vacancy Closing Date</label>
                                <input className="form-control" type="date"  id="example-datetime-local-input"
                                    name="closing_date"
                                    required />
                            </div>
                            <button type="submit" class="btn btn-primary">Create</button>
                        </form>
                        </div>
                    </div>  
                    </div>
                </div>
                </div>
            </section>      
            
            </div>
            </main>
        </div>
    </div>

    </div>
  )
}

export default AddJobs