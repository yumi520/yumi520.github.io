import React from "react";
import "../stylesheet/Sunney.css";
import BasicDesignSection from "../components/shared/BasicDesignSection.js";

import SpotifyTopSection from "../components/spotify/SpotifyTopSection.js";
import SpotifyOverview from "../components/spotify/SpotifyOverview.js"
import SpotifyProblem from "../components/spotify/SpotifyProblem.js";
import SpotifySolution from "../components/spotify/SpotifySolution.js";
import SpotifyCompAnalysis from "../components/spotify/SpotifyCompAnalysis.js";
import SpotifyUserInterviews from "../components/spotify/SpotifyUserInterviews.js";
import SpotifyFindingsAnalysis from "../components/spotify/SpotifyFindingsAnalysis.js";
import SpotifyPersona from "../components/spotify/SpotifyPersona.js";
import SpotifyDesign from "../components/spotify/SpotifyDesign.js";
import ScrollToTopOnMount from "../components/shared/ScrollToTop.jsx";

// Placeholder images - all same size
const placeholderImage = "https://via.placeholder.com/1200x600/f5f5f5/999999?text=Image+Placeholder";

function Spotify() {

    const sections = [
        
        {
            className: "sunneyLowfi",
            h2: "Sketches:",
            p: "I utilized the most commonly-seen components on Spotify with the green bubble buttons and gradient cards."
            +  " I realized that as the user moved on the quiz, the desig become inconsistent.",
            src: placeholderImage,
            alt: "Sketches for Social Spotify"
        },
        {
            className: "sunneyLowfi",
            h2: "Low-Fidelity Explorations:",
            p: "Here I added more details like a progress bar, back arrows, and a messaging feature.",
            src: placeholderImage,
            alt: "Low-fidelity wireframes for Social Spotify"
        },
        {
            className: "sunneyLowfi",
            h2: "High-Fidelity Explorations:",
            p: `To align my designs more with the current Spotify design, I ensured consistency with color usage, typography, and how certain elements and icons are designed and used, like for chips and search bars.

            I learned to create clear workflows and utilize UI components for an intuitive and clean interface, incorporating essential screens like the match quiz, match suggestions, messaging, and enhanced profile pages. I made sure that in the quiz, the options were cohesive with each other but also making sure it doesn't take away from what it is.`,
            src: placeholderImage,
            alt: "High-Fidelity mockup for Social Spotify"
        }
    ];

    return(
        <>
            <ScrollToTopOnMount/>
            <SpotifyTopSection />
            <SpotifyOverview />
            <SpotifyProblem />
            <SpotifySolution />
            <SpotifyCompAnalysis />
            <SpotifyUserInterviews />
            <SpotifyFindingsAnalysis />
            <SpotifyPersona />
            <SpotifyDesign />

            {/* The map method is used to iterate over the sections array, 
            rendering a BasicDesignSection for each item. 
            The key prop is set to the index to ensure each element is unique. */}
            <div>
                {sections.map((section, index) => (
                    <BasicDesignSection
                        key={index}
                        className={section.className}
                        h2={section.h2}
                        p={section.p}
                        src={section.src}
                        alt={section.alt}
                    />
                ))}
            </div>
        </>
    );
}


export default Spotify;