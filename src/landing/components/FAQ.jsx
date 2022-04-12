import { Collapse } from "react-bootstrap";
import React from "react";
import "./FAQ.scss";

const FAQ = () => {
  const faqs = [
    {
      q: "How do I apply for the job?",
      a: "You can just fill the above form and our HR will get back to you with more details.",
    },
    {
      q: "How much salary will I receive?",
      a: "Tror offers a very good pay as per the industry standards depending on your skills, experience and prior work history.",
    },
    {
      q: "Does the company provide incentives and bonus?",
      a: "Tror offers high incentives and bonuses as per your performance.",
    },
    {
      q: "Can I work remotely?",
      a: "Yes, you can work remotely for various remote positions.",
    },
    {
      q: "Will I work in day shift or night shift?",
      a: "You get both the opportunities with Tror and you can choose the shift as per your flexibility.",
    },
  ];

  const [open, setOpen] = React.useState(0);
  const toggle = (i) => {
    if (open == i) {
      return setOpen(null);
    }
    setOpen(i);
  };

  return (
    <div className="faq">
      <section class="faq-section py-5">
        <div class="container">
          <div class="row">
            <div className="col-md-5">
              <div className="faq-left">
                <h1>Frequently Asked Questions</h1>
                <p>If you’re looking for some information, but can’t find it here, please <span><a href="https://tror.ai/contactus"> contact us.</a></span></p>
              </div>
            </div>
            <div class="col-md-7">
              <div class="faq" id="accordion">
                {faqs.map((faq, index) => (
                  <div class="card">
                    <div class="card-header" id="faqHeading-1">
                      <div class="mb-0" onClick={() => toggle(index)}>
                        <h5
                          class="faq-title"
                          data-toggle="collapse"
                          data-target="#faqCollapse-1"
                          data-aria-expanded="true"
                          data-aria-controls="faqCollapse-1"
                        >
                          <span class="badge"> {open == index ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}</span>
                          {faq.q}
                        </h5>
                      </div>
                    </div>
                    <Collapse
                      in={open === index}
                    // style={{
                    //   display: open === index ? "block" : "none",
                    //   transition: "all 2s ease-in-out;",
                    // }}
                    >
                      <div class="card-body">
                        <p style={{ textAlign: "left", color: '#fff' }}>{faq.a} </p>
                      </div>
                    </ Collapse>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center">
        <a
          className="btn btn-primary"
          href="#form"
          style={{
            marginBottom: "30px",
            padding: "8px 30px",
            fontSize: "20px",
            fontWeight: "600",
            borderRadius: "100px",
            color: '#fff',
            backgroundColor: '#fca434',
            border: 'none'
          }}
        >
          Get a Job
        </a>
      </div>
    </div>
  );
};

export default FAQ;
