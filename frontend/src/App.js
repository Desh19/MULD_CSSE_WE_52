// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

//Landing Page
import LandingPage from './components/views/LandingPage';

//Traveler Home Page
import HomePage from './components/views/HomePage';

//Headers
import NotRegHeader from './components/views/Headers/NotRegHeader';
import HeaderTraveler from './components/views/Headers/HeaderTraveler';

//Footer
import Footer from './components/views/Footer';

//Traveler
import Allarticles from './components/views/Traveler/Allarticles';
import TravelerProfile from './components/views/Traveler/TravelerProfile';

//Travel Agent
import TravelAgentDashboard from './components/views/TravelAgent/TravelAgentDashboard';
import AddTravelPlace from './components/views/TravelAgent/AddTravelPlace';
import AllTravelPlace from './components/views/Traveler/AllTravelPlace';
import SingaleTravelPlace  from './components/views/Traveler/SingaleTravelPlace';
// import { AllTravelPlace } from './components/views/Traveler/AllTravelPlace';
// import { SingaleTravelPlace } from './components/views/Traveler/SingaleTravelPlace';

//Tourist Guide
import AddPackage from './components/views/TouristGuide/AddPackage';
import AllPackages from './components/views/TouristGuide/AllPackages';
import SinglePackage from './components/views/TouristGuide/SinglePackage';
import GuideProfile from './components/views/TouristGuide/GuideProfile';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route element={<NotRegHeader />} />
        <Route element={<HeaderTraveler />} />
        <Route element={<Footer />} />

        {/* //Traveler */}
        <Route path='/TravelerHome' element={<HomePage />} />
        <Route path='/allarticles' element={<Allarticles />} />
        <Route path='/travelerprofile' element={<TravelerProfile />} />

        {/* TravelAgent */}
        <Route path='/dashboard_ta' element={<TravelAgentDashboard />} />
        <Route path='/add_travel_place' element={<AddTravelPlace />} />
        <Route path='/all_travel_place' element={<AllTravelPlace />} />
        <Route path='/singale_travel_place/:id' element={<SingaleTravelPlace />} />


        {/* Tourist Guide */}
        <Route path='/add_package' element={<AddPackage />} />
        <Route path='/all_packages' element={<AllPackages />} />
        <Route path='/single_package/:id' element={<SinglePackage />} />
        <Route path='/guide_profile' element={<GuideProfile />} />

      </Routes>  
    </Router>
  </div>
  );
}

export default App;
