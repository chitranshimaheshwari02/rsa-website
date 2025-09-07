import React from "react";
import "./Awareness.scss";

const Awareness = () => {
  return (
    <section className="awareness-section">
      <h1>Legal Awareness</h1>
      <p>
        We believe in spreading awareness about legal rights and responsibilities
        among citizens. Our initiatives focus on empowering individuals and
        communities with knowledge that helps them make informed decisions.
      </p>

      <div className="awareness-cards">
        <div className="card">
          <h3>Workshops</h3>
          <p>
            Interactive workshops conducted for schools, colleges, and rural
            communities to spread legal literacy.
          </p>
        </div>
        <div className="card">
          <h3>Publications</h3>
          <p>
            Simplified guides and legal handbooks distributed to educate
            individuals about their rights.
          </p>
        </div>
        <div className="card">
          <h3>Community Drives</h3>
          <p>
            Awareness drives in remote areas to ensure that essential legal
            knowledge reaches everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Awareness;

