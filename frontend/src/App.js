import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/views/Navbar';
import Footer from './components/views/Footer';
import Home from './components/views/Home';
import './App.css';

//Traveler
import Allarticles from './components/views/Traveler/Allarticles';

function App() {
  return (
    <div>
    <Navbar />
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allarticles' element={<Allarticles />} />
      </Routes>  
    </Router>
    <Footer />
  </div>
  );
}

export default App;
