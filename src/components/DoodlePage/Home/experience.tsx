"use client";
import React from 'react';
import styles from '../../../styles/DoodlePage/style.module.css';

const Experience: React.FC = () => {
    return (
        <>
            <div className="mt-8 flex flex-col items-center justify-start pb-20">
                <div className={`flex flex-col relative w-full items-center scale-50 lg:scale-100 ${styles.anim1}`}>
                    <img src="https://www.dropbox.com/scl/fi/73tbxriwqbscbqwqmi1cl/Vector-2.png?rlkey=3zglj52k4c6ughi331730icvk&dl=1" className="absolute top-[60%] left-[50%] h-[5rem] w-[7rem] -translate-x-1/2 -translate-y-1/2" />
                    <p className={`text-white text-5xl z-20 ${styles.pang}`}>My</p>
                </div>
                <h1 className={`text-6xl lg:text-[120px] -mt-4 text-black ${styles.lond} ${styles.anim2} font-black`}>Experience</h1>
                
            </div>
        </>
    );
};

export default Experience;
