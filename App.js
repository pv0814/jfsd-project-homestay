// src/App.js
/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import HostDashboard from './pages/HostDashboard';
import GuideDashboard from './pages/GuideDashboard';
import TouristDashboard from './pages/TouristDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ManageHomestays from './pages/ManageHomestays'; // Page for managing homestays
import ManageUsers from './pages/ManageUsers'; // Page for managing users
import ManageAttractions from './pages/ManageAttractions'; // Page for managing attractions
import Logout from './pages/Logout'; // Logout functionality
import Reviews from './pages/ManageReviews'; // Page for handling reviews
import TourismInsights from './pages/TourismInsights'; // Page for tourism insights
import Recommendations from './pages/Recommendations'; // Page for recommendations

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/host" element={<HostDashboard />} />
        <Route path="/guide" element={<GuideDashboard />} />
        <Route path="/tourist" element={<TouristDashboard />} />
        <Route path="/manage-homestays" element={<ManageHomestays />} /> {/* Manage Homestays }*/
        /*<Route path="/manage-users" element={<ManageUsers />} /> {/* Manage Users }*/
        /*<Route path="/manage-attractions" element={<ManageAttractions />} /> {/* Manage Attractions }*/
        /*<Route path="/logout" element={<Logout />} /> {/* Logout Page }*/
        /*<Route path="/reviews" element={<Reviews />} /> {/* Reviews Management }*/
        /*<Route path="/tourisminsights" element={<TourismInsights />} /> {/* Tourism Insights }*/
        /*<Route path="/recommendations" element={<Recommendations />} /> {/* Recommendations }
      </Routes>
    </Router>
  );
};

export default App;
*/





import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import AdminDashboard from './pages/AdminDashboard';
import GuideDashboard from './pages/GuideDashboard';
import TouristDashboard from './pages/TouristDashboard';
import HostDashboard from './pages/HostDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ManageHomestays from './pages/ManageHomestays';
import ManageUsers from './pages/ManageUsers';
import ManageAttractions from './pages/ManageAttractions';
import Logout from './pages/Logout';
import Reviews from './pages/ManageReviews';
import TourismInsights from './pages/TourismInsights';
import Homestays from './pages/Homestays';
import Feedback from './pages/Feedback';
import ExploreAttractions from './pages/ExploreAttractions';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/manage-homestays" element={<ManageHomestays />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/manage-attractions" element={<ManageAttractions />} />
        <Route path="/reviews" element={<Reviews />} />

        {/* Guide Routes */}
        <Route path="/guide" element={<GuideDashboard />} />
        <Route path="/tourism-insights" element={<TourismInsights />} />

        {/* Tourist Routes */}
        <Route path="/tourist" element={<TouristDashboard />} />

        <Route path="/homestays" element={<Homestays />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/explore-attractions" element={<ExploreAttractions/>}/>
        
      

        {/* Host Routes */}
        <Route path="/host" element={<HostDashboard />} />

        {/* Authentication and Logout */}
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
