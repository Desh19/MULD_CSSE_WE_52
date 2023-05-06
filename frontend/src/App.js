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
import AddArticle from './components/views/Traveler/AddArticle';

//Travel Agent
import TravelAgentDashboard from './components/views/TravelAgent/TravelAgentDashboard';
import AddTravelPlace from './components/views/TravelAgent/AddTravelPlace';
import AllTravelPlace from './components/views/Traveler/AllTravelPlace';
import SingaleTravelPlace  from './components/views/Traveler/SingaleTravelPlace';
import ViewTravelPlace from './components/views/TravelAgent/ViewAllTravelPlace';
import UpdateTravelPlace from './components/views/TravelAgent/UpdateTravelPlace';
import TravelAgentView from './components/views/TravelAgent/TravelAgentView';
import SingalePlaceView from './components/views/TravelAgent/SingalePlaceView';
import AddJobs  from './components/views/Jobs/AddJobs';
// import { AllTravelPlace } from './components/views/Traveler/AllTravelPlace';
// import { SingaleTravelPlace } from './components/views/Traveler/SingaleTravelPlace';

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
        <Route path='/addarticle' element={<AddArticle />} />

        {/* TravelAgent */}
        <Route path='/dashboard_ta' element={<TravelAgentDashboard />} />
        <Route path='/add_travel_place' element={<AddTravelPlace />} />
        <Route path='/all_travel_place' element={<AllTravelPlace />} />
        <Route path='/singale_travel_place/:id' element={<SingaleTravelPlace />} />
        <Route path='/view_travel_place' element={<ViewTravelPlace />} />
        <Route path='/update_travel_place/:id' element={<UpdateTravelPlace />} />
        <Route path='/travel_agent_view' element={<TravelAgentView />} />
        <Route path='/singale_place_view/:id' element={<SingalePlaceView />} />
        <Route path='/add_jobs' element={<AddJobs />} />

      </Routes>  
    </Router>
  </div>
  );
}

export default App;
