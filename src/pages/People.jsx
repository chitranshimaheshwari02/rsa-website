import React from "react";
import { FaUserCircle } from "react-icons/fa"; 
import "./People.scss";

const teamMembers = [
  {
    id: 1,
    name: "Advocate Raj Shrivastava",
    title: "Founder & Managing Partner",
    short:
      "With 30+ years of experience, Advocate Raj Shrivastava is a seasoned lawyer known for his courtroom victories, confidential high-profile representations, and expertise in out-of-court settlements. Honored by Lions Clubs, Amity University, and other institutions, he has represented government bodies, banks, industries, and individuals. As a mentor, he has trained numerous associates, many of whom now serve the judiciary or lead their own practices.",
  },
  {
    id: 2,
    name: "Advocate Muskan",
    title: "Associate – Corporate & Commercial Practice",
    short:
      "Advocate Muskan, Associate– Corporate & Commercial Practice, specializes in company law, insolvency, arbitration, and NCLT matters across India. Based in Delhi, she manages the Firm’s corporate practice, handling high-profile cases nationwide through virtual and in-person appearances. Known for precision and efficiency, she represents clients in complex commercial disputes while ensuring seamless pan-India support under the Founder’s guidance.",
  },
  {
    id: 3,
    name: "Advocate Siddarth Shrivastava",
    title: "Head of Associates",
    short:
      "Advocate Siddarth Shrivastava, Head of Associates, is known for his academic brilliance, empathetic advocacy, and client-first approach. Practicing before MP & UP High Courts, Delhi & Jaipur High Courts, and tribunals, he specializes in matrimonial disputes, custody matters, consumer and civil litigation, as well as criminal defense including cheque bounce, defamation, and FIR quashing. He leads the Firm’s associates with a vision of excellence, empathy, and integrity.",
  },
  {
    id: 4,
    name: "Brijesh Kushwah",
    title: "Office Manager & Associate",
    short:
      "Brijesh Kushwah, Office Manager & Associate, ensures smooth operations at the Firm by managing filings, client communication, and court procedures. He specializes in revenue-level matters before Patwaris, Tehsildars, and Rajasv authorities, and also practices criminal law at the District Courts. Known for his efficiency and client support, he bridges day-to-day operations with effective legal practice.",
  },
];

const People = () => {
  return (
    <div className="people-page">
      <h1>Our Team</h1>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="profile-card">
            <div className="avatar-wrapper">
              <FaUserCircle />
              <div className="hover-info">
                <h3>{member.name}</h3>
                <p className="title">{member.title}</p>
                <p className="description">{member.short}</p>
              </div>
            </div>
            <h3>{member.name}</h3>
            <p className="title">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;