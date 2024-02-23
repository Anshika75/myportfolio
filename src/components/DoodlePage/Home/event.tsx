"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/DoodlePage/style.module.css';

const Events: React.FC = () => {
    return (
        <>

            <div className="flex flex-col items-center justify-start lg:mt-16 px-[60px]">
                <div className={`flex flex-col relative w-full items-center scale-50 lg:scale-100 ${styles.anim7}`}>
                    <img src="https://www.dropbox.com/scl/fi/jtt76wbmdsdp5tekwuoep/Group.png?rlkey=bn0nvhih0n4gkugd9zfennda1&dl=1" className="absolute top-[70%] left-[50%] h-[7rem] w-[10rem] -translate-x-1/2 -translate-y-1/2" />
                    <p className={`text-white text-5xl z-20 mt-12 ${styles.pang}`}>Event</p>
                </div>
                <h1 className={`text-5xl lg:text-[120px] lg:-mt-4 text-black ${styles.lond} ${styles.anim2} font-black`}>Roster</h1>
                <div
                    className={`grid w-full pt-16 lg:pt-10 lg:grid-cols-3 grid-cols-1 gap-4`}
                >
                    <div className="flex flex-col items-center justify-center relative py-10 w-full">
                        <img src="https://www.dropbox.com/scl/fi/ph904qlgj6ms9ijx4al6j/Group-9.png?rlkey=4kbra8h0cvq39ik9cs7fovvz3&dl=1" className='absolute top-0 left-0 w-full h-full' alt="" />
                        <p className={`text-3xl lg:text-3xl text-white z-20 text-center ${styles.perm}`}>
                            HashCode
                        </p>
                        <p className={`text-2xl lg:text-4xl mt-3 text-white z-20 text-center ${styles.pang}`}>
                            2022
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center relative py-10 w-full">
                        <img src="https://www.dropbox.com/scl/fi/ph904qlgj6ms9ijx4al6j/Group-9.png?rlkey=4kbra8h0cvq39ik9cs7fovvz3&dl=1" className='absolute top-0 left-0 w-full h-full' alt="" />
                        <p className={`text-3xl lg:text-2xl text-white z-20 text-center ${styles.perm}`}>
                            &nbsp;&nbsp;Hack-The-Fest
                        </p>
                        <p className={`text-2xl lg:text-4xl mt-3 text-white z-20 text-center ${styles.pang}`}>
                            2022
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center relative py-10 w-full">
                        <img src="https://www.dropbox.com/scl/fi/ph904qlgj6ms9ijx4al6j/Group-9.png?rlkey=4kbra8h0cvq39ik9cs7fovvz3&dl=1" className='absolute top-0 left-0 w-full h-full' alt="" />
                        <p className={`text-3xl lg:text-3xl text-white z-20 text-center ${styles.perm}`}>
                            HS Day
                        </p>
                        <p className={`text-2xl lg:text-4xl mt-3 text-white z-20 text-center ${styles.pang}`}>
                            2023
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Events;
