import React from "react";
import "./WhyChooseTror.scss";
const WhyChooseTror = () => {
  return (
    <div className="whychoosetror ">

      <div className="container py-5">

        <div className="row g-3">
          <div class="section-head col-sm-12">
            <h4>
              <span>Why Choose</span> Tror?
            </h4>
            <p>
              Tror offers high level and satisfactory resources in an affordable cost. <br></br> Below is the list of all the points you need to know why you should choose us.
            </p>
          </div>

          <div class="col-lg-4 col-sm-6 ">
            <div class="item h-100">
              {" "}
              <span class="icon feature_box_col_one">
                <i class="fa-solid fa-user"></i>
              </span>
              <h6>Dedicated Resources </h6>
              <p>
                We provide 100% dedicated resources for faster and better results.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item h-100">
              {" "}
              <span class="icon feature_box_col_two">
                <i class="fa-solid fa-circle-check"></i>
              </span>
              <h6>Verified Skills</h6>
              <p>
                All our resources are verified with their skills and certificates.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item h-100">
              {" "}
              <span class="icon feature_box_col_three">
                <i class="fa-solid fa-user-plus"></i>
              </span>
              <h6>Experienced Professionals</h6>
              <p>
                Our professionals are highly experienced who can provide effective solutions.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item h-100">
              {" "}
              <span class="icon feature_box_col_four">
                <i class="fa-solid fa-comments"></i>
              </span>
              <h6>Direct Communication</h6>
              <p>
                We provide direct communication system to yield better and faster results.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item h-100">
              {" "}
              <span class="icon feature_box_col_five">
                <i class="fa-solid fa-clock"></i>
              </span>
              <h6>Work In Your Timezone</h6>
              <p>
                Our resources are available to work with you in your timezone.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item h-100">
              {" "}
              <span class="icon feature_box_col_six">
                <i class="fa-solid fa-sack-dollar"></i>
              </span>
              <h6>Cost Effective</h6>
              <p>
                We provide a cost effecting solution which helps you hire more resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseTror;
