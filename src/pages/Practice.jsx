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
  {
    id: "constitutional",
    title: "Constitutional Matters",
    content: (
      <>
        <p>As a constitutional law expert, I provide specialized legal services across the entire spectrum of India’s constitutional framework, ensuring the protection of fundamental rights and the rule of law. My practice focuses on the judicial review of administrative actions, constitutional challenges to legislation, and the interpretation of complex legal provisions with a meticulous, research-driven approach.</p>
        <ul>
          <li>Litigation and representation in High Courts and Supreme Court on constitutional matters such as writs, protection of fundamental rights, and constitutional challenges to legislation.</li>
          <li>Advisory services on constitutional interpretation, analysis, and compliance for individuals, businesses, and institutions.</li>
          <li>Advocacy involving judicial review of administrative actions and legislation, and enforcement of constitutional remedies under Articles 32 and 226.</li>
          <li>Providing tailored advice addressing the unique aspects of each case with deep understanding of the Indian constitutional framework.</li>
        </ul>
      </>
    ),
  },
  {
    id: "banking",
    title: "Banking",
    content: (
      <>
        <p>Specializes in banking law, navigating the regulatory framework governing financial transactions and institutions. Represents banks, financial institutions, corporations, and individuals in diverse matters.</p>
        <ul>
          <li>Loan documentation, debt restructuring, and asset recovery.</li>
          <li>Ensures compliance with RBI guidelines, AML laws, and financial regulations.</li>
          <li>Handles project finance, syndicated loans, and structured financial products.</li>
          <li>Advises on mergers, acquisitions, and insolvency-related banking issues.</li>
        </ul>
      </>
    ),
  },
  {
    id: "consumer",
    title: "Consumer Protection",
    content: (
      <>
        <p>Dedicated to protecting consumers from unfair trade practices, defective products, and deficient services under the Consumer Protection Act, 2019.</p>
        <ul>
          <li>Handles cases before District, State, and National Consumer Commissions.</li>
          <li>Specializes in financial fraud, insurance disputes, and e-commerce cases.</li>
          <li>Offers mediation and litigation support to secure refunds, replacements, or compensation.</li>
          <li>Guides clients through complaint filing and legal remedies.</li>
        </ul>
      </>
    ),
  },
  {
    id: "insolvency",
    title: "Insolvency & Bankruptcy",
    content: (
      <>
        <p>Specializes in insolvency and bankruptcy law under the Insolvency and Bankruptcy Code, 2016 (IBC), offering representation before NCLT and NCLAT.</p>
        <ul>
          <li>Advises creditors, debtors, resolution professionals, and acquirers in insolvency cases.</li>
          <li>Drafts resolution plans, handles liquidation, and distressed asset management.</li>
          <li>Provides pre-insolvency advisory and restructuring solutions.</li>
        </ul>
      </>
    ),
  },
  {
    id: "dispute",
    title: "Dispute Resolution",
    content: (
      <>
        <p>Experienced in litigation, arbitration, and mediation for corporate, financial, and regulatory disputes across forums including High Courts and arbitral tribunals.</p>
        <ul>
          <li>Handles commercial, contractual, and shareholder disputes.</li>
          <li>Advises on arbitration enforcement and mediation strategies.</li>
          <li>Provides regulatory and compliance dispute resolution services.</li>
        </ul>
      </>
    ),
  },
  {
    id: "criminal",
    title: "Criminal Matters",
    content: (
      <>
        <p>Provides robust defense and prosecution across India’s criminal courts including sessions courts, High Courts, and the Supreme Court.</p>
        <ul>
          <li>Handles white-collar crimes, cybercrimes, drug offenses, and serious violent crimes.</li>
          <li>Expertise in bail, appeals, and trial advocacy.</li>
          <li>Ensures constitutional protection of rights during investigations and trials.</li>
        </ul>
      </>
    ),
  },
  {
    id: "narcotics",
    title: "Narcotics Law",
    content: (
      <>
        <p>Specializes in narcotics law under the NDPS Act, 1985 and subsequent amendments, representing clients in narcotics-related trials and compliance matters.</p>
        <ul>
          <li>Handles drug trafficking, possession, and controlled substance offenses.</li>
          <li>Advises on licensing and compliance for medical or scientific narcotics use.</li>
          <li>Represents clients before NCB and other enforcement agencies.</li>
        </ul>
      </>
    ),
  },
  {
    id: "defamation",
    title: "Defamation",
    content: (
      <>
        <p>Specializes in criminal and civil defamation under the Bharatiya Nyaya Sanhita (BNS), 2023, representing individuals and corporations in libel and slander cases.</p>
        <ul>
          <li>Advises on freedom of speech vs. reputation protection.</li>
          <li>Handles cyber defamation and media-related defamation matters.</li>
          <li>Files and defends defamation cases under Section 356 BNS.</li>
        </ul>
      </>
    ),
  },
  {
    id: "cyber",
    title: "Cyber Law",
    content: (
      <>
        <p>Offers expert legal services in cybercrime, data protection, privacy, and digital rights under IT Act, 2000 and BNS, 2023.</p>
        <ul>
          <li>Handles hacking, online fraud, and cyber harassment cases.</li>
          <li>Advises on cybersecurity policies and data privacy compliance.</li>
          <li>Represents clients before cybercrime cells and tribunals.</li>
        </ul>
      </>
    ),
  },
  {
    id: "consultancy",
    title: "Consultancy",
    content: (
      <>
        <p>Provides comprehensive legal consultancy to individuals, startups, and enterprises across corporate, regulatory, and contractual matters.</p>
        <ul>
          <li>Advises on compliance, intellectual property, and employment law.</li>
          <li>Drafts and reviews business contracts and legal agreements.</li>
          <li>Assists with company registration, governance, and restructuring.</li>
          <li>Supports mergers, acquisitions, and regulatory audits.</li>
        </ul>
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
