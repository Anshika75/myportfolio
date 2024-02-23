"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/DoodlePage/style.module.css';

const Events: React.FC = () => {
    return (
        <>

            <div className="flex flex-col items-center justify-start pb-40 lg:mt-40 px-[60px]">
                <div className={`flex flex-col relative w-full items-center scale-50 lg:scale-100 ${styles.anim1}`}>
                    <img src="https://www.dropbox.com/scl/fi/robamf6w8rdfpfohd0ve1/Group-2.png?rlkey=qdhl8zjqzqfaox4rhjrk57tdc&dl=1" className="absolute top-[70%] left-[50%] h-[7rem] w-[13rem] -translate-x-1/2 -translate-y-1/2 rotate-12" />
                    <p className={`text-white text-5xl z-20 ${styles.pang}`}>My</p>
                </div>
                <p className={`text-6xl lg:text-[120px] text-black ${styles.lond} ${styles.anim2} font-black`}>Feats</p>
                <div
                    className={`grid w-full pt-16 lg:pt-20 lg:grid-cols-4 grid-cols-1 gap-12`}
                >
                    {/* Project Counter */}
                    <div className="flex flex-col items-center justify-center relative py-20">
                        <img src="https://www.dropbox.com/scl/fi/o6gcks068k2hcc8be94cq/Vector-10.png?rlkey=06i6l4l24leo9innx4a17prtd&dl=1" className='absolute top-0 left-0 w-full h-full' alt="" />
                        <p id="projectCounter" className={`text-3xl lg:text-5xl text-white z-20 text-center ${styles.perm}`}>
                            Hello
                        </p>
                        <p className={`text-2xl lg:text-4xl mt-3 text-white z-20 text-center ${styles.pang}`}>
                            Projects
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Events;
