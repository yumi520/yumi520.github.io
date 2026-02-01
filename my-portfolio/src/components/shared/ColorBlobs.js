import React from 'react';
import '../../stylesheet/ColorBlobs.css';

/**
 * ColorBlobs component - adds subtle blurred pastel color blobs as background decoration
 * Use this component on pages to add visual interest with soft, pastel colors
 */
function ColorBlobs() {
    return (
        <div className="color-blobs-container">
            <div className="color-blob blob-1"></div>
            <div className="color-blob blob-2"></div>
            <div className="color-blob blob-3"></div>
            <div className="color-blob blob-4"></div>
        </div>
    );
}

export default ColorBlobs;
