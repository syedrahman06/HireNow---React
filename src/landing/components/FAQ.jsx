import { Collapse } from "react-bootstrap";
import React from "react";
import "./FAQ.scss";

const FAQ = () => {
  const faqs = [
    {
      q: "How do I hire a good resource ?",
      a: "Hiring a good developer takes efforts, time and experience of works on both an operational and managerial level. Knowing what you are looking for when it comes to technical skills is a plus as well as knowing how to test their skills. We can take care of all these aspects while you can continue your grow your business.",
    },
    {
      q: "How much does it cost to hire a resource?",
      a: "The cost to hire a resource depends on your location. In the United States, a developer’s salary can be anywhere from $60,000 to $175,000 depending on their skills, experience and prior work history.",
    },
    {
      q: "How do remote resources work?",
      a: "Remote resources work in the comfort of their homes by leveraging technologies such as Zoom, Skype and Slack to communicate with the rest of their team. Much of the workflow is remote, such as pushing projects onto GitHub or Bitbucket and they can manage their tasks using products such as Trello and Jira.",
    },
    {
      q: "Where can I find remote resources?",
      a: "You can just fill the above form and we will take care of all your needs.",
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
            padding: "15px 50px",
            fontSize: "20px",
            fontWeight: "600",
            borderRadius: "100px",
            color: '#fff',
            backgroundColor: '#fca434',
            border: 'none'
          }}
        >
          Hire Now
        </a>
      </div>
    </div>
  );
};

export default FAQ;
