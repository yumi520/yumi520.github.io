import React from "react";
import spotifyMock from '../../assets/SocialSpotifyBG.png';
import DesignTopSection from "../shared/DesignTopSections.js";


function SpotifyTopSection() {
    const sections = [
        {
            title: 'ROLE',
            items: ['UX/UI Designer']
        },
        {
            title: 'TOOLS',
            items: ['Figma']
        },
        {
            title: 'TIMELINE',
            items: ['1 Month (2024)']
        },
        {
            title: 'TEAM',
            items: ['Solo']
        }
    ];


    return (
        <DesignTopSection
            src={spotifyMock}
            alt="Mockup of Social Spotify front page"
            h1="Social Spotify"
            p="Promoting connection and discovery for music lovers through social engagement within Spotify."
            sections={sections}
        />
     );
}

export default SpotifyTopSection;