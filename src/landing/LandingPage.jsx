import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./LandingPage.scss";
import "bootstrap/dist/css/bootstrap.css";
import WhyChooseTror from "./components/WhyChooseTror";
import OurClients from "./components/OurClients";
import Technology from "./components/Technology";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import emailjs from "emailjs-com";
import Carousel from "react-bootstrap/Carousel";
import ai from "./Assets/ai.webp"

const LandingPage = () => {
  const [message, setMessage] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);
  console.log(message);

  const sendEmail = (e) => {
    e.preventDefault();
    setBtnDisable(true)
    console.log("in the email section");
    emailjs
      .sendForm(
        "service_hydpoft",
        "template_2oj12x6",
        e.target,
        "cw7I4ClVW9nCMAq_q"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Thank you for your submission. We will get back to you soon.");
          setBtnDisable(false)
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setBtnDisable(false)
          e.target.reset();
        }
      );

  };

  return (
    <div className="landing-page">
      <Navbar />
      <div className="container-fluid " style={{}}>

        <div className="row flex-row-reverse">

          <div className="col-md-4 form-section" >
            <div className="landing-form mb-4" id="form">
              <h2 className="mt-3">Hire a Talent</h2>
              <form onSubmit={sendEmail}>
                {/* <p>Guaranteed response within one business day!</p> */}
                {message && (
                  <div className="alert alert-success" role="alert">
                    {message}
                  </div>
                )}
                <div className="mb-3">
                  <input
                    required
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name"
                    disabled={btnDisable}
                  />
                </div>
                <div className="mb-3">
                  <input
                    required
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                    disabled={btnDisable}
                  />
                </div>
                <div className="mb-3">
                  <input
                    required
                    name="phone"
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Enter Your Phone Number"
                    disabled={btnDisable}
                  />
                </div>
                <div className="mb-3">
                  <input
                    name="company"
                    type="text"
                    className="form-control"
                    placeholder="Company Name"
                    disabled={btnDisable}
                  />
                </div>
                <div className="mb-3">
                  <input
                    name="resources"
                    type="text"
                    className="form-control"
                    placeholder="Resources you want to hire"
                    disabled={btnDisable}
                  />
                </div>



                <div class="d-grid mt-3">
                  <input
                    type="submit"
                    value="Hire Now"
                    className="btn btn-primary"
                    disabled={btnDisable}

                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-8">
            <Carousel variant="dark" className="landing-carousel">
              <Carousel.Item>

                <div className="intro">
                  <h1>Hire the Best Talents</h1>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="bullet-reason my-2">
                        <div className="icon" style={{ color: '#fff' }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8.503"
                            height="14.43"

                            viewBox="0 0 8.503 14.43"
                          >
                            <path
                              d="M.377 2.211l5.01 5.01-5.01 5.01a1.288 1.288 0 101.821 1.821L8.12 8.125a1.286 1.286 0 000-1.821L2.198.377a1.286 1.286 0 00-1.821 0 1.314 1.314 0 000 1.834z"
                              fill="#000"
                            ></path>
                          </svg>
                        </div>
                        Dedicated Resources
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bullet-reason my-2">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8.503"
                            height="14.43"
                            viewBox="0 0 8.503 14.43"
                          >
                            <path
                              d="M.377 2.211l5.01 5.01-5.01 5.01a1.288 1.288 0 101.821 1.821L8.12 8.125a1.286 1.286 0 000-1.821L2.198.377a1.286 1.286 0 00-1.821 0 1.314 1.314 0 000 1.834z"
                              fill="#000"
                            ></path>
                          </svg>
                        </div>
                        Verified Skills
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bullet-reason my-2">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8.503"
                            height="14.43"
                            viewBox="0 0 8.503 14.43"
                          >
                            <path
                              d="M.377 2.211l5.01 5.01-5.01 5.01a1.288 1.288 0 101.821 1.821L8.12 8.125a1.286 1.286 0 000-1.821L2.198.377a1.286 1.286 0 00-1.821 0 1.314 1.314 0 000 1.834z"
                              fill="#000"
                            ></path>
                          </svg>
                        </div>
                        Experienced Professionals
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bullet-reason my-2">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8.503"
                            height="14.43"
                            viewBox="0 0 8.503 14.43"
                          >
                            <path
                              d="M.377 2.211l5.01 5.01-5.01 5.01a1.288 1.288 0 101.821 1.821L8.12 8.125a1.286 1.286 0 000-1.821L2.198.377a1.286 1.286 0 00-1.821 0 1.314 1.314 0 000 1.834z"
                              fill="#000"
                            ></path>
                          </svg>
                        </div>
                        Direct Communication
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bullet-reason my-2">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8.503"
                            height="14.43"
                            viewBox="0 0 8.503 14.43"
                          >
                            <path
                              d="M.377 2.211l5.01 5.01-5.01 5.01a1.288 1.288 0 101.821 1.821L8.12 8.125a1.286 1.286 0 000-1.821L2.198.377a1.286 1.286 0 00-1.821 0 1.314 1.314 0 000 1.834z"
                              fill="#000"
                            ></path>
                          </svg>
                        </div>
                        Work In Your Timezone
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bullet-reason my-2">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8.503"
                            height="14.43"
                            viewBox="0 0 8.503 14.43"
                          >
                            <path
                              d="M.377 2.211l5.01 5.01-5.01 5.01a1.288 1.288 0 101.821 1.821L8.12 8.125a1.286 1.286 0 000-1.821L2.198.377a1.286 1.286 0 00-1.821 0 1.314 1.314 0 000 1.834z"
                              fill="#000"
                            ></path>
                          </svg>
                        </div>
                        Cost Effective
                      </div>
                    </div>
                  </div>
                  <p className="mt-3">
                    Tror helps you understand the expertise of the resources before you hire IT freelancers. Our process workflow ensures smooth communication and successful dedicated engagement which will lead to better and faster results. We have a team of highly experienced and world class professionals who can take your business to the next level. If you are looking to hire dedicated resources to improve the performance of your team, other IT consulting staff. Reach out to us now!
                  </p>

                  {/* <h4>Reasons to Hire Resources from Tror</h4> */}


                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="technology py-5">
                  <div class="container">
                    <div class="row justify-content-center text-center">
                      <div class="col-md-10 col-lg-8">
                        <div class="header-section">
                          <h2 class="title">Technology we cover</h2>
                          {/* <p class="description">
                            We cover a wide range of technologies to meet your diverse needs and demands.
                          </p> */}
                        </div>
                      </div>
                    </div>
                    <div className="technology-list">
                      <div className="technology-items">
                        <img src={ai} alt="" />
                        <div>AI</div>
                      </div>
                      <div className="technology-items">
                        <span style={{ color: "#DD4B25" }}><i class="fa-brands fa-html5" style={{ height: '25px' }}></i></span>
                        <div>HTML</div>
                      </div>
                      <div className="technology-items">
                        <span style={{ color: "#2965F1" }}><i class="fa-brands fa-css3-alt"></i></span>
                        <div>CSS</div>
                      </div>
                      <div className="technology-items">
                        <span style={{ color: "#207196" }}><i class="fa-brands fa-wordpress"></i></span>
                        <div>Wordpress</div>
                      </div>

                      <div className="technology-items">
                        <span style={{ color: "#5ED3F3" }}><i class="fa-brands fa-react"></i></span>
                        <div>React.js</div>
                      </div>
                      <div className="technology-items">
                        <span style={{ color: "#87BF00" }}><i class="fa-brands fa-node-js"></i></span>
                        <div>NodeJs</div>
                      </div>
                      <div className="technology-items">
                        <span style={{ color: "black" }}><i class="fa-brands fa-aws"></i></span>
                        <div>AWS</div>
                      </div>
                      <div className="technology-items">
                        <span style={{ color: "#3674AB" }}><i class="fa-brands fa-python"></i></span>
                        <div>Python</div>
                      </div>
                      <div className="technology-items">
                        <span style={{ color: "#F72C1F" }}><i class="fa-brands fa-laravel"></i></span>
                        <div>PHP/Larvel</div>
                      </div>
                      <div className="technology-items">
                        <span style={{ color: "#D82D2F" }}><i class="fa-brands fa-angular"></i></span>
                        <div>Angular</div>
                      </div>
                      <div className="technology-items">
                        <span style={{ color: "#EFD81D" }}><i class="fa-brands fa-js"></i></span>
                        <div>JavaScript</div>
                      </div>
                      <div className="technology-items">
                        <span style={{ color: "#858EBB" }}><i class="fa-brands fa-php"></i></span>
                        <div>PHP</div>
                      </div>
                      <div className="technology-items">
                        <span style={{ color: "#3BD480" }}><i class="fa-brands fa-android"></i></span>
                        <div>Android</div>
                      </div>
                      <div className="technology-items">
                        <span style={{ color: "#95BF47" }}><i class="fa-brands fa-shopify"></i></span>
                        <div>Shopify</div>
                      </div>
                      <div className="technology-items">
                        <span style={{ color: "skyblue" }}><i class="fa-solid fa-cloud"></i></span>
                        <div>Cloud </div>
                      </div>
                      <div className="technology-items">
                        <span style={{ color: "black" }}><i class="fa-brands fa-java"></i></span>
                        <div>Java</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="whychoosetror ">

                  <div className="container py-5">

                    <div className="row g-3">
                      <div class="section-head col-sm-12">
                        <h4>
                          <span>Why Choose</span> Tror?
                        </h4>
                        <p>
                          Tror offers high level and satisfactory resources in an affordable cost.
                        </p>
                      </div>

                      <div className="col-lg-4 col-sm-6 ">
                        <div className="part">


                          <i class="fa-solid fa-user" style={{ marginRight: '10px' }}></i>
                          <h6>Dedicated Resources </h6>
                          <p>
                            We provide 100% dedicated resources for faster and better results.
                          </p>

                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 ">
                        <div className="part">


                          <i class="fa-solid fa-circle-check" style={{ marginRight: '10px' }}></i>
                          <h6>Verified Skills</h6>
                          <p>
                            All our resources are verified with their skills and certificates.
                          </p>

                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 ">
                        <div className="part">


                          <i class="fa-solid fa-user-plus" style={{ marginRight: '10px' }}></i>
                          <h6>Experienced Professionals</h6>
                          <p>
                            Our professionals are highly experienced who can provide effective solutions.
                          </p>

                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 ">
                        <div className="part">


                          <i class="fa-solid fa-comments" style={{ marginRight: '10px' }}></i>
                          <h6>Direct Communication</h6>
                          <p>
                            We provide direct communication system to yield better results.
                          </p>

                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 ">
                        <div className="part">


                          <i class="fa-solid fa-clock" style={{ marginRight: '10px' }}></i>
                          <h6>Work In Your Timezone</h6>
                          <p>
                            Our resources are available to work with you in your timezone.
                          </p>

                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 ">
                        <div className="part">


                          <i class="fa-solid fa-sack-dollar" style={{ marginRight: '10px' }}></i>
                          <h6>Cost Effective </h6>
                          <p>
                            We provide a cost effecting solution which helps you hire more resources.
                          </p>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="whychoosetror ">

                  <div className="container py-5">

                    <div className="row g-3">
                      <div class="sec-head col-sm-12">
                        <h4>
                          Testimonials
                        </h4>
                        <p>
                          See what our clients say in their own words which will give more confidence
                        </p>
                      </div>

                      <div class="col-lg-6 col-sm-6 ">
                        <div className="element">

                          <div className="tet">
                            <p>
                              Tror has a huge pool of talent. Don’t just settle for someone: find an agency that understands your project and has the competencies you need. I highly recommend Tror for all your resources need.
                            </p>
                            <i class="fa-solid fa-circle-check" style={{ marginRight: '10px' }}></i>
                            <h6>John Peterson </h6>

                          </div>

                        </div>
                      </div>
                      <div class="col-lg-6 col-sm-6">
                        <div className="element">

                          <div className="tet">
                            <p>
                              They understand well and work in the industry to deliver an outcome that will truly stand out. They’ve always delivered solutions that are satisfactory and result oriented.
                            </p>
                            <i class="fa-solid fa-circle-check" style={{ marginRight: '10px' }}></i>
                            <h6>Vijay Arora</h6>

                          </div>

                        </div>
                      </div>
                      <div class="col-lg-6 col-sm-6">
                        <div className="element">

                          <div className="tet">
                            <p>
                              I see Tror as an extension of our team and helping us achieve our success by delivering us with all the required technical resources we need.
                            </p>
                            <i class="fa-solid fa-circle-check" style={{ marginRight: '10px' }}></i>
                            <h6>Marry Bernard</h6>

                          </div>

                        </div>
                      </div>
                      <div class="col-lg-6 col-sm-6">
                        <div className="element">

                          <div className="tet">
                            <p>
                              They have been able to complete all our requirements that we threw at them so far both fast and economically. We have been completely satisfied with the quality of their resources and developers in that regard.
                            </p>
                            <i class="fa-solid fa-circle-check" style={{ marginRight: '10px' }}></i>
                            <h6>Sam Patel</h6>

                          </div>

                        </div>
                      </div>



                    </div>
                  </div>
                </div>
              </Carousel.Item>

            </Carousel>


          </div>
        </div>

      </div>
      <div className="logos"></div>

      {/* <Technology />
      <WhyChooseTror />
      <OurClients />
      <Testimonials /> */}
      <FAQ />
      <Footer />
    </div >
  );
};

export default LandingPage;
