import React from 'react'
import "../TravelAgent/TravelAgentDashboard.css"

export const GuideSideNav = () => {
  return (
    <div>
        <div class="container-fluid">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar collapse">
      <div class="position-sticky pt-3 sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
          <a className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" aria-current="page" href="/dashboard_ta">
          <span data-feather="home" className="align-text-bottom"></span>
          Dashboard
        </a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link" href="/add_travel_place">
              <span data-feather="file" class="align-text-bottom"></span>
              Travel Places
            </a>
          </li> */}
          <li class="mb-1">
        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
          Travel Place
        </button>
        <div class="collapse show" id="home-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="/add_travel_place" class="nav-link">Add Place</a></li>
            <li><a href="#" class="nav-link">Updates Place</a></li>
            <li><a href="#" class="nav-link">Delete Place</a></li>
          </ul>
        </div>
      </li>
          <li class="nav-item">
            <a class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" href="#">
              <span data-feather="users" class="align-text-bottom"></span>
              Customers
            </a>
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
