import React from 'react';
import '../stylesheet/Projects.css';
import ProjectCard from '../components/shared/ProjectCard.js';

// Import project images
import SocialSpotifyScreen from '../assets/SocialSpotifyBG.png';
import CETRThumbnail from '../assets/cetr presentation/THUMBNAIL.png';

/**
 * Design Projects Page
 * 
 * To add a new project, simply add a new <ProjectCard> component below.
 * 
 * ProjectCard Props:
 * - image: Import the image from assets (e.g., import myImage from '../assets/myImage.png')
 * - imageAlt: Alt text for accessibility
 * - title: Project title
 * - subtitle: Project category/type (e.g., "UI/UX Design / Mobile App")
 * - description: Brief project description
 * - linkTo: Internal route path (e.g., "/my-project") OR
 * - linkHref: External URL (e.g., "https://example.com")
 * - linkText: Optional custom button text (default: "View Full Project →")
 * - showButton: Set to false to hide the button
 * 
 * Example for adding a new project:
 * 
 * import MyNewProjectImage from '../assets/myNewProject.png';
 * 
 * <ProjectCard
 *   image={MyNewProjectImage}
 *   imageAlt="My new project mockup"
 *   title="My New Project"
 *   subtitle="UI/UX Design / Web App"
 *   description="A brief description of what this project is about"
 *   linkTo="/my-new-project"
 * />
 */
function Design() {
    // Project data array - easy to manage and add new projects
    const projects = [
        {
            image: CETRThumbnail,
            imageAlt: "Community Teaching and Research at NEU Website Redesign",
            title: "CETR Website Redesign",
            subtitle: "UI/UX Design / Website Design",
            description: "Redesign Work Experience",
            linkTo: "/cetr"
        },
        {
            image: SocialSpotifyScreen,
            imageAlt: "Social Spotify app",
            title: "Social Spotify",
            subtitle: "UI/UX Design / Mobile App",
            description: "Redesign Project from Interaction Design Principles",
            linkTo: "/spotify"
        },
        // Add more projects here by copying the object above and updating the values
        // Example:
        // {
        //     image: MyNewProjectImage,
        //     imageAlt: "My new project",
        //     title: "My New Project",
        //     subtitle: "UI/UX Design / Web App",
        //     description: "Description of my new project",
        //     linkTo: "/my-new-project" // or use linkHref for external links
        // }
    ];

    return (
        <section className="intro-page">
            <section className="works-section">
                <h2 className="playground-title">Featured Design Work</h2>
                
                {/* Render all projects using the reusable ProjectCard component */}
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        imageAlt={project.imageAlt}
                        title={project.title}
                        subtitle={project.subtitle}
                        description={project.description}
                        linkTo={project.linkTo}
                        linkHref={project.linkHref}
                        linkText={project.linkText}
                        showButton={project.showButton !== false}
                    />
                ))}
            </section>
        </section>
    )
}

export default Design;