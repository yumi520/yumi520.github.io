import React from 'react';

// Placeholder images - same size as others
const placeholderImage = "https://via.placeholder.com/1200x600/f5f5f5/999999?text=Image+Placeholder";

function SpotifyCompAnalysis() {
    return(
        <section class="sunney-comp-analysis">
        <h2>Competitve Analysis:</h2>
        <span>I did a competitve usability analysis on two applications: MyFitness and Pinterest Onboarding.</span>
        <img src={placeholderImage} alt="competitve usability analysis for MyFitness app"></img>
        <img src={placeholderImage} alt="competitve usability analysis for pinterest website"></img>
        <p> I used Jakob's Ten Usability Heuristics to guide me with my analysis. I noticed how consistency and standards, 
            help and document, and recognition rather than recall were the ones that appeared the most often in the taskflow.
            This makes sense because you don't want the users to get lost or confused.
        </p>
    </section>
    );
}

export default SpotifyCompAnalysis;