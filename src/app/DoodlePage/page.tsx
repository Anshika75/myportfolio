"use client";
import React, { useState, useEffect } from 'react';
import Landing from '@/components/DoodlePage/landing';
import About from '@/components/DoodlePage/aboutme';
import Skills from '@/components/DoodlePage/skills';
import Experience from '@/components/DoodlePage/experience';
import Projects from '@/components/DoodlePage/projects';
import Volunteer from '@/components/DoodlePage/volunteer';
import Testimonial from '@/components/DoodlePage/testimonial';
import Stats from '@/components/DoodlePage/stats';
import Hobbies from '@/components/DoodlePage/hobbies';
import Achievements from '@/components/DoodlePage/achievments';
import Languages from '@/components/DoodlePage/languages';
import Contact from '@/components/DoodlePage/contact';
import Loader from '@/components/DoodlePage/loader';
import Badges from '@/components/DoodlePage/badges';
import Events from '@/components/DoodlePage/event';
import Certificates from '@/components/DoodlePage/certificates';

const DoodlePageDark: React.FC = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

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

  return (
    <>
      {!contentLoaded && <Loader />}

      {contentLoaded && (
        <div className="main w-full flex flex-col min-h-screen bg-white">
          <Landing/>
          <About/>
          <Skills />
          <Experience />
          <Projects />
          <Certificates/>
          <Badges />
          <Volunteer />
          <Events/>
          <Stats />
          <Testimonial />
          <Hobbies />
          <Achievements />
          <Languages />
          <Contact />
        </div>
      )}
    </>
  );
};

export default DoodlePageDark;
