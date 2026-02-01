import React from 'react';

function BasicDesignSection( { className="", h2="", p="", src="", alt=""}) {
    return(
        <section className={className}>
            <h2>{h2}</h2>
            {p && <p>{p}</p>}
            {/* <img src={src} alt={alt}></img> */}
        </section>

    );
}

export default BasicDesignSection;