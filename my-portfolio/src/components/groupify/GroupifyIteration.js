import React from 'react';

// Placeholder images - same size as others
const placeholderImage = "https://via.placeholder.com/1200x600/f5f5f5/999999?text=Image+Placeholder";

function GroupifyIteration() {
    return(
        <section className="sunney-design">
        <h2>Iteration & User Testing</h2>
        
        <h3>The Evolution: Navigator vs. Groupify</h3>
        <p>
        The design went through a significant evolution as we learned from user testing and feedback. This journey from Navigator 
        to Groupify taught us valuable lessons about user-centered design.
        </p>
        
        <h4>Navigator (V1): The Island Interface</h4>
        <img src={placeholderImage} alt="Navigator island interface design"></img>
        <p>
        <strong>Why it didn't work:</strong> The initial concept used a <strong>"Tutoring Island"</strong> concept to connect students by class. 
        Testing showed it <strong>lacked direction</strong> and the English naming conventions were <strong>confusing for international students</strong>. 
        The island metaphor, while creative, created unnecessary cognitive overhead and didn't align with how students actually 
        wanted to find and join events.
        </p>

        <h4>Groupify (V2): Simplified Event List</h4>
        <img src={placeholderImage} alt="Groupify simplified design"></img>
        <p>
        <strong>Initial feedback:</strong> We simplified to a <strong>chronological event list</strong>. However, early feedback noted that a 
        <strong>mass list of events was overwhelming</strong>. Users found it difficult to find relevant events among the noise.
        </p>

        <h3>Design Rationale</h3>
        <img src={placeholderImage} alt="Paper prototype comparison Navigator vs Groupify"></img>
        <p>
        <strong>Design Rationale:</strong> The team simplified the homepage and added <strong>targeted recommendations</strong> to prevent user overwhelm. 
        This approach maintained the transient posture while making discovery more intuitive. By focusing on <strong>streamlining existing workflows</strong> 
        rather than creating something entirely new, we created a more accessible and effective solution.
        </p>
        </section>
    );
}

export default GroupifyIteration;
