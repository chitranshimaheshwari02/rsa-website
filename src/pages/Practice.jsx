import React, { useState, useRef, useEffect } from "react";
import "./Practice.scss";
const practiceAreasData = [
  {
    id: "family",
    title: "Family Disputes",
    content: (
      <>
        <h4>Services Offered</h4>
        <ul>
          <li>Handles cases of divorce, legal separation, annulment, and settlement of marital assets.</li>
          <li>Represents clients in child custody, guardianship, adoption, and visitation rights matters with sensitivity to minors’ best interests.</li>
          <li>Assists with maintenance, alimony, and financial support disputes, ensuring equitable distribution based on statutory frameworks.</li>
          <li>Defends or prosecutes claims under Section 498A IPC, Domestic Violence Act, and other laws related to cruelty or abuse within families.</li>
          <li>Facilitates mediation and counseling to amicably resolve disputes and minimize litigation whenever possible.</li>
        </ul>
        <h4>Court Appearances and Case Management</h4>
        <ul>
          <li>Practices before Family Court Gwalior, District & Sessions Court, Madhya Pradesh High Court (Gwalior Bench), and tribunals as required for family law proceedings.</li>
          <li>Drafts petitions, written statements, replies, and other legal paperwork pertaining to family disputes with meticulous attention to statutory and procedural requirements.</li>
          <li>Manages case timelines, evidence collection, client interactions, and representation during hearings and negotiations.</li>
        </ul>
      </>
    ),
  },
  {
    id: "service",
    title: "Service Matters",
    content: (
      <>
        <h4>Core Work Description</h4>
        <ul>
          <li>Advises clients on disputes related to appointments, promotions, transfers, seniority, disciplinary actions, suspensions, and terminations.</li>
          <li>Drafts and files petitions, conducts legal research, and prepares representations for presentation before courts, including High Courts and the Central Administrative Tribunal (CAT).</li>
          <li>Handles cases concerning administrative orders, compulsory retirement, adverse remarks, employment conditions, salary issues, pension disputes, gratuity claims, and reservation policies.</li>
        </ul>
        <h4>Key Responsibilities</h4>
        <ul>
          <li>Represents clients in judicial and quasi-judicial forums, such as the CAT, State Administrative Tribunals, and relevant commissions.</li>
          <li>Provides legal advisory on service law compliance and assists with negotiation, mediation, and arbitration between employers and employees.</li>
        </ul>
      </>
    ),
  },
  {
    id: "property",
    title: "Property Disputes",
    content: (
      <>
        <h4>Legal Consultation and Advice</h4>
        <ul>
          <li>Offers expert guidance on all property-related matters, including ownership rights, title issues, tenancy, inheritance, and land use regulations.</li>
          <li>Advises clients on the legal implications of property transactions and disputes to avoid complications and financial losses.</li>
        </ul>
        <h4>Due Diligence and Documentation</h4>
        <ul>
          <li>Conducts thorough title verification and searches to confirm clear ownership and identify encumbrances like liens or mortgages.</li>
          <li>Drafts and reviews legal documents such as sale deeds, lease agreements, contracts, and wills to ensure compliance with laws and protect clients’ interests.</li>
        </ul>
        <p>Property dispute lawyers protect clients’ property rights, minimize litigation risks, and ensure smooth ownership transfers, making their role invaluable in India’s complex real estate landscape.</p>
      </>
    ),
  },
];


function Practice() {
  const [activeTab, setActiveTab] = useState(practiceAreasData[0].id);
  const tabsRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const activeTabElement = tabsRef.current.querySelector(`#tab-${activeTab}`);
    if (activeTabElement && sliderRef.current) {
      sliderRef.current.style.left = `${activeTabElement.offsetLeft}px`;
      sliderRef.current.style.width = `${activeTabElement.clientWidth}px`;
    }
  }, [activeTab]);

  const activeTabData = practiceAreasData.find((tab) => tab.id === activeTab);

  return (
    <section className="practice-container">
      <div className="title-wrapper">
        <h2>Practice Areas</h2>
      </div>

      <div className="tabs-nav" ref={tabsRef}>
        {practiceAreasData.map((tab) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`} 
            className={activeTab === tab.id ? "active" : ""}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
        <div className="slider" ref={sliderRef}></div>
      </div>

      <div className="tab-content">
        <h3>{activeTabData.title}</h3>
        <div key={activeTab} className="content-inner">
          {activeTabData.content}
        </div>
      </div>
    </section>
  );
}

export default Practice;