import React from "react";
import "./Technology.scss";
import image1 from "../Assets/ml.jpg";
import image2 from "../Assets/nlp.jpg";
import image3 from "../Assets/cv.jpg";
import image4 from "../Assets/pa.jpeg";
import image5 from "../Assets/wa.jpeg";
import image6 from "../Assets/devops.jpg";
import image7 from "../Assets/cm.jpeg";
import image8 from "../Assets/bd.jpeg";
import ai from "../Assets/ai.webp";

const Technology = () => {
  return (
    <div className="technology py-5">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-md-10 col-lg-8">
            <div class="header-section">
              <h2 class="title">Technology we cover</h2>
              <p class="description">
              We cover a wide range of technologies to meet your diverse needs and demands.
              </p>
            </div>
          </div>
        </div>
        <div className="technology-list">
          <div className="technology-items">
            <img src={ai} alt="" />
            <div>AI</div>
          </div>
          <div className="technology-items">
            <span style={{color: "#DD4B25"}}><i class="fa-brands fa-html5"></i></span>
            <div>HTML</div>
          </div>
          <div className="technology-items">
            <span style={{color: "#2965F1"}}><i class="fa-brands fa-css3-alt"></i></span>
            <div>CSS</div>
          </div>
          <div className="technology-items">
            <span style={{color: "#207196"}}><i class="fa-brands fa-wordpress"></i></span>
            <div>Wordpress</div>
          </div>

          <div className="technology-items">
            <span style={{color: "#5ED3F3"}}><i class="fa-brands fa-react"></i></span>
            <div>React.js</div>
          </div>
          <div className="technology-items">
            <span style={{color: "#87BF00"}}><i class="fa-brands fa-node-js"></i></span>
            <div>NodeJs</div>
          </div>
          <div className="technology-items">
            <span style={{color: "black"}}><i class="fa-brands fa-aws"></i></span>
            <div>AWS</div>
          </div>
          <div className="technology-items">
            <span style={{color: "#3674AB"}}><i class="fa-brands fa-python"></i></span>
            <div>Python</div>
          </div>
          <div className="technology-items">
            <span style={{color: "#F72C1F"}}><i class="fa-brands fa-laravel"></i></span>
            <div>PHP/Larvel</div>
          </div>
          <div className="technology-items">
            <span style={{color: "#D82D2F"}}><i class="fa-brands fa-angular"></i></span>
            <div>Angular</div>
          </div>
          <div className="technology-items">
            <span style={{color: "#EFD81D"}}><i class="fa-brands fa-js"></i></span>
            <div>JavaScript</div>
          </div>
          <div className="technology-items">
            <span style={{color: "#858EBB"}}><i class="fa-brands fa-php"></i></span>
            <div>PHP</div>
          </div>
          <div className="technology-items">
            <span style={{color: "#3BD480"}}><i class="fa-brands fa-android"></i></span>
            <div>Android</div>
          </div>
          <div className="technology-items">
            <span style={{color: "#95BF47"}}><i class="fa-brands fa-shopify"></i></span>
            <div>Shopify</div>
          </div>
          <div className="technology-items">
            <span style={{color: "skyblue"}}><i class="fa-solid fa-cloud"></i></span>
            <div>Cloud </div>
          </div>
          <div className="technology-items">
            <span style={{color: "black"}}><i class="fa-brands fa-java"></i></span>
            <div>Java</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
