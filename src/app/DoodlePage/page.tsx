"use client";
import React, { useState, useEffect } from 'react';
import Landing from '@/components/DoodlePage/Home/landing';
import About from '@/components/DoodlePage/Home/aboutme';
import Skills from '@/components/DoodlePage/Home/skills';
import Experience from '@/components/DoodlePage/Home/experience';
import Projects from '@/components/DoodlePage/Home/projects';
import Volunteer from '@/components/DoodlePage/Home/volunteer';
import Testimonial from '@/components/DoodlePage/Home/testimonial';
import Stats from '@/components/DoodlePage/Home/stats';
import Hobbies from '@/components/DoodlePage/Home/hobbies';
import Achievements from '@/components/DoodlePage/Home/achievments';
import Languages from '@/components/DoodlePage/Home/languages';
import Contact from '@/components/DoodlePage/Home/contact';
import Loader from '@/components/DoodlePage/Home/loader';

const DoodlePage: React.FC = () => {
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
          <Landing />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Volunteer />
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

export default DoodlePage;
