import React from "react";
import "../stylesheet/Sunney.css";

import CETRTopSection from "../components/cetr/CETRTopSection.js";
import CETRCaseStudy from "../components/cetr/CETRCaseStudy.js";
import ScrollToTopOnMount from "../components/shared/ScrollToTop.jsx";

function CETR() {
    return(
        <>
            <ScrollToTopOnMount/>
            <CETRTopSection />
            <CETRCaseStudy />
        </>
    );
}


export default CETR;
