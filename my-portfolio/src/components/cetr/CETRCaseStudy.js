import React, { useState } from 'react';

// Images from cetr presentation folder (1-8 in order, then future)
import img1 from '../../assets/cetr presentation/1.png';
import img2 from '../../assets/cetr presentation/2.png';
import img3 from '../../assets/cetr presentation/3.png';
import img4 from '../../assets/cetr presentation/4.png';
import img5 from '../../assets/cetr presentation/5.png';
import img6 from '../../assets/cetr presentation/6.png';
import img7 from '../../assets/cetr presentation/7.png';
import img8 from '../../assets/cetr presentation/8.png';
import imgFuture from '../../assets/cetr presentation/future.png';

const presentationImages = [
    { src: img1, alt: 'CETR slide 1' },
    { src: img2, alt: 'CETR slide 2' },
    { src: img3, alt: 'CETR slide 3' },
    { src: img4, alt: 'CETR slide 4' },
    { src: img5, alt: 'CETR slide 5' },
    { src: img6, alt: 'CETR slide 6' },
    { src: img7, alt: 'CETR slide 7' },
    { src: img8, alt: 'CETR slide 8' },
    { src: imgFuture, alt: 'Future directions' },
];

function CETRCaseStudy() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="spotify-case-study cetr-case-study">
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

export default CETRCaseStudy;
