import React from 'react';
import '../stylesheet/Playground.css';
import '../stylesheet/Projects.css';
import { Link } from 'react-router-dom';
import CIC from "../assets/CiCData.png";

// Import images - add your CIC report image to assets folder and update the import path
// import CICReport from '../assets/cic-five-year-report.png';

/**
 * Playground Page
 * 
 * A space for graphic design pieces, experiments, and quick projects
 * that don't need full case studies.
 * 
 * To add a new item:
 * 1. Import your image: import MyImage from '../assets/myImage.png';
 * 2. Add it to the items array below
 * 
 * PlaygroundCard Props:
 * - image: Import the image from assets
 * - imageAlt: Alt text for accessibility
 * - title: Item title (e.g., "Typography Study", "Poster Design")
 * - subtitle: Optional subtitle (e.g., dates like "May 2025")
 * - linkTo: Optional internal route (e.g., "/playground/my-item")
 * - linkHref: Optional external URL
 * 
 * Example:
 * 
 * import TypographyStudy from '../assets/typography-study.png';
 * 
 * {
 *     image: TypographyStudy,
 *     imageAlt: "Typography study design",
 *     title: "Typography Study",
 *     subtitle: "May 2025", // optional - great for dates!
 *     // linkTo: "/playground/typography" // optional
 * }
 */
function Playground() {
    // Add your playground items here
    const items = [
        {
            image: CIC,
            imageAlt: "CIC Five Year Report cover design",
            title: "Center for Inclusive Computing Five Year Report",
            subtitle: "May 2025",
            linkHref: "https://cic.northeastern.edu/wp-content/uploads/2025/05/CIC-Five-Year-Report_May-2025.pdf"
            // I worked on the design and creating graphs
        },
        // {
        //     image: Mixue,
        //     imageAlt: "Mixue Branding",
        //     title: "Mixue Identity & Branding",
        //     subtitle: "January 2026",
        // }
        // Add more items here:
        // {
        //     image: MyDesignImage,
        //     imageAlt: "My design piece",
        //     title: "Typography Study"
        // },
    ];

    return (
        <section className="intro-page">
            <section className="works-section">
                <h2 className="playground-title">PLAY</h2>
                
                {items.length > 0 ? (
                    <div className="playground-grid">
                        {items.map((item, index) => {
                            const cardContent = (
                                <>
                                    {item.image && <img src={item.image} className="playground-image" alt={item.imageAlt} />}
                                    <div className="playground-item-title">
                                        <h3>{item.title}</h3>
                                        {item.subtitle && <p className="playground-item-subtitle">{item.subtitle}</p>}
                                    </div>
                                </>
                            );

                            if (item.linkTo) {
                                return (
                                    <Link key={index} to={item.linkTo} className="playground-item">
                                        {cardContent}
                                    </Link>
                                );
                            } else if (item.linkHref) {
                                return (
                                    <a key={index} href={item.linkHref} className="playground-item" target="_blank" rel="noopener noreferrer">
                                        {cardContent}
                                    </a>
                                );
                            } else {
                                return (
                                    <div key={index} className="playground-item">
                                        {cardContent}
                                    </div>
                                );
                            }
                        })}
                    </div>
                ) : (
                    <div className="playground-empty">
                        <p>Add your playground items in the items array above!</p>
                        <p className="playground-empty-hint">
                            Import your images and add them to the items array to get started.
                        </p>
                    </div>
                )}
            </section>
        </section>
    );
}

export default Playground;
