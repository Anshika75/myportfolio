"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/ThemeSelector/styles.module.css';
import themes from '../../helpers/theme';

interface Theme {
  name: string;
  imgSrc: string;
  description: string;
  id: number;
  url: string;
}

const ThemeSelector: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);

  const closeAlert = () => {
    setShowAlert(false);
  };


  return (
    <main className={`p-[20px] lg:p-[50px] ${styles.bg}`}>
      <div className={styles.mainoverlay}></div>
      <div className="flex flex-col items-center">
        {showAlert && (
          <div className={styles.overlay}>
            <div className={`z-20 ${styles.alert}`}>
              <div className={styles.alertContent}>
                <p>Only Terminal Mode and Doodle Mode Available for now. Please wait for a while to load all the graphics and best UI experience.</p>
                <button className={styles.btn} onClick={closeAlert}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        <div className={styles.head}>
          <p className='text-[25px] lg:text-[90px] opacity-75 text-white'>Enter the Enclave</p>
        </div>
        <h2 className={styles.sub}>
          <p className='text-[15px] lg:text-[35px] lg:-mt-[20px] opacity-75 text-white'>Plunge into Creative Realms</p>
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-12 place-items-center mt-12 px-4'>
          {themes.map((theme: Theme) => (
            <Link key={theme.id} href={theme.url} className='text-center'>
              <div className="box transition-all hover:scale-110 flex flex-col items-center pb-5 px-5 bg-[#3335] shadow-[0_0px_60px_-10px_rgba(51,51,51,1)] border-[2px] border-[#3335] rounded-xl">
                <img src={theme.imgSrc} className='h-36 w-36' alt="" />
                <p className={`flex flex-col opacity-75 items-center ${styles.sub} text-[20px] text-white`}>
                  {theme.name}
                </p>
                <p className={`text-[14px] mt-4 opacity-75 text-justify ${styles.text} text-white`}>{theme.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ThemeSelector;
