import React, { useState } from 'react';
import '../../stylesheet/ImageCarousel.css';

/**
 * ImageCarousel Component
 * 
 * A simple image carousel with navigation arrows that fits within playground cards
 * 
 * Props:
 * - images: Array of image objects with { src, alt } properties
 */
function ImageCarousel({ images = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) {
        return null;
    }

    if (images.length === 1) {
        return (
            <img 
                src={images[0].src} 
                className="playground-image" 
                alt={images[0].alt || "Image"} 
            />
        );
    }

    const goToPrevious = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="image-carousel-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="image-carousel-container">
                <button 
                    className="image-carousel-arrow image-carousel-arrow-left"
                    onClick={goToPrevious}
                    aria-label="Previous image"
                >
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 9L4.5 6L7.5 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <div 
                    className="image-carousel-slides"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div 
                            key={index} 
                            className="image-carousel-slide"
                        >
                            <img 
                                src={image.src} 
                                className="playground-image" 
                                alt={image.alt || `Image ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
                <button 
                    className="image-carousel-arrow image-carousel-arrow-right"
                    onClick={goToNext}
                    aria-label="Next image"
                >
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 9L7.5 6L4.5 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <div className="image-carousel-dots">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`image-carousel-dot ${index === currentIndex ? 'active' : ''}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ImageCarousel;
