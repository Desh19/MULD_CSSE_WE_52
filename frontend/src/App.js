// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

//Landing Page
import LandingPage from './components/views/LandingPage';

//Headers
import NotRegHeader from './components/views/Headers/NotRegHeader';

//Footer
import Footer from './components/views/Footer';

//Traveler
import Allarticles from './components/views/Traveler/Allarticles';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route element={<NotRegHeader />} />
        <Route element={<Footer />} />
        <Route path='/allarticles' element={<Allarticles />} />
      </Routes>  
    </Router>
  </div>
  );
}

export default App;
