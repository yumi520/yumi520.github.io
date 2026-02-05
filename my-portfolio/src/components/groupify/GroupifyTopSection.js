import React from "react";
import DesignTopSection from "../shared/DesignTopSections.js";

// Placeholder for final mockup image
const groupifyMock = "https://via.placeholder.com/1200x600/f5f5f5/999999?text=Groupify+Final+Mockup";

function GroupifyTopSection() {
    const sections = [
        {
            title: 'PROJECT TYPE',
            items: ['Course Project']
        },
        {
            title: 'ROLE',
            items: ['UX/UI Designer']
        },
        {
            title: 'TOOLS',
            items: ['Figma', 'FigJam', 'React Native', 'Firebase']
        },
        {
            title: 'TIMELINE',
            items: ['Spring 2025']
        },
        {
            title: 'TEAM',
            items: ['Amy Wang', 'Yumiko Chow', 'Emma Vonbuelow', 'Tara Standard']
        }
    ];


    return (
        <DesignTopSection
            src={groupifyMock}
            alt="Mockup of Groupify application"
            h1="Groupify"
            p="Promoting social belonging through low-commitment, interest-based scheduling for university students."
            sections={sections}
        />
     );
}

export default GroupifyTopSection;
