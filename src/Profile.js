import React from 'react';
import { FaStar } from 'react-icons/fa';
import profilePic from './assets/image/TEGA-LOG.png'; // Update the path as necessary

const Profile = () => {
    const freelancer = {
        name: "Tega Smith",
        profession: "Web Developer",
        rating: 4.8,
        skills: ["JavaScript", "React", "Node.js", "CSS"],
        bio: "I'm a passionate Web Developer with over 5 years of experience...",
        reviews: [
            { id: 1, content: "Great work on the website redesign!", author: "Alex" },
            { id: 2, content: "Excellent communication and quality.", author: "Jordan" },
            { id: 3, content: "Project was delivered on time with high quality.", author: "Sam" }
        ],
        gigs: [
            { id: 1, title: "Responsive Website Design", price: "$200", description: "A fully responsive website design adaptable to any device.", imageUrl: profilePic },
            { id: 2, title: "E-commerce Site Development", price: "$500", description: "Complete e-commerce site with custom functionalities.", imageUrl: profilePic }
        ]
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src={profilePic} alt="Profile" className="profile-pic" />
                <h1>{freelancer.name}</h1>
                <p className="profession">{freelancer.profession}</p>
                <div className="ratings">
                    <FaStar className="star-icon" /> {freelancer.rating}
                </div>
                <ul className="skills">
                    {freelancer.skills.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
            </div>
            <div className="profile-bio">
                <p>{freelancer.bio}</p>
            </div>
            <div>
                <span>({freelancer.reviews.length} reviews)</span>
                <h2>Gigs</h2>
                <div className="gigs">
                    {freelancer.gigs.map(gig => (
                        <div key={gig.id} className="gig">
                        <img src={gig.imageUrl} alt={gig.title} className="gig-image"/>
                            <h3>{gig.title}</h3>
                            <p>{gig.description}</p>
                        </div>
                    ))}
                </div>
                <h2>Reviews</h2>
                <div className="reviews">
                    {freelancer.reviews.map(review => (
                        <div key={review.id} className="review">
                            <p>"{review.content}"</p>
                            <p>- {review.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Profile;