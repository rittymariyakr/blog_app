import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import Auth from './components/Auth';

import ViewBlog from './components/ViewBlog';
import AddBlog from './components/AddBlog';
import MyProfile from './components/MyProfile';
import AdminDash from './pages/AdminDash';
import AdminCategory from './pages/AdminCategory';
import UserDashboard from './pages/UserDashboard';
import { useContext } from 'react';
import { isAuthTokenContext } from './contexts/ContextShare';
import ManageUser from './pages/ManageUser';

function App() {

  const {isAuthToken, setIsAuthToken} = useContext(isAuthTokenContext)

  const token = sessionStorage.getItem("token")
  if(token){
    setIsAuthToken(true)
  }else{
    setIsAuthToken(false)
  }

  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register="register" />} />
        <Route path='/user-dashboard' element={isAuthToken?<UserDashboard />:<Home/>} />
        <Route path='/viewblog/:id' element={isAuthToken?<ViewBlog />:<Home/>} />
        <Route path='/addblog' element={isAuthToken?<AddBlog />:<Home/>} />
        <Route path='/myprofile' element={isAuthToken?<MyProfile />:<Home/>} />
        <Route path='/admin-dashboard' element={isAuthToken?<AdminDash />:<Home/>} />
        <Route path='/admin-category' element={isAuthToken?<AdminCategory />:<Home/>} />
        <Route path='/admin-users' element={isAuthToken?<ManageUser/>:<Home/>} />



      </Routes>
      <Footer />

    </div>
  );
}
export default App;
