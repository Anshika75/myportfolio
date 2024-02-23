"use client";
import React, { useState, useEffect } from 'react';
import Landing from '@/components/DarkDoodlePage/landing';
import About from '@/components/DarkDoodlePage/aboutme';
import Skills from '@/components/DarkDoodlePage/skills';
import Experience from '@/components/DarkDoodlePage/experience';
import Projects from '@/components/DarkDoodlePage/projects';
import Volunteer from '@/components/DarkDoodlePage/volunteer';
import Testimonial from '@/components/DarkDoodlePage/testimonial';
import Stats from '@/components/DarkDoodlePage/stats';
import Hobbies from '@/components/DarkDoodlePage/hobbies';
import Achievements from '@/components/DarkDoodlePage/achievments';
import Languages from '@/components/DarkDoodlePage/languages';
import Contact from '@/components/DarkDoodlePage/contact';
import Loader from '@/components/DarkDoodlePage/loader';
import Badges from '@/components/DarkDoodlePage/badges';
import Events from '@/components/DarkDoodlePage/event';
import Certificates from '@/components/DarkDoodlePage/certificates';

const DarkDoodlePage: React.FC = () => {
  const style: Record<string, React.CSSProperties> = {
  container: {
      width: '100%',
      backgroundImage: 'url("https://www.dropbox.com/scl/fi/qi6x3wqd7uu0gquikpcnl/Black-White-Scrapbook-Monochrome-Group-Project-Presentation-4-1.png?rlkey=sizo3jw23k04ehpuju2u6182u&dl=1")',
      overflow: 'hidden',
  },
};
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
        <div style={style.container}  className="main w-full flex flex-col min-h-screen bg-white">
          <Landing />
          <About />
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

export default DarkDoodlePage;
