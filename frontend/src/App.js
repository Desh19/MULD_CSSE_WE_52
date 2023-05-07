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
import AllPackages from './components/views/Traveler/AllPackages';
import GuidePackageView from './components/views/Traveler/GuidePackageView';
import SingleArticleView from './components/views/Traveler/SingleArticleView';
import TravelerOneArticle from './components/views/Traveler/TravelerOneArticle';
import UpdateArticle from './components/views/Traveler/UpdateArticle';

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

//Tourist Guide
import AddPackage from './components/views/TouristGuide/AddPackage';
import SinglePackage from './components/views/TouristGuide/SinglePackage';
import GuideProfile from './components/views/TouristGuide/GuideProfile';
import TouristGuideHome from './components/views/TouristGuide/TouristGuideHome';
import AllPackagesView from './components/views/TouristGuide/AllPackagesView';
import UpdatePackage from './components/views/TouristGuide/UpdatePackage';


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
        <Route path='/allpackages' element={<AllPackages />} />
        <Route path='/guidepackageview/:id' element={<GuidePackageView />} />
        <Route path='/SingleArticleView/:id' element={<SingleArticleView />} />
        <Route path='/TravelerOneArticle/:id' element={<TravelerOneArticle />} />
        <Route path='/UpdateArticle/:id' element={<UpdateArticle />} />


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



        {/* Tourist Guide */}
        <Route path='/add_package' element={<AddPackage />} />
        <Route path='/all_packages' element={<AllPackagesView />} />
        <Route path='/single_package/:id' element={<SinglePackage />} />
        <Route path='/guide_profile' element={<GuideProfile />} />
        <Route path='/guide_home' element={<TouristGuideHome />} />

        <Route path='/update_package/:id' element={<UpdatePackage />} />  

        



      </Routes>  
    </Router>
  </div>
  );
}

export default App;
