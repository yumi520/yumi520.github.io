import React from 'react';
import Button from './Button.js';
import '../../stylesheet/Projects.css';

/**
 * Reusable ProjectCard component for Design and Code pages
 * 
 * @param {string} image - Image source path (import from assets)
 * @param {string} imageAlt - Alt text for the image
 * @param {string} title - Project title
 * @param {string} subtitle - Project subtitle/category (e.g., "UI/UX Design / Mobile App")
 * @param {string} description - Project description
 * @param {string} linkTo - Internal route path (use 'to' prop for Button)
 * @param {string} linkHref - External URL (use 'href' prop for Button)
 * @param {string} linkText - Text for the link button (default: "View Full Project →")
 * @param {boolean} showButton - Whether to show the button (default: true)
 * 
 * @example
 * // For internal route:
 * <ProjectCard
 *   image={sunneyMockBG}
 *   imageAlt="Sunney app mockup"
 *   title="Sunney"
 *   subtitle="UI/UX Design / Mobile App"
 *   description="Redesign Project from Experience and Interaction Design"
 *   linkTo="/sunney"
 * />
 * 
 * @example
 * // For external link:
 * <ProjectCard
 *   image={projectImage}
 *   imageAlt="Project screenshot"
 *   title="My Project"
 *   subtitle="Full-Stack Web App"
 *   description="A description of the project"
 *   linkHref="https://example.com"
 * />
 */
function ProjectCard({ 
    image, 
    imageAlt, 
    title, 
    subtitle, 
    description, 
    linkTo, 
    linkHref, 
    linkText = "View Full Project →",
    showButton = true 
}) {
    return (
        <section className="sunney-showcase">
            {image && <img src={image} className="Sunney" alt={imageAlt} />}
            <div className="description-section">
                <h3>{title}</h3>
                {subtitle && <h4>{subtitle}</h4>}
                {description && <p>{description}</p>}
                {showButton && (
                    <div className="sunney-anchor">
                        {linkTo ? (
                            <Button to={linkTo} className="case-study-button">
                                {linkText}
                            </Button>
                        ) : linkHref ? (
                            <Button 
                                href={linkHref} 
                                className="case-study-button" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                {linkText}
                            </Button>
                        ) : null}
                    </div>
                )}
            </div>
        </section>
    );
}

export default ProjectCard;
