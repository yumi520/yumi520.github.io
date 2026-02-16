import React from 'react';
import persona from '../../assets/spotify_persona.png';

// Placeholder images - same size as others
const placeholderImage = "https://via.placeholder.com/1200x600/f5f5f5/999999?text=Image+Placeholder";

function SpotifyResearch() {
    return(
        <section className="sunney-findings-analysis">
        <h2>Research & Insights</h2>
        
        <h3>User Research</h3>
        <p>
        My initial hypothesis was that adding a <strong>messaging feature</strong> would solve the social connection problem, after all, 
        platforms like <strong>Instagram and Snapchat</strong> revolve around messaging, and <strong>TikTok</strong> allows quick sharing. However, I knew 
        this was just an assumption. <mark className="highlight">I conducted <strong>three one-on-one interviews</strong> with young adults over Zoom to understand 
        their experiences, motivations for using social media and Spotify, and their <strong>pain points</strong>.</mark>
        </p>

        <h3>Key Pain Points</h3>
        <img src={placeholderImage} alt="pain and bright points from interviewing users"></img>
        <p>
        Through my interviews, I identified <strong>three critical pain points</strong> that shaped the design direction:
        </p>
        <ul>
            <li>⟡ <strong>Privacy Concerns:</strong> Users want control over what they share and when they share it</li>
            <li>⟡ <strong>Lack of Discovery:</strong> Difficulty finding people with similar music tastes without invasive data sharing</li>
            <li>⟡ <strong>Platform Fragmentation:</strong> Users don't want to switch between apps to connect with music lovers</li>
        </ul>

        <h3>Competitive Analysis</h3>
        <p>
        I conducted a <strong>competitive usability analysis</strong> on two applications: <strong>MyFitness and Pinterest Onboarding</strong>, using 
        <strong> Jakob's Ten Usability Heuristics</strong> as a framework. I noticed that <strong>consistency and standards</strong>, <strong>help and documentation</strong>, 
        and <strong>recognition rather than recall</strong> appeared most frequently in successful task flows. This reinforced the importance 
        of creating an <strong>intuitive interface</strong> that doesn't require users to learn new patterns or recall information.
        </p>
        <img src={placeholderImage} alt="competitive usability analysis for MyFitness app"></img>
        <img src={placeholderImage} alt="competitive usability analysis for Pinterest website"></img>

        <h3>Persona</h3>
        <img src={persona} alt="persona"></img>
        <p>
        I created three refined problem statements for Emilia, a representative user:
        </p>
        <ul>
            <li>⟡ As a music lover, find friends with similar music taste without being too invasive to her privacy</li>
            <li>⟡ Increase social interactions with her new friends on Spotify without having to migrate to another app</li>
            <li>⟡ The ability to keep her listening habits private until she feels comfortable sharing</li>
        </ul>
    </section>
    );
}

export default SpotifyResearch;
