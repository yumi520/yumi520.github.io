import React from "react";
import "../stylesheet/Sunney.css";

import SpotifyTopSection from "../components/spotify/SpotifyTopSection.js";
import SpotifyProblem from "../components/spotify/SpotifyProblem.js";
import SpotifyResearch from "../components/spotify/SpotifyResearch.js";
import SpotifyIdeation from "../components/spotify/SpotifyIdeation.js";
import SpotifyIteration from "../components/spotify/SpotifyIteration.js";
import SpotifySolution from "../components/spotify/SpotifySolution.js";
import SpotifyReflection from "../components/spotify/SpotifyReflection.js";
import ScrollToTopOnMount from "../components/shared/ScrollToTop.jsx";

function Spotify() {
    return(
        <>
            <ScrollToTopOnMount/>
            <SpotifyTopSection />
            <SpotifyProblem />
            <SpotifyResearch />
            <SpotifyIdeation />
            <SpotifyIteration />
            <SpotifySolution />
            <SpotifyReflection />
        </>
    );
}


export default Spotify;