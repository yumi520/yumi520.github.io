import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheet/Playground.css';

/**
 * Reusable PlaygroundCard component for simple design items
 * Perfect for graphic design pieces, experiments, and quick projects that don't need full case studies
 * 
 * @param {string} image - Image source path (import from assets)
 * @param {string} imageAlt - Alt text for the image
 * @param {string} title - Project/item title
 * @param {string} subtitle - Optional subtitle (e.g., dates, category)
 * @param {string} linkTo - Optional internal route path (if clicking should navigate)
 * @param {string} linkHref - Optional external URL (if clicking should open external link)
 * 
 * @example
 * // Simple card with just image and title:
 * <PlaygroundCard
 *   image={myDesignImage}
 *   imageAlt="My design piece"
 *   title="Typography Study"
 * />
 * 
 * @example
 * // Card with subtitle (dates):
 * <PlaygroundCard
 *   image={myDesignImage}
 *   imageAlt="My design piece"
 *   title="Typography Study"
 *   subtitle="May 2025"
 * />
 * 
 * @example
 * // Card with internal link:
 * <PlaygroundCard
 *   image={myDesignImage}
 *   imageAlt="My design piece"
 *   title="Typography Study"
 *   subtitle="May 2025"
 *   linkTo="/playground/typography"
 * />
 * 
 * @example
 * // Card with external link:
 * <PlaygroundCard
 *   image={myDesignImage}
 *   imageAlt="My design piece"
 *   title="Typography Study"
 *   subtitle="May 2025"
 *   linkHref="https://example.com"
 * />
 */
function PlaygroundCard({ 
    image, 
    imageAlt, 
    title,
    subtitle,
    linkTo,
    linkHref
}) {
    const cardContent = (
        <>
            <div className="playground-card-image">
                <img src={image} alt={imageAlt} />
            </div>
            <div className="playground-card-title">
                <span>Landing Card</span>
                <h3>{title}</h3>
                {subtitle && <p className="playground-card-subtitle">{subtitle}</p>}
            </div>
        </>
    );

    // If there's a link, wrap in appropriate element
    if (linkTo) {
        return (
            <Link to={linkTo} className="playground-card">
                {cardContent}
            </Link>
        );
    } else if (linkHref) {
        return (
            <a href={linkHref} className="playground-card" target="_blank" rel="noopener noreferrer">
                {cardContent}
            </a>
        );
    }

    // Otherwise, just a div
    return (
        <div className="playground-card">
            {cardContent}
        </div>
    );
}

export default PlaygroundCard;
