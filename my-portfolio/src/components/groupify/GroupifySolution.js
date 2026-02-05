import React from 'react';

// Placeholder images - same size as others
const placeholderImage = "https://via.placeholder.com/1200x600/f5f5f5/999999?text=Image+Placeholder";

function GroupifySolution() {
    return(
        <section className="sunney-solution">
        <h2>Final Design</h2>
        <p>
        Groupify is a scheduling application designed to <strong>simplify connecting over shared interests</strong> and encourage 
        <strong>casual socializing</strong>. It targets students facing academic pressure who want to meet new people in a 
        <strong>low-commitment setting</strong>. The final design balances flexibility with ease of use, addressing the core 
        need for belongingness without overwhelming busy students.
        </p>

        <h3>Feature Highlights</h3>
        
        <h4>Feature 1: Flexible Scheduling (The Freedom Space)</h4>
        <p>
        Users can <strong>join or remove themselves from events instantly</strong>, removing the pressure of long-term commitment. 
        This feature directly addresses the time constraints pain point by allowing students to participate on their own terms, 
        without feeling locked into ongoing obligations.
        </p>
        <img src={placeholderImage} alt="Flexible scheduling interface"></img>

        <h4>Feature 2: Event-Integrated Messaging (The Connection Space)</h4>
        <p>
        Students are <strong>automatically added to an event-specific group chat</strong> upon signing up and removed if they leave. 
        This <strong>automatic group messaging</strong> reduces cognitive load by eliminating the need to manually coordinate communication, 
        while the transient nature means users aren't burdened with ongoing chat groups after events end.
        </p>
        <img src={placeholderImage} alt="Messaging and profile interface"></img>

        <h4>Feature 3: Student-Led Events (The Empowerment Space)</h4>
        <p>
        Allows for <strong>independent, peer-led events</strong> (e.g., yoga, rock climbing, study sessions) not tied to official 
        organizations. This feature addresses the exclusivity pain point by giving students the power to create their own social 
        opportunities, breaking down barriers to entry that exist in traditional campus groups.
        </p>
        <img src={placeholderImage} alt="Student-led event creation"></img>

        <h3>High-Fidelity Prototype</h3>
        <img src={placeholderImage} alt="Final high-fidelity prototype walkthrough"></img>
        <p>
        The final design maintains a <strong>clean, chronological interface</strong> with <strong>targeted recommendations</strong> that help users 
        discover relevant events without feeling overwhelmed. The transient posture ensures the app feels lightweight and 
        non-committal, perfect for busy students seeking casual connections.
        </p>
    </section>

    );
}

export default GroupifySolution;
