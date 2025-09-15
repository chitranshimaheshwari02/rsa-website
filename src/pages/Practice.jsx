// import React from "react";

// function Practice() {
//   return (
//     <section>
//       <h3>Practice Areas</h3>
//       <ul>
//         <li>Constitutional Law</li>
//         <li>Civil Litigation</li>
//         <li>Criminal Defense</li>
//         <li>Corporate Advisory</li>
//         <li>Family and Matrimonial Law</li>
//         <li>Property and Land Disputes</li>
//       </ul>
//     </section>
//   );
// }

// export default Practice;

import React from "react";
import "./Practice.scss";

function Practice() {
  return (
    <section className="practice">
      <h2>Practice Areas</h2>

      {/* Family Disputes */}
      <div className="practice-area">
        <h3>Family Disputes</h3>
        <h4>Services Offered</h4>
        <ul>
          <li>
            Handles cases of divorce, legal separation, annulment, and settlement
            of marital assets.
          </li>
          <li>
            Represents clients in child custody, guardianship, adoption, and
            visitation rights matters with sensitivity to minors’ best interests.
          </li>
          <li>
            Assists with maintenance, alimony, and financial support disputes,
            ensuring equitable distribution based on statutory frameworks.
          </li>
          <li>
            Defends or prosecutes claims under Section 498A IPC, Domestic
            Violence Act, and other laws related to cruelty or abuse within
            families.
          </li>
          <li>
            Facilitates mediation and counseling to amicably resolve disputes
            and minimize litigation whenever possible.
          </li>
        </ul>

        <h4>Court Appearances and Case Management</h4>
        <ul>
          <li>
            Practices before Family Court Gwalior, District & Sessions Court,
            Madhya Pradesh High Court (Gwalior Bench), and tribunals as required
            for family law proceedings.
          </li>
          <li>
            Drafts petitions, written statements, replies, and other legal
            paperwork pertaining to family disputes with meticulous attention to
            statutory and procedural requirements.
          </li>
          <li>
            Manages case timelines, evidence collection, client interactions,
            and representation during hearings and negotiations.
          </li>
        </ul>
      </div>

      {/* Service Matters */}
      <div className="practice-area">
        <h3>Service Matters</h3>
        <h4>Core Work Description</h4>
        <ul>
          <li>
            Advises clients on disputes related to appointments, promotions,
            transfers, seniority, disciplinary actions, suspensions, and
            terminations.
          </li>
          <li>
            Drafts and files petitions, conducts legal research, and prepares
            representations for presentation before courts, including High
            Courts and the Central Administrative Tribunal (CAT).
          </li>
          <li>
            Handles cases concerning administrative orders, compulsory
            retirement, adverse remarks, employment conditions, salary issues,
            pension disputes, gratuity claims, and reservation policies.
          </li>
        </ul>

        <h4>Key Responsibilities</h4>
        <ul>
          <li>
            Represents clients in judicial and quasi-judicial forums, such as
            the CAT, State Administrative Tribunals, and relevant commissions.
          </li>
          <li>
            Provides legal advisory on service law compliance and assists with
            negotiation, mediation, and arbitration between employers and
            employees, especially in matters of government service law.
          </li>
          <li>
            Drafts replies to charge sheets, disciplinary proceedings, appeals,
            and reviews of administrative decisions.
          </li>
        </ul>

        <h4>Scope of Practice</h4>
        <ul>
          <li>
            Both government and private sector employees can seek expertise for
            resolving workplace harassment, unlawful suspensions, illegal
            terminations, and improper service conditions.
          </li>
          <li>
            Ensures protection of employees’ rights and pursues litigation to
            enforce statutory and constitutional safeguards such as Articles 14,
            15, and 16 of the Indian Constitution.
          </li>
        </ul>
      </div>

      {/* Property Disputes */}
      <div className="practice-area">
        <h3>Property Disputes</h3>
        <h4>Legal Consultation and Advice</h4>
        <ul>
          <li>
            Offers expert guidance on all property-related matters, including
            ownership rights, title issues, tenancy, inheritance, and land use
            regulations.
          </li>
          <li>
            Advises clients on the legal implications of property transactions
            and disputes to avoid complications and financial losses.
          </li>
        </ul>

        <h4>Due Diligence and Documentation</h4>
        <ul>
          <li>
            Conducts thorough title verification and searches to confirm clear
            ownership and identify encumbrances like liens or mortgages.
          </li>
          <li>
            Drafts and reviews legal documents such as sale deeds, lease
            agreements, contracts, and wills to ensure compliance with laws and
            protect clients’ interests.
          </li>
        </ul>

        <p>
          Property dispute lawyers protect clients’ property rights, minimize
          litigation risks, and ensure smooth ownership transfers, making their
          role invaluable in India’s complex real estate landscape.
        </p>
      </div>
    </section>
  );
}

export default Practice;
