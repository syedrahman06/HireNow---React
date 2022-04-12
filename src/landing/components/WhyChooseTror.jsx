import React from "react";
import "./WhyChooseTror.scss";
const WhyChooseTror = () => {
  return (
    <div className="whychoosetror ">

      <div className="container py-5">

        <div className="row g-3">
          <div class="section-head col-sm-12">
            <h4>
              <span>Why Join</span> Tror?
            </h4>
            <p>
              Reasons why you should join Tror as your new career partner.
            </p>
          </div>

          <div className="col-lg-3 col-sm-6 ">
            <div className="part">


              <i class="fa-solid fa-user" style={{ marginRight: '10px', fontSize: '25px', marginBottom: '10px' }}></i>
              <h6>Flexible Timezone </h6>
              <p>
                We provide flexible timezone for working so that you can manage  your time well.
              </p>

            </div>
          </div>

          <div className="col-lg-3 col-sm-6 ">
            <div className="part">


              <i class="fa-solid fa-circle-check" style={{ marginRight: '10px', fontSize: '25px', marginBottom: '10px' }}></i>
              <h6>Competitive Salaries</h6>
              <p>
                Tror offers a very good pay for their employees with regular bonuses and incentives and fast salary hikes.
              </p>

            </div>
          </div>

          <div className="col-lg-3 col-sm-6 ">
            <div className="part">


              <i class="fa-solid fa-user-plus" style={{ marginRight: '10px', fontSize: '25px', marginBottom: '10px' }}></i>
              <h6>Career growth</h6>
              <p>
                Our work culture is so friendly and diverse where you can learn , earn and grow veryfast to the maximum potential.
              </p>

            </div>
          </div>

          <div className="col-lg-3 col-sm-6 ">
            <div className="part">


              <i class="fa-solid fa-comments" style={{ marginRight: '10px', fontSize: '25px', marginBottom: '10px' }}></i>
              <h6>Job security</h6>
              <p>
                Your Job is 100% secured with Tror and you can grow to the highest positions and profiles.
              </p>

            </div>
          </div>




        </div>
      </div>
    </div>
  );
};

export default WhyChooseTror;
