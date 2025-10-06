import React, { useState } from 'react';
import './People.scss'; 

const teamMembers = [
    {
        id: 1,
        name: 'Advocate Raj Shrivastava',
        title: 'Founder & Managing Partner',
        image: '/path/to/raj_shrivastava_image.jpg',
        description: 'With 30+ years of experience, Advocate Raj Shrivastava is a seasoned lawyer known for his courtroom victories, confidential high-profile representations, and expertise in out-of-court settlements. Honored by Lions Clubs, Amity University, and other institutions, he has represented government bodies, banks, industries, and individuals. As a mentor, he has trained numerous associates, many of whom now serve the judiciary or lead their own practices.'
    },
    {
        id: 2,
        name: 'Advocate Muskan', 
        title: 'Associate – Corporate & Commercial Practice',
        image: '/path/to/muskan_image.jpg',
        description: 'Advocate Muskan, Associate– Corporate & Commercial Practice, specializes in company law, insolvency, arbitration, and NCLT matters across India. Based in Delhi, she manages the Firm’s corporate practice, handling high-profile cases nationwide through virtual and in-person appearances. Known for precision and efficiency, she represents clients in complex commercial disputes while ensuring seamless pan-India support under the Founder’s guidance.'
    },
    {
        id: 3,
        name: 'Advocate Siddarth Shrivastava',
        title: 'Head of Associates',
        image: '/path/to/siddarth_shrivastava_image.jpg',
        description: 'Advocate Siddarth Shrivastava, Head of Associates, is known for his academic brilliance, empathetic advocacy, and client-first approach. Practicing before MP & UP High Courts, Delhi & Jaipur High Courts, and tribunals, he specializes in matrimonial disputes, custody matters, consumer and civil litigation, as well as criminal defense including cheque bounce, defamation, and FIR quashing. He leads the Firm’s associates with a vision of excellence, empathy, and integrity.'
    },
    {
        id: 4,
        name: 'Brijesh Kushwah',
        title: 'Office Manager & Associate',
        image: '/path/to/brijesh_kushwah_image.jpg',
        description: 'Brijesh Kushwah, Office Manager & Associate, ensures smooth operations at the Firm by managing filings, client communication, and court procedures. He specializes in revenue-level matters before Patwaris, Tehsildars, and Rajasv authorities, and also practices criminal law at the District Courts. Known for his efficiency and client support, he bridges day-to-day operations with effective legal practice.'
    }
];

const People = () => {
    const [activeProfileId, setActiveProfileId] = useState(null);

    const handleProfileClick = (id) => {
        if (activeProfileId === id) {
            setActiveProfileId(null);
        } else {
            setActiveProfileId(id);
        }
    };

    return (
        <div className="people-page">
            <h1>Our Team</h1>
            <div className="team-grid">
                {teamMembers.map((member) => (
                    <div
                        key={member.id}
                        className={`profile-card ${activeProfileId === member.id ? 'active' : ''}`}
                        onClick={() => handleProfileClick(member.id)}
                    >
                        <div className="profile-image-container">
                            <img src={member.image} alt={member.name} />
                            {activeProfileId === member.id && (
                                <div className="profile-description">
                                    <p>{member.description}</p>
                                </div>
                            )}
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
