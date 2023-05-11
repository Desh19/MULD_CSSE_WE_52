import React from 'react'
import "../TravelAgent/TravelAgentDashboard.css"
import { Link, NavLink } from 'react-router-dom'

export const SideNav = () => {
  return (
    <div>
        <div class="container-fluid">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar collapse">
      <div class="position-sticky pt-3 sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
          <NavLink className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" aria-current="page" href="/dashboard_ta">
          {/* <span data-feather="home" className="align-text-bottom"></span> */}
          <i class="fa-solid fa-house" style={{ marginRight:'10px' }}></i>Dashboard
        </NavLink>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link" href="/add_travel_place">
              <span data-feather="file" class="align-text-bottom"></span>
              Travel Places
            </a>
          </li> */}
          <li class="mb-1">
          <Link to={'/view_travel_place'}>
            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
            <i class="fa-solid fa-location-dot" style={{ marginRight:'10px' }}></i> Travel Places
        </button>
        </Link>
        <div class="collapse show" id="home-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="/add_travel_place" class="nav-link" style={{ marginLeft:'20px' }}><i class="fa-sharp fa-solid fa-plus" style={{ marginRight:'10px' }}></i> Add Place</a></li>
            <li><a href="/travel_agent_view" class="nav-link"  style={{ marginLeft:'20px' }}><i class="fa-sharp fa-solid fa-pen-to-square" style={{ marginRight:'10px' }}></i> Updates Place</a></li>
            {/* <li><a href="#" class="nav-link">Delete Place</a></li> */}
          </ul>
        </div>
      </li>
      <li class="mb-1">
          <Link to={'/travel_agent_view_all'}>
            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
            <i class="fa-sharp fa-solid fa-briefcase" style={{ marginRight:'10px' }}></i> Jobs
        </button>
        </Link>
        <div class="collapse show" id="home-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="/add_jobs" class="nav-link" style={{ marginLeft:'20px' }}><i class="fa-sharp fa-solid fa-plus" style={{ marginRight:'10px' }}></i> Add Jobs</a></li>
            <li><a href="#" class="nav-link" style={{ marginLeft:'20px' }}><i class="fa-sharp fa-solid fa-pen-to-square" style={{ marginRight:'10px' }}></i> Updates Jobs</a></li>
            {/* <li><a href="#" class="nav-link">Delete Place</a></li> */}
          </ul>
        </div>
      </li>
          <li class="nav-item">
            <a class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" href="#">
              <span data-feather="bar-chart-2" class="align-text-bottom"></span>
              Reports
            </a>
          </li>
          <li class="nav-item">
            <a class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" href="#">
              <span data-feather="layers" class="align-text-bottom"></span>
              Integrations
            </a>
          </li>
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
          <span>Saved reports</span>
          <a class="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle" class="align-text-bottom"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Current month
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Last quarter
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Social engagement
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Year-end sale
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
    </div>
    </div>
  )
}
