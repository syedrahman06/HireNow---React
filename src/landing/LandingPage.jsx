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
import logo1 from "./Assets/logogroup-11.jpg"

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
      <div className="container-fluid " >

        <div className="row flex-row-reverse">

          <div className="col-xxl-4 col-xl-4 col-md-4 form-section" >
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
          <div className="col-xxl-8 col-xl-8 col-md-8">
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
                <div className="technology">
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

                  <div className="container">

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





      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src="https://ibisworldwide.com/wp-content/uploads/2018/05/010518-toyota-connected.jpg" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://boomi.com/wp-content/uploads/deloitte-logo.png" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://mma.prnewswire.com/media/1373438/cognizant_Logo.jpg?p=facebook" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202106/tcs_logo_1200_020621101143.jpg?size=1200:675" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://logos-world.net/wp-content/uploads/2020/11/Fox-News-Channel-Emblem.png" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://www.astroart-store.com/tuotekuvat/1500x1500/hp-logo-vector-download.jpg" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://www.india.com/wp-content/uploads/2016/10/hcl.jpg" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://mms.businesswire.com/media/20211007005785/en/761229/23/Optum%28R%29_RGB.jpg" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://1000logos.net/wp-content/uploads/2021/10/Macmillan-Publishers-Logo.jpg" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://assets.teradata.com/Tcom/Images/Rebrand/Teradata_logo-two_color.png" height="100" width="100" alt="" />
          </div>

          <div className="slide">
            <img src="https://thumbs.dreamstime.com/b/amazon-company-vector-editable-logo-white-background-ready-to-print-182823873.jpg" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://www.chevron.com/-/media/shared-media/images/chevron-hallmark-twitter.jpg" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://www.matrics360.com/wp-content/uploads/2015/05/Dropbox.png" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://images.squarespace-cdn.com/content/v1/541aee5ce4b03814779ba114/1470777212495-4SUEG83BNLQ4J57Y2Z2G/image-asset.png" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Ford_Motor_Company_Logo.svg/2560px-Ford_Motor_Company_Logo.svg.png" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/1200px-Disney%2B_logo.svg.png" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://mms.businesswire.com/media/20220329006094/en/1019646/23/T-Mobile_New_Logo.jpg" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://www.americancentury.com/content/dam/ac/images/blog/aci-twitter.png" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://www.ttrweekly.com/site/wp-content/uploads/2019/11/avis-budget.jpeg" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://www.drugwatch.com/wp-content/uploads/johnson-johnson-logo.png" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://www.mulesoft.com/sites/default/files/2018-10/wells_fargo.png" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://www.stocktargetadvisor.com/blog/wp-content/uploads/2021/02/Intuit_2016_RGB_1.jpg" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://i1.wp.com/www.cordcuttersnews.com/wp-content/uploads/2019/09/ATT-logo.png?ssl=1" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://lender-logo.s3.amazonaws.com/banks/112837/aa3UNxv7ADKPQLBybtMogv5IUJmgIYsJdTjTbWK9.png" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://pngimage.net/wp-content/uploads/2018/06/travelers-insurance-logo-png-1.png" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://pictures.dealer.com/l/lithiagroupsite/0632/6f6e4c0f357c0fe67416990a5e64dcabx.jpg" height="100" width="100" alt="" />
          </div>
          <div className="slide">
            <img src="https://coretek.co.uk/wp-content/uploads/microsoft-80658_960_720.png" height="100" width="100" alt="" />
          </div>

        </div>
      </div>




      {/* <Technology /> */}
      < WhyChooseTror />
      {/* <OurClients /> */}
      {/* <Testimonials /> */}
      <FAQ />
      <Footer />
    </div >
  );
};

export default LandingPage;
