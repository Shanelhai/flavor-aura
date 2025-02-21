import React from "react";
import './About.css';
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
    <div className="about-container">
    <div className="aboutus">
    <h1 className="about-heading">About Us</h1>
      <p>
        Welcome to [Flavor Aura], where great food and a welcoming atmosphere come together.
        Located in the heart of [Haldwani/Rampur Road ], we offer a unique blend of [Indian] flavors
        using fresh, locally sourced ingredients, ensuring every experience is memorable.
      </p>
    </div>

      <div className="about-story">
      <h1>Our Story</h1>
      <p>
        Founded in [2025], [Flavor Aura] was born from a simple idea: to create a place where people
        can gather, enjoy delicious food, and share lasting memories. Under the guidance of our head chef,
        [Chef’s Pawan Singh], we combine traditional methods with innovative techniques to craft every dish with care
        and precision.
      </p>
      </div>
      <div className="about-commitment">
      <h1>Our Commitment</h1>
      <p>
        Quality is at the heart of everything we do. We work closely with local farms and suppliers to bring
        you the finest produce, meats, and seafood. Our menu also includes a variety of options for different
        dietary preferences, including vegetarian, gluten-free, and vegan dishes, ensuring everyone has something
        special to enjoy.
      </p>
      </div>
     <div className="about-ordering">
     <h1>In-Home Cafe Booking & Chef Service</h1>
      <p>
        Enjoy a cafe experience at home with our personal chef service. We bring gourmet meals directly to you, cooking your favorite dishes on-site for any occasion. Book now and let us create a memorable dining experience in the comfort of your home!
      </p>
      <h1>online ordering food system</h1>
      <p>
        In addition, we are pleased to offer online ordering so you can enjoy our delicious dishes from the comfort of your home. With just a few clicks, you can savor our gourmet meals delivered straight to your door, without compromising on quality or taste.
      </p>
     </div>
      <div className="about-join">
      <h1>Join Us</h1>
      <p>
        Dining with us is more than just a meal—it’s an experience. Whether you're celebrating a special occasion
        or simply enjoying a night out, we are honored to be part of your journey. We look forward to welcoming you
        soon and creating a memorable dining experience that you'll cherish.
      </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
