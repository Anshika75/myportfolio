"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/DoodlePage/style.module.css';

const Languages: React.FC = () => {

    return (
        <>

            <div className="flex flex-col items-center justify-start pb-20 lg:mt-20 px-[40px] lg:px-[60px]">
                <div className={`flex flex-col relative w-full items-center scale-50 lg:scale-100 ${styles.anim1}`}>
                    <img src="https://www.dropbox.com/scl/fi/4xkn7jw7do3oik1qkfhr5/Vector-13.png?rlkey=53uezgn1xwt7bv1ogi16yunzp&dl=1" className="absolute top-[30%] left-[50%] h-[7rem] w-[18rem] -translate-x-1/2 -translate-y-1/2" />
                    <p className={`text-white text-5xl z-20 ${styles.pang}`}>Language</p>
                </div>
                <h1 className={`text-6xl lg:text-[120px] text-black ${styles.lond} ${styles.anim2} font-black`}>Proficiency</h1>
                <div className={`grid w-full pt-16 lg:pt-20 lg:grid-cols-4 grid-cols-1 gap-12`}>
                    <div className="flex flex-col items-center justify-center relative px-20 py-16 cursor-pointer transition-all hover:-translate-y-5">
                        <img src="https://www.dropbox.com/scl/fi/2j2tpfh3fhpffaokgui2u/Group-4.png?rlkey=dd9dmwh5wuflmqr4y7xqqdl8j&dl=1" className='absolute top-0 left-0 w-full h-full' alt="" />
                        <h1 className={`text-2xl lg:text-4xl mt-3 text-white z-20 text-center ${styles.pang}`}>
                        English
                        </h1>
                    </div>
                    <div className="flex flex-col items-center justify-center relative px-20 py-16 cursor-pointer transition-all hover:-translate-y-5">
                        <img src="https://www.dropbox.com/scl/fi/2j2tpfh3fhpffaokgui2u/Group-4.png?rlkey=dd9dmwh5wuflmqr4y7xqqdl8j&dl=1" className='absolute top-0 left-0 w-full h-full' alt="" />
                        <h1 className={`text-2xl lg:text-4xl mt-3 text-white z-20 text-center ${styles.pang}`}>
                        Hindi
                        </h1>
                    </div>
                    <div className="flex flex-col items-center justify-center relative px-20 py-16 cursor-pointer transition-all hover:-translate-y-5">
                        <img src="https://www.dropbox.com/scl/fi/2j2tpfh3fhpffaokgui2u/Group-4.png?rlkey=dd9dmwh5wuflmqr4y7xqqdl8j&dl=1" className='absolute top-0 left-0 w-full h-full' alt="" />
                        <h1 className={`text-2xl lg:text-4xl mt-3 text-white z-20 text-center ${styles.pang}`}>
                        French
                        </h1>
                    </div>
                    <div className="flex flex-col items-center justify-center relative px-20 py-16 cursor-pointer transition-all hover:-translate-y-5">
                        <img src="https://www.dropbox.com/scl/fi/2j2tpfh3fhpffaokgui2u/Group-4.png?rlkey=dd9dmwh5wuflmqr4y7xqqdl8j&dl=1" className='absolute top-0 left-0 w-full h-full' alt="" />
                        <h1 className={`text-2xl lg:text-4xl mt-3 text-white z-20 text-center ${styles.pang}`}>
                        Punjabi
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Languages;
