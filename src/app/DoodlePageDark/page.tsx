"use client";
import React, { useState, useEffect } from 'react';
import Landing from '@/components/GradientGalaxy/landing';
import Loader from '@/components/GradientGalaxy/loader';
import styles from "../../styles/DoodlePageDark/style.module.css"
import About from '@/components/GradientGalaxy/about';
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
    return `${styles.dm} text-[0.65rem] lg:text-2xl z-30 px-4 py-2 transition-all cursor-pointer hover:scale-95 ${
      activeTag === tagName ? styles.purplegradtext : styles.greengradtext
    } ${styles.purplegradborder}`;
  };

  return (
    <>
      {!contentLoaded && <Loader />}

      {contentLoaded && (
        <div className="main w-full flex flex-col items-center min-h-screen h-full bg-black">
          <Landing />
          <div className="flex flex-row justify-center gap-4 w-full px-4 lg:px-20 items-center flex-wrap">
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
          <img className='h-32 w-32 lg:h-52 lg:w-52 mt-8 lg:mt-20 animate-bounce z-20' src="https://www.dropbox.com/scl/fi/9yyu9t3r30mnd7ha3lqkv/Group-313-3-2.png?rlkey=uqc4kifrn1te6dkc98zh6znrb&dl=1" alt="" />
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
