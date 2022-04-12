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
import axios from "axios";
const LandingPage = () => {
  const [message, setMessage] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    file: "",
  });
  const HandelOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const HandelOnFileChange = (e) => {
    setData({ ...data, file: e.target.files[0] });
  };
  const sendEmail = (e) => {
    e.preventDefault()
    setBtnDisable(true)
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("message", data.message);
    formData.append("file", data.file);
    axios
      .post(
        "https://backend.tror.ai/api/contact",
        formData
      )
      .then((res) => {
        setBtnDisable(false)
        setMessage("Thank you for your submission. We will get back to you soon.");
        console.log(res.data);
        setData({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
          file: "",
        });
      })
      .catch((err) => {
        console.log(err);
        setData({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
          file: "",
        });
      });


  };



  return (
    <div className="landing-page">
      <Navbar />
      <div className="container-fluid " >

        <div className="row flex-row-reverse">

          <div className="col-xxl-4 col-xl-4 col-md-4 form-section" >
            <div className="landing-form mb-4" id="form">
              <h2 className="mt-3">Get a Job</h2>
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
                    onChange={HandelOnChange}
                    value={data.name}
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
                    onChange={HandelOnChange}
                    value={data.email}
                  />
                </div>
                <div className="mb-3">
                  <input
                    required
                    name="phoneNumber"
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Enter Your Phone Number"
                    disabled={btnDisable}
                    onChange={HandelOnChange}
                    value={data.phoneNumber}
                  />
                </div>
                <div class="mb-3">
                  <textarea
                    placeholder="Your Message"
                    class="form-control"
                    rows="1"
                    name="message"
                    onChange={HandelOnChange}
                    value={data.message}
                  ></textarea>
                </div>

                <div class="mb-3">
                  <label for="resume" class="form-label">
                    Upload your resume
                  </label>
                  <input
                    class="form-control"
                    accept=".docx,.pdf,.docs"
                    type="file"
                    id="resume"
                    name="file"
                    multiple
                    onChange={HandelOnFileChange}
                  />
                </div>

                <div class="d-grid mt-3">
                  <input
                    type="submit"
                    value="Get a Job"
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
                  <h1>Get The Best Job Opportunities.</h1>
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
                              fill="#fff"
                            ></path>
                          </svg>
                        </div>
                        Competitive Salaries
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
                              fill="#fff"
                            ></path>
                          </svg>
                        </div>
                        Flexible Timezone
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
                              fill="#fff"
                            ></path>
                          </svg>
                        </div>
                        Career growth
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
                              fill="#fff"
                            ></path>
                          </svg>
                        </div>
                        Job security
                      </div>
                    </div>


                  </div>
                  <p className="mt-3">
                    Tror is built around the idea that employees should be able to do what they love. We have a very frank and open work culture where every member is free to express views and ideas. We work more like a family than a team. The work process is such that you can learn, earn and grow to your highest potential. If you are looking for a good job opportunity to make a better and flourishing career, reach out to us now!
                  </p>

                  {/* <h4>Reasons to Hire Resources from Tror</h4> */}


                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="technology">
                  <div class="container">
                    <div class="row justify-content-center">
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
                        <span style={{ color: "#DD4B25" }}><i class="fa-brands fa-html5" style={{ height: '25px' }}></i></span>
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
                <div className="test ">

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
                              Tror is an amazing place to work. The culture is transparent and energetic, every employee, irrespective of their position is given a chance to be heard, and there are tremendous opportunities available for those who want to build a fast growing career.
                            </p>
                            <i class="fa-solid fa-circle-check" style={{ marginRight: '10px', color: '#fff' }}></i>
                            <h6>Nik Watt</h6>

                          </div>

                        </div>
                      </div>
                      <div class="col-lg-6 col-sm-6">
                        <div className="element">

                          <div className="tet">
                            <p>
                              Its been about three years working at Tror and it has really been a very enriching experience. Peers at Tror are extremely encouraging, talented and like a big family who are always around to support you at times of need.
                            </p>
                            <i class="fa-solid fa-circle-check" style={{ marginRight: '10px', color: '#fff' }}></i>
                            <h6>Ajay Mehta</h6>

                          </div>

                        </div>
                      </div>
                      <div class="col-lg-6 col-sm-6">
                        <div className="element">

                          <div className="tet">
                            <p>
                              It's been a great time to join Tror as the company provides new opportunities of learning and improving skill sets. With a very rich and diverse work culture, Tror endowed me with the best-in-class industry mentors. Also the pay is great and it increases with your performance and experience.
                            </p>
                            <i class="fa-solid fa-circle-check" style={{ marginRight: '10px', color: '#fff' }}></i>
                            <h6>Manda Suman</h6>

                          </div>

                        </div>
                      </div>
                      <div class="col-lg-6 col-sm-6">
                        <div className="element">

                          <div className="tet">
                            <p>
                              I had been entrusted with opportunities and responsibilities early on, helping me accelerate my growth and development. The work culture of the company is very nurturing. The communication channels are open and frank.
                            </p>
                            <i class="fa-solid fa-circle-check" style={{ marginRight: '10px', color: '#fff' }}></i>
                            <h6>Nain Dhawan</h6>

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
