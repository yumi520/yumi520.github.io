import React from 'react';

// Placeholder images - same size as others
const placeholderImage = "https://via.placeholder.com/1200x600/f5f5f5/999999?text=Image+Placeholder";

function GroupifyIdeation() {
    return(
        <section className="sunney-design">
        <h2>Ideation & Strategy</h2>
        
        <h3>Innovation & Pivot</h3>
        <p>
        Moving away from <strong>"reinventing the wheel"</strong>, the team focused on <strong>streamlining existing workflows</strong>. The project pivoted from 
        an inventive <strong>"island interface" (Navigator)</strong> to a more intuitive, <strong>transient scheduling app (Groupify)</strong>. This shift 
        reflected our learning that highly inventive designs can lose users, while empathetic improvements to existing workflows 
        are often more powerful.
        </p>
        
        <h3>Core Logic</h3>
        <p>
        Groupify uses a <strong>"transient posture"</strong>, meaning users enter to accomplish a specific goal, <strong>finding or posting an event</strong>, 
        and then exit. This approach reduces cognitive load and respects students' need for quick, efficient interactions that 
        don't require ongoing engagement.
        </p>

        <h3>Feature Prioritization</h3>
        <p>
        Based on research, the team prioritized features like <strong>"Join/Leave Events"</strong> for maximum flexibility and 
        <strong>"Automatic Group Messaging"</strong> to reduce cognitive load. These features directly addressed the key pain points of 
        time constraints and social isolation by making participation effortless and commitment-free.
        </p>
        </section>
    );
}

export default GroupifyIdeation;
