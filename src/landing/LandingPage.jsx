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
      <div className="container-fluid " style={{ position: 'relative', backgroundImage: 'linear-gradient(#0f408f,#000)', margin: '0 !important', padding: '40px 30px' }}>

        <div className="row flex-row-reverse">

          <div className="col-md-5 form-section" >
            <div className="landing-form mb-4" id="form">
              <h2 className="mt-3">Hire a Developer</h2>
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
                <p
                  className="mb-1"
                  style={{
                    textAlign: "left",
                    color: "#0D6EFD",
                    fontWeight: "600",
                  }}
                >
                  Duration of resources
                </p>
                <div class="form-check form-check-inline">
                  <input
                    required
                    class="form-check-input"
                    type="radio"
                    name="duration"
                    value="less than 6 months"
                    disabled={btnDisable}
                  />
                  <label class="form-check-label duration-radio">
                    less than 6 months
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    required
                    class="form-check-input"
                    type="radio"
                    name="duration"
                    value="6-12 months"
                    disabled={btnDisable}
                  />
                  <label class="form-check-label duration-radio">
                    6-12 months
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    required
                    class="form-check-input"
                    type="radio"
                    name="duration"
                    value="more than 1 year"
                    disabled={btnDisable}
                  />
                  <label class="form-check-label duration-radio">
                    more than 1 year
                  </label>
                </div>
                <p
                  className="mb-1 mt-2"
                  style={{
                    textAlign: "left",
                    color: "#0D6EFD",
                    fontWeight: "600",
                  }}
                >
                  Work location
                </p>
                <div class="form-check form-check-inline">
                  <input
                    required
                    class="form-check-input"
                    type="radio"
                    name="workLocation"
                    value="remote"
                    disabled={btnDisable}
                  />
                  <label class="form-check-label duration-radio">remote</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    required
                    class="form-check-input"
                    type="radio"
                    name="workLocation"
                    value="Onsite"
                    disabled={btnDisable}
                  />
                  <label class="form-check-label duration-radio">Onsite</label>
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

          <div className="col-md-7">
            <div className="intro">
              <h1>Hire the Best Remote Talents</h1>
              <p className="mt-3">
                Tror helps you understand the expertise of the resources before you hire IT freelancers. Our process workflow ensures smooth communication and successful dedicated engagement which will lead to better and faster results. We have a team of highly experienced and world class professionals who can take your business to the next level. If you are looking to hire dedicated resources to improve the performance of your team, other IT consulting staff. Reach out to us now!
              </p>

              <h4>Reasons to Hire Resources from Tror</h4>
              <div className="row">
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
                          fill="#0D6EFD"
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
                          fill="#0D6EFD"
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
                          fill="#0D6EFD"
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
                          fill="#0D6EFD"
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
                          fill="#0D6EFD"
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
                          fill="#0D6EFD"
                        ></path>
                      </svg>
                    </div>
                    Cost Effective
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="custom-shape-divider-bottom-1648465493">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"></path>
          </svg>
        </div>
      </div>

      <Technology />
      <WhyChooseTror />
      <OurClients />
      <Testimonials />
      <FAQ />
      <Footer />
    </div >
  );
};

export default LandingPage;
