"use client";
import React, { useState, useEffect } from 'react';
import Landing from '@/components/DoodlePageDark/landing';
import Loader from '@/components/DoodlePageDark/loader';

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
        </div>
      )}
    </>
  );
};

export default DoodlePageDark;
