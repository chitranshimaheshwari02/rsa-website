import React from "react";

function Disclaimer({ onAgree }) {
  return (
    <div className="disclaimer-overlay">
      <div className="disclaimer-box">
        <h2>Raj Shrivastava and Associates</h2>
        <h3>Disclaimer</h3>
        <p>
          The current rules of the Bar Council of India prohibit law firms from
          advertising or soliciting work. This website is meant only to provide
          basic information about Raj Shrivastava and Associates at the request
          of the visitor. By clicking "Agree and Enter", you acknowledge and
          agree to the following terms:
        </p>
        <ul>
          <li>
            The contents of this website do not constitute legal advice or
            create an attorney-client relationship.
          </li>
          <li>
            Usage of this website is at your own volition and risk.
          </li>
          <li>
            The firm is not responsible for consequences of reliance on this
            website or external links.
          </li>
        </ul>
        <button onClick={onAgree}>Agree and Enter</button>
      </div>
    </div>
  );
}

export default Disclaimer;
