"use client";
import React from 'react';
import styles from '../../styles/DoodlePage/style.module.css';

const Volunteer: React.FC = () => {
    return (
        <>
            <div className="mt-8 flex flex-col items-center justify-start px-[20px] lg:px-[60px] pb-20">
                <div className={`flex flex-col relative w-full items-center scale-50 lg:scale-100 ${styles.anim1}`}>
                    <img src="https://www.dropbox.com/scl/fi/agtff80wi8cl7k8p8he1b/Vector-8.png?rlkey=ae6rlaqg45h15l2zu4579gc13&dl=1" className="absolute top-[35%] left-[50%] h-[7rem] w-[15rem] -translate-x-1/2 -translate-y-1/2" />
                    <p className={`text-white text-5xl z-20 ${styles.pang}`}>Social</p>
                </div>
                <h1 className={`text-6xl lg:text-[120px] -mt-4 text-black ${styles.lond} ${styles.anim2} font-black`}>Engagement</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 w-full mt-12">
                    <div className="relative flex flex-col justify-center items-center py-5 px-3 w-full border-4 border-black rounded-lg">
                        <p className={`text-black z-20 ${styles.perm} text-3xl lg:text-4xl text-center`}>Peer tO Peer Bootcamp Series</p>
                        <p className={`text-black z-20 ${styles.pang} text-lg mt-3`}>Frontend Developement Speaker | 6-8 Aug, 24 · 3 days</p>
                    </div>
                    <div className="relative flex flex-col justify-center items-center py-5 px-3 w-full border-4 border-black rounded-lg">
                        <p className={`text-black z-20 ${styles.perm} text-3xl lg:text-4xl text-center`}>Insights of Corporate</p>
                        <p className={`text-black z-20 ${styles.pang} text-lg mt-3`}>Session Speaker | 25 Jul, 24 · 1 day</p>
                    </div>
                    <div className="relative flex flex-col justify-center items-center py-5 px-3 w-full border-4 border-black rounded-lg">
                        <p className={`text-black z-20 ${styles.perm} text-3xl lg:text-4xl text-center`}>Google Cloud Community India</p>
                        <p className={`text-black z-20 ${styles.pang} text-lg mt-3`}>Google Cloud Arcade Facilitator | Jun 2023 - Aug 2023 · 3 mos</p>
                    </div>
                    <div className="relative flex flex-col justify-center items-center py-5 px-3 w-full border-4 border-black rounded-lg">
                        <p className={`text-black z-20 ${styles.perm} text-3xl lg:text-4xl text-center`}>Jeevan Pradata Foundation - NGO</p>
                        <p className={`text-black z-20 ${styles.pang} text-lg mt-3`}>Frontend Developer | Jun 2023 - Oct 2023 · 5 mos</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Volunteer;
