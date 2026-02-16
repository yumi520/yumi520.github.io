import React from "react";
import "../stylesheet/Sunney.css";

import SpotifyTopSection from "../components/spotify/SpotifyTopSection.js";
import SpotifyCaseStudy from "../components/spotify/SpotifyCaseStudy.js";
import ScrollToTopOnMount from "../components/shared/ScrollToTop.jsx";

function Spotify() {
    return(
        <>
            <ScrollToTopOnMount/>
            <SpotifyTopSection />
            <SpotifyCaseStudy />
        </>
    );
}


export default Spotify;