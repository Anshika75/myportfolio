"use client";
import React from 'react';
import styles from '../../../styles/DoodlePage/style.module.css';

const Stats: React.FC = () => {
    return (
        <>
            <div className={`grid grid-cols-1 lg:grid-cols-4 pt-24 px-[20px] lg:px-[60px] ${styles.skillGrid}`}>
                <div className="flex flex-col items-center justify-center">
                    <h1 className={`text-5xl text-black text-center ${styles.perm}`}>20+</h1>
                    <h1 className={`text-4xl mt-3 text-black text-center ${styles.pang}`}>Projects</h1>
                </div>
                <img src="https://www.dropbox.com/scl/fi/j3gr17tkdmqtddmi2o2qh/Vector-4.png?rlkey=g8ukmf2jlrobmthg1izwks9ht&dl=1" className='h-44 w-4 hidden lg:block' alt="" />
                <div className="flex flex-col items-center justify-center">
                    <h1 className={`text-5xl text-black text-center ${styles.perm}`}>400+</h1>
                    <h1 className={`text-4xl mt-3 text-black text-center ${styles.pang}`}>Connections</h1>
                </div>
                <img src="https://www.dropbox.com/scl/fi/j3gr17tkdmqtddmi2o2qh/Vector-4.png?rlkey=g8ukmf2jlrobmthg1izwks9ht&dl=1" className='h-44 w-4 hidden lg:block' alt="" />
                <div className="flex flex-col items-center justify-center">
                    <h1 className={`text-5xl text-black text-center ${styles.perm}`}>4yr+</h1>
                    <h1 className={`text-4xl mt-3 text-black text-center ${styles.pang}`}>Experience</h1>
                </div>
                <img src="https://www.dropbox.com/scl/fi/j3gr17tkdmqtddmi2o2qh/Vector-4.png?rlkey=g8ukmf2jlrobmthg1izwks9ht&dl=1" className='h-44 w-4 hidden lg:block' alt="" />
                <div className="flex flex-col items-center justify-center">
                    <h1 className={`text-5xl text-black text-center ${styles.perm}`}>25+</h1>
                    <h1 className={`text-4xl mt-3 text-black text-center ${styles.pang}`}>Endorsed Skils</h1>
                </div>

            </div>
        </>
    );
};

export default Stats;
