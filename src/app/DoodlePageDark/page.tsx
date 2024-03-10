"use client";
import React, { useState, useEffect } from 'react';
import Landing from '@/components/DoodlePageDark/landing';
import Loader from '@/components/DoodlePageDark/loader';
import styles from "../../styles/DoodlePageDark/style.module.css"
import About from '@/components/DoodlePage/aboutme';
import Skills from '@/components/DoodlePage/skills';
import Experience from '@/components/DoodlePage/experience';
import Projects from '@/components/DoodlePage/projects';
import Badges from '@/components/DoodlePage/badges';
import Certificates from '@/components/DoodlePage/certificates';
import Testimonial from '@/components/DoodlePage/testimonial';

const DoodlePageDark: React.FC = () => {
  const [contentLoaded, setContentLoaded] = useState(false);
  const [activeTag, setActiveTag] = useState("My Narrative");

  useEffect(() => {
    const handleLoad = () => {
      setContentLoaded(true);
    };
    window.addEventListener('load', handleLoad);
    const delay = setTimeout(() => {
      setContentLoaded(true);
    }, 2000);
    return () => {
      clearTimeout(delay);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const tags = [
    { name: "My Narrative", component: <About /> },
    { name: "Skills Extravaganza", component: <Skills /> },
    { name: "Work Voyage", component: <Experience /> },
    { name: "My Creations", component: <Projects /> },
    { name: "My Repository", component: <Badges /> },
    { name: "My Token", component: <Certificates /> },
    { name: "Social Engagement", component: <Testimonial /> },
    // Add other tags and components as needed
  ];

  const handleTagClick = (tagName: any) => {
    setActiveTag(tagName === activeTag ? null : tagName);
  };

  const getTagClassName = (tagName: any) => {
    return `${styles.dm} text-2xl z-30 px-4 py-2 transition-all cursor-pointer hover:scale-95 ${
      activeTag === tagName ? styles.purplegradtext : styles.greengradtext
    } ${styles.purplegradborder}`;
  };

  return (
    <>
      {!contentLoaded && <Loader />}

      {contentLoaded && (
        <div className="main w-full flex flex-col min-h-screen h-full bg-black">
          <Landing />
          <div className="flex flex-row justify-center gap-4 w-full px-20 pb-60 items-center flex-wrap">
            {tags.map(({ name }) => (
              <div
                key={name}
                onClick={() => handleTagClick(name)}
                className={getTagClassName(name)}
              >
                {name}
              </div>
            ))}
          </div>
          {tags.map(({ name, component }) => (
            activeTag === name && (
              <div key={name} className="selected-component">
                {component}
              </div>
            )
          ))}
        </div>
      )}
    </>
  );
};

export default DoodlePageDark;
