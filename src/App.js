import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import Home from './pages/Home';
import Auth from './components/Auth';

function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path='/' element={ <Home/>}/>
        <Route path='/landingpage' element={<LandingPage />} />
      
        <Route path='/login' element={ <Auth/>}/>

      </Routes>
      <Footer/>
     
    </div>
  );
}
export default App;
