import React, { useState, useEffect } from 'react';
import './Home.css';
import veg from '../Assets/Home/veg.jpg';
import nongveg from '../Assets/Home/nonveg.jpg';
import classicsweets from '../Assets/Home/classicsweets.jpg';
import chines from '../Assets/Home/chines.jpg';
import Homedata from './Homdata';
import Footer from '../Footer/Footer';

const Home = () => {
  // State to manage current index for both text and images
  const [currentIndex, setCurrentIndex] = useState(0);

  // Arrays holding the text and image data
  const titles = ["Fresh Veg Delights", "Tasty Non-Veg", "Classic Sweets", "Delicious Fast Food"];
  const texts = [
    "Enjoy the best vegetarian dishes prepared with fresh ingredients.",
    "Indulge in delicious and mouth-watering non-veg dishes.",
    "Savor the classic sweets made with love and tradition.",
    "Spicy, savory, and irresistible Chinese food awaits you."
  ];
  const images = [veg, nongveg, classicsweets, chines];

  // Function to update the index every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % titles.length);
    }, 4000); // Update every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [titles.length]); // Add titles.length to the dependency array

  return (
    <>
      <div className="home-container">
        <div className="carousel-container">
          <div className="carousel-boxone">
            <h1 className='Home'>{titles[currentIndex]}</h1>
            <p className='Home'>{texts[currentIndex]}</p>
          </div>
          <div className="carousel-boxtwo">
            <img
              className="d-block w-100"
              src={images[currentIndex]}
              alt="carousel"
            />
          </div>
        </div>
        <div className='home-boxone'>
          <h1>About</h1>
          <p>
            Enjoy a unique food experience with delicious vegetarian and non-vegetarian dishes, mouthwatering sweets, and creamy ice creams, all made to order. We bring the best flavors to you, creating memorable moments with every bite, tailored to your preferences and cravings.
          </p>
        </div>
        <div className='home-boxtwo'>
          <h1>Experience Chef</h1>
          <div className="chef-container">
            {Homedata.map((chef) => (
              <div key={chef.id} className="chef-card">
                <img src={chef.image} alt={chef.name} className="chef-image" />
                <div className="chef-info">
                  <h3>{chef.name}</h3>
                  <p>Age: {chef.age}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
