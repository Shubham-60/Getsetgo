import React from 'react';
import './style.css';

export default function Team() {
    // Array of team member data
    const teamMembers = [
        {
            image: "https://img.freepik.com/free-vector/young-man-orange-hoodie_1308-173533.jpg?ga=GA1.1.735406510.1743797116&semt=ais_hybrid&w=740",
            name: "Shubham",
            role: "Founder & CEO"
        },
        {
            image: "https://img.freepik.com/free-photo/beautiful-cartoon-woman-portrait_23-2151839663.jpg?ga=GA1.1.735406510.1743797116&semt=ais_hybrid&w=740",
            name: "Muskaan",
            role: "Travel Experience Director"
        },
        {
            image: "https://img.freepik.com/free-vector/smiling-young-man-orange-jacket_1308-176720.jpg?ga=GA1.1.735406510.1743797116&semt=ais_hybrid&w=740",
            name: "Gobind",
            role: "Customer Relations Manager"
        }
    ];

    return (
        <div className="team-section">
            <h2 className="team-heading">Meet Our Team</h2>

            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member">
                        <div className="team-member-image">
                            <img src={member.image} alt={member.name} />
                        </div>
                        <h3 className="team-member-name">{member.name}</h3>
                        <p className="team-member-role">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}