import React, { useState } from 'react';

// Images from spotify images presentation folder (1-12 in order)
import img1 from '../../assets/spotify images presentation/1.png';
import img2 from '../../assets/spotify images presentation/2.png';
import img3 from '../../assets/spotify images presentation/3.png';
import img4 from '../../assets/spotify images presentation/4.png';
import img5 from '../../assets/spotify images presentation/5.png';
import img6 from '../../assets/spotify images presentation/6.png';
import img7 from '../../assets/spotify images presentation/7.png';
import img8 from '../../assets/spotify images presentation/8.png';
import img9 from '../../assets/spotify images presentation/9.png';
import img10 from '../../assets/spotify images presentation/10.png';
import img11 from '../../assets/spotify images presentation/11.png';
import img12 from '../../assets/spotify images presentation/12.png';

const presentationImages = [
    { src: img1, alt: 'Context and problem' },
    { src: img2, alt: 'The goal' },
    { src: img3, alt: 'User research' },
    { src: img4, alt: 'Key pain points' },
    { src: img5, alt: 'Competitive analysis' },
    { src: img6, alt: 'Persona' },
    { src: img7, alt: 'Sitemap' },
    { src: img8, alt: 'Workflow' },
    { src: img9, alt: 'Design evolution 1' },
    { src: img10, alt: 'Design evolution 2' },
    { src: img11, alt: 'Design evolution 3' },
    { src: img12, alt: 'Final design' },
];

function SpotifyCaseStudy() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="spotify-case-study">
            {presentationImages.map((img, index) => {
                const isHovered = hoveredIndex === index;
                const isDimmed = hoveredIndex !== null && !isHovered;

                return (
                    <div
                        key={index}
                        className={`spotify-case-study__slide${isHovered ? ' spotify-case-study__slide--hovered' : ''}${isDimmed ? ' spotify-case-study__slide--dimmed' : ''}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img src={img.src} alt={img.alt} />
                    </div>
                );
            })}
        </div>
    );
}

export default SpotifyCaseStudy;
