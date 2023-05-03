import React from 'react'
import { SideNav } from './SideNav'
import { DashboardHeader } from './DashboardHeader'

const AddTravelPlace = () => {


  return (
    <div>
        <DashboardHeader />
    <div class="container-fluid" >
        <div class="row">
            <SideNav/>

            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Taravel Places</h1>
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
            <div className='container-sm'>
            <section className="vh-100 gradient-custom">
                <div className="container py-5">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                    <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                        <div className="card-body p-4 p-md-5">
                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Add Places</h3>
                        <form>
                            <div class="mb-3">
                                <label class="form-label">Place Name</label>
                                <input type="text" class="form-control" id='productName' name='name'  required/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Description</label>
                                <textarea type="text" class="form-control" style={{ height: "150px" }} id='description' name='description' required/>
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Product Image</label>
                                <input class="form-control" type="file" id="formFile" name='image' />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Transport Types</label>
                                <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                <label class="form-check-label" for="flexSwitchCheckChecked">Public Transport</label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary" >Add</button>
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

export default AddTravelPlace