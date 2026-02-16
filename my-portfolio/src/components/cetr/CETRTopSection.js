import React from "react";
import cetrThumbnail from '../../assets/cetr presentation/THUMBNAIL.png';
import DesignTopSection from "../shared/DesignTopSections.js";


function CETRTopSection() {
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
            items: ['3 Months']
        },
        {
            title: 'TEAM',
            items: ['Work Experience']
        }
    ];


    return (
        <DesignTopSection
            src={cetrThumbnail}
            alt="CETR Website Redesign mockup"
            h1="CETR Website Redesign"
            p="Community Teaching and Research at Northeastern University – Website Redesign."
            sections={sections}
        />
     );
}

export default CETRTopSection;
