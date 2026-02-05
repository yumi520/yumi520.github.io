import React from 'react';
import BasicDesignSection from "../shared/BasicDesignSection.js";

// Placeholder images - same size as others
const placeholderImage = "https://via.placeholder.com/1200x600/f5f5f5/999999?text=Image+Placeholder";

function SpotifyIdeation() {
    return(
        <section className="sunney-design">
        <h2>Ideation & Information Architecture</h2>
        
        <h3>Brainstorming & Mapping</h3>
        <p>
        I started by mapping out the <strong>information architecture</strong> to understand how users would navigate through the social features. 
        The <strong>sitemap</strong> helped me visualize the relationship between <strong>existing Spotify features and the new social components</strong>, ensuring 
        a <strong>seamless integration</strong> that doesn't disrupt the core listening experience.
        </p>
        
        <h3>Sitemap</h3>
        <img src={placeholderImage} alt="Spotify sitemap"></img>

        <h3>Workflow</h3>
        <img src={placeholderImage} alt="Spotify workflow"></img>
        <p>
        The <strong>workflow diagram</strong> helped me identify <strong>key user journeys</strong>: <strong>taking the quiz</strong>, <strong>viewing matches</strong>, and <strong>initiating conversations</strong>. 
        This mapping process revealed where users might <strong>drop off</strong> and where we needed to provide <strong>clear guidance</strong>.
        </p>

        <h3>Low-Fidelity Sketches</h3>
        <p>
        I began with <strong>rough sketches</strong>, utilizing the most commonly-seen components on Spotify, <strong>green bubble buttons and gradient cards</strong>. 
        However, I quickly realized that as users progressed through the quiz, the design became <strong>inconsistent</strong>. This early discovery 
        taught me the importance of establishing a <strong>design system</strong> before diving into detailed screens.
        </p>
        <img src={placeholderImage} alt="Sketches for Social Spotify"></img>

        <h3>Low-Fidelity Explorations</h3>
        <p>
        In my <strong>low-fidelity wireframes</strong>, I added more functional details like <strong>progress bars</strong>, <strong>back arrows</strong>, and a <strong>messaging feature</strong>. 
        These elements addressed the <strong>navigation and feedback needs</strong> I identified in the workflow mapping. I also started exploring 
        how the quiz interface could maintain <strong>visual consistency</strong> while feeling <strong>engaging and interactive</strong>.
        </p>
        <img src={placeholderImage} alt="Low-fidelity wireframes for Social Spotify"></img>

        <h3>Scope Narrowing</h3>
        <p>
        During ideation, I considered several features that didn't make it into the final design. For example, I explored adding 
        <strong>group playlists</strong>, <strong>music challenges</strong>, and <strong>event-based matching</strong>. However, I prioritized the <strong>core functionality</strong>, <strong>matching through 
        a quiz and messaging</strong>, to ensure the feature felt <strong>complete and valuable</strong> rather than overwhelming users with too many options.
        </p>
        </section>
    );
}

export default SpotifyIdeation;
