import React from 'react';
import profilePic from './assets/image/TEGA-LOG.png'; // Update the path as necessary

const Gigs = () => {
    // Sample data for gigs
    const gigs = [
        { id: 1, title: "Responsive Website Design", price: "$200", description: "A fully responsive website design adaptable to any device.", imageUrl: profilePic },
        { id: 2, title: "E-commerce Site Development", price: "$500", description: "Complete e-commerce site with custom functionalities.", imageUrl: profilePic },
        { id: 3, title: "E-commerce Site Development", price: "$500", description: "Complete e-commerce site with custom functionalities.", imageUrl: profilePic },
        { id: 4, title: "E-commerce Site Development", price: "$500", description: "Complete e-commerce site with custom functionalities.", imageUrl: profilePic },
        { id: 5, title: "E-commerce Site Development", price: "$500", description: "Complete e-commerce site with custom functionalities.", imageUrl: profilePic },
        { id: 5, title: "E-commerce Site Development", price: "$500", description: "Complete e-commerce site with custom functionalities.", imageUrl: profilePic }
        // Add more gigs here up to 10
    ];

    return (
        <div className="gigs-container">
            <h2>Tega's Gigs</h2>
            <div className="gigs-grid">
                {gigs.map(gig => (
                    <div key={gig.id} className="gig-card">
                        <img src={gig.imageUrl} alt={gig.title} className="gig-image"/>
                        <h3>{gig.title}</h3>
                        <p className="gig-price">{gig.price}</p>
                        <p className="gig-description">{gig.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Gigs;
