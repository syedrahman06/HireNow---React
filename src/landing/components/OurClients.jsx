import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./OurClients.scss"
import imageGroup1 from "../Assets/logogroup-11.jpg";
import imageGroup2 from "../Assets/logogroup-22.jpg";
import imageGroup3 from "../Assets/logogroup-33.jpg";
const OurClients = () => {
  return (
    <div className="ourClients py-5">
      <div className="container">
        <div className="ourClientsSlider">
          <h4>Our Clients</h4>
          <p>Here is the list of our valuable clients who take regular resources from us.</p>
          <Carousel variant="light" className="landing-carousel">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imageGroup1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imageGroup2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imageGroup3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
