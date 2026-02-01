import React from 'react';

// Placeholder image - same size as others
const placeholderImage = "https://via.placeholder.com/1200x600/f5f5f5/999999?text=Image+Placeholder";

function SpotifyPersona() {
    return(
        <section class="sunney-findings-analysis">
        <h2>Persona:</h2>
        <img src={placeholderImage} alt="persona"></img>

        <ul>
            <span>I created three different refine statements for Emilia:</span>
            <li>⟡ As a music lover, find friends with similar music taste without being too invasive to her privacy</li>
            <li>⟡ Increase social interactions with her new friends on Spotify without having to migrate to another app</li>
            <li>⟡ The ability to keep her listening habits private until she feels comfortable sharing</li>
        </ul>
    </section>
    );
}

export default SpotifyPersona;