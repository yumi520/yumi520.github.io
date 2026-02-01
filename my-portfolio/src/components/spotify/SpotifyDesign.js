import React from 'react';

// Placeholder images - same size as others
const placeholderImage = "https://via.placeholder.com/1200x600/f5f5f5/999999?text=Image+Placeholder";

function SpotifyDesign() {
    return(
        <section class="sunney-design">
        <h2>Design:</h2>
        <h3>Sitemap</h3>
        <img src={placeholderImage} alt="Spotify sitemap"></img>
        {/* <span>I planned out the content structure based on the client's priorities.</span> */}

        <h3>Workflow</h3>
        <img src={placeholderImage} alt="Spotify spotifyWorkflow"></img>
        {/* <span>I planned out the content structure based on the client's priorities.</span> */}
        
    </section>
    );
}

export default SpotifyDesign;