"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/DoodlePage/style.module.css';
import Link from 'next/link';
import badgeData from "../../helpers/badges"


const Badges: React.FC = () => {

    return (
        <>

            <div className="flex flex-col items-center justify-start pb-20 lg:mt-20 px-[40px] lg:px-[60px]">
                <div className={`flex flex-col relative w-full items-center scale-50 lg:scale-100 ${styles.anim1}`}>
                    <img src="https://www.dropbox.com/scl/fi/qp30gepl98pdihzjo3h4f/Group-1.png?rlkey=l0qe1jjslbrieiiqhdra900ih&dl=1" className="absolute top-[30%] left-[50%] h-[7rem] w-[18rem] -translate-x-1/2 -translate-y-1/2" />
                    <p className={`text-white text-5xl z-20 ${styles.pang}`}>Mastery</p>
                </div>
                <h1 className={`text-6xl lg:text-[120px] text-black ${styles.lond} ${styles.anim2} font-black`}>Tokens</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-4 lg:gap-y-12 mt-12 cursor-pointer transition-all">
                {badgeData.map((badge, index) => (
                    <Link key={index} href={badge.badgeLink} className="relative grid place-items-center shadow-md border-8 border-black rounded-full group hover:-translate-y-5 transition-all h-64 w-64 border-double" target='blank'>
                        <img src={badge.badgeImageLink} alt="" className='grayscale h-44 -mt-4 transition-all group-hover:scale-105' />
                        <div className="absolute top-[10%] translate-y-[-85%] left-[10%] origin-bottom -rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] left-[10%] origin-bottom -rotate-[50deg] h-10 w-6 bg-black"></div>
                        <div className="absolute top-[10%] translate-y-[-85%] right-[10%] origin-bottom rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] right-[10%] origin-bottom rotate-[50deg] h-10 w-6 bg-black"></div>
                    </Link>
                ))}
                </div>
            </div>
        </>
    );
};

export default Badges;
