import React from 'react';

import Quiz from '../../assets/SocialSpotify - Quiz.mov';
import Match from '../../assets/SocialSpotify - Message.mov';


function SpotifySolution() {
    return(
        <section className="sunney-solution">
        <h2>Final Design</h2>
        <p>
        I designed a mobile application with <strong>customizable music sharing options</strong> that allow users to select which <strong>genres, 
        artists, playlists, and listening habits</strong> they want to share. An <strong>engaging and personalized quiz</strong> within Spotify enhances 
        the user experience by helping them express their music preferences <strong>without feeling exposed</strong>, all without needing to 
        <strong>switch apps</strong> to meet like-minded individuals.
        </p>

        <h3>Feature Highlights</h3>
        
        <h4>Feature 1: Personalized Matching Quiz (The Discovery Space)</h4>
        <p>
        The quiz feature allows users to express their music preferences through a series of <strong>engaging questions</strong>. This approach 
        reduces the pressure of <strong>sharing listening history directly</strong> while still enabling <strong>accurate matching</strong>. Users can take the quiz 
        <strong>at their own pace</strong> and <strong>retake it</strong> as their tastes evolve.
        </p>
        <div className="video-container-right">
            <span className="video-caption">Take a simple quiz to match with other music lovers with the same interests.</span>
            <video src={Quiz} autoPlay muted loop className="no-controls">
                Your browser does not support the video tag.
            </video>
        </div>

        <h4>Feature 2: Match Suggestions & Compatibility (The Connection Space)</h4>
        <p>
        The match suggestions screen displays <strong>compatibility scores and shared music interests</strong>, making it easy for users to 
        understand <strong>why they were matched</strong> with someone. This <strong>transparency builds trust</strong> and helps users feel confident <strong>initiating 
        conversations</strong> with their matches.
        </p>

        <h4>Feature 3: Integrated Messaging (The Communication Space)</h4>
        <p>
        The messaging feature <strong>keeps users within Spotify</strong>, allowing them to <strong>share songs, playlists, and discuss music</strong> without 
        switching apps. <strong>Music previews are embedded directly in conversations</strong>, creating a <strong>seamless experience</strong> that blends <strong>social 
        connection with music discovery</strong>.
        </p>
        <div className="video-container-left">
            <video src={Match} autoPlay muted loop className="no-controls">
                Your browser does not support the video tag.
            </video>
            <span className="video-caption">See what you have in common with your matches and message them!</span>
        </div>

        <h3>Privacy Controls</h3>
        <p>
        Throughout the design, I prioritized <strong>user privacy</strong> by allowing <strong>granular control</strong> over what information is shared. Users 
        can choose to <strong>keep their listening habits private</strong> until they feel comfortable sharing, addressing one of the <strong>key pain 
        points</strong> identified in research.
        </p>
    </section>

    );
}

export default SpotifySolution;