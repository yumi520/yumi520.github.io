import React from 'react';

// Placeholder images - same size as others
const placeholderImage = "https://via.placeholder.com/1200x600/f5f5f5/999999?text=Image+Placeholder";

function GroupifyResearch() {
    return(
        <section className="sunney-findings-analysis">
        <h2>Research & Insights</h2>
        
        <h3>User Research</h3>
        <p>
        We conducted <strong>formative interviews</strong> with target students and utilized <strong>affinity diagramming</strong> to identify core themes. 
        This research approach helped us understand the nuanced challenges facing international and first-generation students 
        in building social connections on campus.
        </p>

        <h3>Key Pain Points</h3>
        <img src={placeholderImage} alt="pain points from user research"></img>
        <p>
        Through our research, we identified three critical pain points that shaped the design direction:
        </p>
        <ul>
            <li>⟡ <strong>Time Constraints:</strong> Students are overwhelmed by time-intensive clubs and organizations that require long-term commitment</li>
            <li>⟡ <strong>Exclusivity:</strong> Many existing campus groups feel "cliquey" or exclusive after freshman year, making it difficult for new students to join</li>
            <li>⟡ <strong>Social Isolation:</strong> Challenges include eating meals alone and the difficulty of staying connected with friends during co-op rotations</li>
        </ul>

        <h3>Persona</h3>
        <img src={placeholderImage} alt="Persona Mary Sosa Profile"></img>
        <p>
        We created a persona based on our research findings: <strong>Mary Sosa</strong>, an international, first-generation mechanical engineering student. 
        She is <strong>"efficient and collaborative"</strong> but often has to decline social invites due to her heavy workload. Mary represents 
        the target user who wants to connect with others but needs flexibility and low commitment.
        </p>
    </section>
    );
}

export default GroupifyResearch;
