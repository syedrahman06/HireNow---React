import React from "react";
import "./Testimonials.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },

    ]
  };
  return (
    <div className="container-fluid py-5" style={{ position: 'relative', backgroundImage: 'linear-gradient(#0f408f,#000)', margin: '0 !important', padding: '40px 30px' }}>
      <h1 className="text-center mb-3" style={{ color: "#fff", fontWeight: "600" }}>Testimonials</h1>
      <p className="text-center mb-4" style={{ color: "#cacaca" }}>See what our clients say in their own words which will give more confidence.</p>
      <div className="row">
        <div className="col-md-12">
          <Slider {...settings}>
            <div className="testimonial">
              <p className="description">
                Tror has a huge pool of talent. Don’t just settle for someone: find an agency that understands your project and has the competencies you need. I highly recommend Tror for all your resources need.
              </p>
              <h3 className="title">John Peterson</h3>
            </div>

            <div className="testimonial">
              <p className="description">
                They understand well and work in the industry to deliver an outcome that will truly stand out. They’ve always delivered solutions that are satisfactory and result oriented.
              </p>
              <h3 className="title">Vijay Arora</h3>
            </div>

            <div className="testimonial">
              <p className="description">
                I see Tror as an extension of our team and helping us achieve our success by delivering us with all the required technical resources we need.
              </p>
              <h3 className="title">Marry Bernard</h3>
            </div>
            <div className="testimonial">
              <p className="description">
                They have been able to complete all our requirements that we threw at them so far both fast and economically. We have been completely satisfied with the quality of their resources and developers in that regard.
              </p>
              <h3 className="title">Sam Patel</h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>);
};

export default Testimonials;
