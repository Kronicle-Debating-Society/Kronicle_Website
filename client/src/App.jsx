import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Members from './Components/Members';
import Events from './Components/Events';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Profile from './pages/profile';
import EditProfile from "./pages/EditProfile";
import './App.css';


function App() {
  const location = useLocation();

  // routes where the footer should not be displayed
  const noFooterRoutes = ["/login", "/signup","/edit-profile"];

  console.log("App component rendered");

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Members" element={<Members />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Resetpassword" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />

      </Routes>
      {!noFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
