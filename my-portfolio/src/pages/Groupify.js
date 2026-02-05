import React from "react";
import "../stylesheet/Sunney.css";

import GroupifyTopSection from "../components/groupify/GroupifyTopSection.js";
import GroupifyProblem from "../components/groupify/GroupifyProblem.js";
import GroupifyResearch from "../components/groupify/GroupifyResearch.js";
import GroupifyIdeation from "../components/groupify/GroupifyIdeation.js";
import GroupifyIteration from "../components/groupify/GroupifyIteration.js";
import GroupifySolution from "../components/groupify/GroupifySolution.js";
import GroupifyReflection from "../components/groupify/GroupifyReflection.js";
import ScrollToTopOnMount from "../components/shared/ScrollToTop.jsx";

function Groupify() {
    return(
        <>
            <ScrollToTopOnMount/>
            <GroupifyTopSection />
            <GroupifyProblem />
            <GroupifyResearch />
            <GroupifyIdeation />
            <GroupifyIteration />
            <GroupifySolution />
            <GroupifyReflection />
        </>
    );
}

export default Groupify;
