// src/components/Intro.js
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../stylesheet/Intro.css';
import '../stylesheet/Projects.css';
import '../stylesheet/Playground.css';
import Drawing from '../assets/portfolio-image-1 3.png';

// Project images
import SocialSpotifyScreen from '../assets/SocialSpotifyBG.png';
import CETRThumbnail from '../assets/cetr presentation/THUMBNAIL.png';
import HBP from '../assets/HBP.png';
import BCAN from '../assets/BCAN.png';
import CIC from '../assets/CiCData.png';
import f1 from '../assets/f1.png';
import f2 from '../assets/f2.png';
import f3 from '../assets/f3.png';
import f4 from '../assets/f4.png';
import f5 from '../assets/f5.png';
import ImageCarousel from './shared/ImageCarousel';

const FILTERS = [
  { key: 'dev', label: 'Dev' },
  { key: 'design', label: 'UI/UX Design' },
  { key: 'branding', label: 'Branding' },
];

const ALL_PROJECTS = [
  {
    categories: ['dev'],
    image: BCAN,
    imageAlt: 'Boston Climate Action Network',
    title: 'Boston Climate Action Network Grant Tracker',
    subtitle: 'Grant tracking portal for a climate justice nonprofit that organizes Boston residents and social justice allies.',
    designStack: [],
    techStack: ['React', 'Typescript', 'PostgreSQL'],
    linkHref: 'https://github.com/Code-4-Community/bcan',
  },
  {
    categories: ['dev'],
    image: HBP,
    imageAlt: 'HackBeanpot',
    title: 'HackBeanpot Main/Live Website',
    subtitle: 'Full-stack website for HackBeanpot, a beginner-friendly hackathon at Northeastern University.',
    designStack: [],
    techStack: ['Next.js', 'Typescript', 'TailwindCSS'],
    linkHref: 'https://www.hackbeanpot.com/',
  },
  {
    categories: ['design'],
    image: CETRThumbnail,
    imageAlt: 'Community Teaching and Research at NEU Website Redesign',
    title: 'CETR Website Redesign',
    subtitle: 'Website redesign for Community Teaching and Research at Northeastern University.',
    designStack: ['Figma'],
    techStack: [],
    linkTo: '/cetr',
  },
  {
    categories: ['design'],
    image: SocialSpotifyScreen,
    imageAlt: 'Social Spotify app',
    title: 'Social Spotify',
    subtitle: 'A mobile app concept adding social features to Spotify so music lovers can connect and discover together.',
    designStack: ['Figma', 'Mobile Design'],
    techStack: [],
    linkTo: '/spotify',
  },
  {
    categories: ['branding'],
    image: CIC,
    imageAlt: 'CIC Five Year Report cover design',
    title: 'Center for Inclusive Computing Five Year Report',
    subtitle: 'Five-year impact report design for the Center for Inclusive Computing at Northeastern.',
    designStack: ['Figma', 'InDesign'],
    techStack: [],
    linkHref: 'https://cic.northeastern.edu/wp-content/uploads/2025/05/CIC-Five-Year-Report_May-2025.pdf',
  },
  {
    categories: ['branding'],
    images: [
      { src: f1, alt: 'Gatorade Pods - Image 1' },
      { src: f2, alt: 'Gatorade Pods - Image 2' },
      { src: f3, alt: 'Gatorade Pods - Image 3' },
      { src: f4, alt: 'Gatorade Pods - Image 4' },
      { src: f5, alt: 'Gatorade Pods - Image 5' },
    ],
    imageAlt: 'Gatorade Pods',
    title: 'Gatorade Pods',
    subtitle: 'Branding and packaging concept for Gatorade Pods hydration product.',
    designStack: ['Figma', 'Illustrator', 'Photoshop'],
    techStack: [],
    hasCarousel: true,
  },
];

function Intro() {
  const location = useLocation();
  const [activeFilters, setActiveFilters] = useState([]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const scrollTo = location.state?.scrollTo || hash;
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  const toggleFilter = (key) => {
    setActiveFilters((prev) =>
      prev.includes(key) ? prev.filter((f) => f !== key) : [...prev, key]
    );
  };

  const filteredProjects =
    activeFilters.length === 0
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) =>
          p.categories.some((cat) => activeFilters.includes(cat))
        );

  return (
    <section className="intro-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi there, I'm <span className="me-animated">Yumiko!</span>
          </h1>
          <p className="hero-tagline">
            Boston-based developer and designer turning complex systems into
            accessible, human-centered software.
          </p>
        </div>
        <img src={Drawing} alt="drawing of Yumiko" className="hero-image" />
      </section>

      <div className="intro-projects-divider">
        <div className="intro-projects-divider__line" />
        <span className="intro-projects-divider__label">projects</span>
      </div>

      <section className="works-section" id="featured-design">
        <div className="project-filters">
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              className={`project-filter-btn ${activeFilters.includes(key) ? 'project-filter-btn--active' : ''}`}
              onClick={() => toggleFilter(key)}
              aria-pressed={activeFilters.includes(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="playground-grid project-list">
          {filteredProjects.map((project, index) => {
            const isCarousel = project.hasCarousel && project.images;
            const cardContent = (
              <>
                <div className={`playground-card-image-wrapper ${isCarousel ? 'playground-card-image-wrapper--no-hover' : ''}`}>
                  {isCarousel ? (
                    <ImageCarousel images={project.images} />
                  ) : (
                    <img
                      src={project.image}
                      className="playground-image"
                      alt={project.imageAlt}
                    />
                  )}
                </div>
                <div className="playground-item-title">
                  <h3>{project.title}</h3>
                  {project.subtitle && (
                    <p className="playground-item-subtitle">{project.subtitle}</p>
                  )}
                  {(project.designStack?.length || project.techStack?.length) > 0 && (
                    <div className="project-stack-tags">
                      {project.designStack?.map((tool) => (
                        <span key={tool} className="project-stack-tag project-stack-tag--design">{tool}</span>
                      ))}
                      {project.techStack?.map((tool) => (
                        <span key={tool} className="project-stack-tag project-stack-tag--tech">{tool}</span>
                      ))}
                    </div>
                  )}
                </div>
              </>
            );

            if (project.linkTo) {
              return (
                <Link
                  key={`${project.title}-${index}`}
                  to={project.linkTo}
                  className="playground-item"
                >
                  {cardContent}
                </Link>
              );
            }
            if (project.linkHref) {
              return (
                <a
                  key={`${project.title}-${index}`}
                  href={project.linkHref}
                  className="playground-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cardContent}
                </a>
              );
            }
            return (
              <div key={`${project.title}-${index}`} className={`playground-item ${isCarousel ? 'playground-item--no-hover' : ''}`}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}

export default Intro;
