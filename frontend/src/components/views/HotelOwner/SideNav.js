import React from "react";
import "../HotelOwner/hotelOwner.css";
import { NavLink } from "react-router-dom";

export const SideNav = () => {
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <nav
            id="sidebarMenu"
            class="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar collapse sideNav"
          >
            <div class="position-sticky pt-3 sidebar-sticky">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <NavLink
                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    aria-current="page"
                    to="/hotelOwner_dashboard_ta"
                  >
                    <span
                      data-feather="home"
                      className="align-text-bottom"
                    ></span>
                    <i class="fa-solid fa-table-columns d-icon"></i>Dashboard
                  </NavLink>
                </li>
                {/* <li class="nav-item">
        <a class="nav-link" href="/add_travel_place">
          <span data-feather="file" class="align-text-bottom"></span>
          Travel Places
        </a>
      </li> */}
                <li class="mb-1 mt-2">
                  <button
                    class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed mb-2 menuBtn"
                    data-bs-toggle="collapse"
                    data-bs-target="#home-collapse"
                    aria-expanded="true"
                  >
                    Hotel Management <i class="fa-solid fa-caret-down fa-beat-fade ms-3"></i>
                  </button>
                  <div class="collapse show menulist" id="home-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li>
                        <NavLink to="/add_hotel" class="nav-link">
                        <i class="fa-solid fa-house-laptop d-icon"></i> Add Hotel
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/hotel_ratings" class="nav-link">
                        <i class="fa-solid fa-house-fire d-icon"></i> Hotels Rating
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/hotel_booking_req" class="nav-link">
                        <i class="fa-sharp fa-solid fa-bell d-icon"></i> Booking Request
                        </NavLink>
                      </li>
                      
                    </ul>
                  </div>
                </li>
                
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
