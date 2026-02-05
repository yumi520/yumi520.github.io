import React from 'react';

// Placeholder images - same size as others
const placeholderImage = "https://via.placeholder.com/1200x600/f5f5f5/999999?text=Image+Placeholder";

function SpotifyIteration() {
    return(
        <section className="sunney-design">
        <h2>Iteration & User Testing</h2>
        
        <h3>High-Fidelity Explorations</h3>
        <p>
        To align my designs more with the current <strong>Spotify design language</strong>, I ensured consistency with <strong>color usage</strong>, <strong>typography</strong>, 
        and how certain elements and icons are designed and used, like <strong>chips and search bars</strong>. I learned to create <strong>clear workflows</strong> 
        and utilize <strong>UI components</strong> for an intuitive and clean interface.
        </p>
        
        <h3>Design Evolution: Quiz Interface</h3>
        <p>
        The quiz interface went through <strong>several iterations</strong> as I refined the <strong>visual hierarchy and interaction patterns</strong>. 
        Initially, I struggled with maintaining <strong>consistency</strong> as users progressed through questions.
        </p>
        
        <h4>Option 1: Dense Card Layout</h4>
        <img src={placeholderImage} alt="Quiz design option 1"></img>
        <p>
        <strong>Why it didn't work:</strong> The first version used large gradient cards for each option, which felt visually 
        overwhelming and took up too much screen space. Users found it difficult to scan options quickly.
        </p>

        <h4>Option 2: Minimal List Layout</h4>
        <img src={placeholderImage} alt="Quiz design option 2"></img>
        <p>
        <strong>Why it didn't work:</strong> While cleaner, this version felt too sparse and didn't align with Spotify's 
        visual language of rich, engaging interfaces. It also lacked the playful energy that makes music discovery fun.
        </p>

        <h4>Option 3: Balanced Chip Design (Final)</h4>
        <img src={placeholderImage} alt="Quiz design option 3 - final"></img>
        <p>
        <strong>Why it succeeded:</strong> I chose this version because it balanced <strong>visual interest with scannability</strong>. The <strong>chip-based 
        design</strong> allowed options to feel cohesive while maintaining <strong>Spotify's signature aesthetic</strong>. The <strong>progress bar</strong> and <strong>clear 
        question hierarchy</strong> helped users understand where they were in the flow without feeling overwhelmed.
        </p>

        <h3>Design Evolution: Match Suggestions</h3>
        <p>
        The match suggestions screen needed to show compatibility while encouraging users to initiate conversations. I explored 
        different ways to display shared music interests and match percentages.
        </p>
        <img src={placeholderImage} alt="Match suggestions design iterations"></img>
        <p>
        <strong>Design Rationale:</strong> I moved from a <strong>list-based layout</strong> to a <strong>card-based design</strong> that highlighted <strong>compatibility 
        scores and shared artists</strong> more prominently. This made it easier for users to quickly identify their <strong>best matches</strong> and 
        understand why they were matched, reducing the <strong>cognitive load</strong> of deciding who to message.
        </p>

        <h3>Design Evolution: Messaging Interface</h3>
        <p>
        The messaging feature needed to feel native to Spotify while providing a smooth communication experience. I tested 
        different layouts for showing shared music within conversations.
        </p>
        <img src={placeholderImage} alt="Messaging interface design iterations"></img>
        <p>
        <strong>Design Rationale:</strong> I integrated <strong>music previews directly into the chat interface</strong>, allowing users to 
        <strong>share songs and playlists without leaving the conversation</strong>. This created a <strong>seamless experience</strong> that kept users engaged 
        with both the <strong>social and music discovery</strong> aspects of the feature.
        </p>
        </section>
    );
}

export default SpotifyIteration;
