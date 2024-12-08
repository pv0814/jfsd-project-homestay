// src/pages/Home.js
/*import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Home.css'; // Include CSS for styling

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="home-container">
      <h1 className="home-heading">Stay & Explore</h1>
      <div className="button-container">
        <button
          className="home-button"
          onClick={() => navigate('/login')} // Use navigate for redirect
        >
          Login
        </button>
        <button
          className="home-button"
          onClick={() => navigate('/register')} // Use navigate for redirect
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Home; */


// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import './Home.css';
import PropertyCard from '../components/PropertyCard';



// Import the image from the photos folder
import coimbatoreImage from '../Photos/coimbatore.jpg';
import goaImage from '../Photos/goa.jpg';
import riaImage from '../Photos/ria.jpg'

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="cards-container">
        <PropertyCard
          location="Coimbatore, India"
          distance="742 kilometres away"
          dates="2–7 Jan"
          price="₹1,836"
          rating="5.0"
          image={coimbatoreImage} // Use the imported image
        />
        <PropertyCard
          location="Mandrem, Goa"
          distance="850 kilometres away"
          dates="10–15 Feb"
          price="₹2,499"
          rating="4.8"
          image={goaImage}
        />
         <PropertyCard
          location="Mandrem, Goa"
          distance="722 kilometres away"
          dates="10–15 Feb"
          price="₹2,499"
          rating="4.8"
          image={riaImage}
        />
      </div>
    </div>
  );
};

export default Home;






