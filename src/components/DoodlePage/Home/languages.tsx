"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/DoodlePage/style.module.css';

const Languages: React.FC = () => {

    return (
        <>

            <div className="flex flex-col items-center justify-start pb-20 lg:pb-40 lg:mt-20 px-[40px] lg:px-[60px]">
                <div className={`flex flex-col relative w-full items-center scale-50 lg:scale-100 ${styles.anim1}`}>
                    <img src="https://www.dropbox.com/scl/fi/robamf6w8rdfpfohd0ve1/Group-2.png?rlkey=qdhl8zjqzqfaox4rhjrk57tdc&dl=1" className="absolute top-[70%] left-[50%] h-[7rem] w-[13rem] -translate-x-1/2 -translate-y-1/2 rotate-12" />
                    <p className={`text-white text-5xl z-20 ${styles.pang}`}>My</p>
                </div>
                <h1 className={`text-6xl lg:text-[120px] text-black ${styles.lond} ${styles.anim2} font-black`}>Leisures</h1>
                <div className={`grid w-full pt-16 lg:pt-20 lg:grid-cols-4 grid-cols-1 gap-12`}>
                    <div className="flex flex-col items-center justify-center relative py-20 pt-28 pb-16 cursor-pointer transition-all hover:-translate-y-5">
                        <img src="https://www.dropbox.com/scl/fi/4553rw10klwzh6q5ci3dj/Group-5-2.png?rlkey=tvkxlnesroebganb35d2ck5qt&dl=1" className='absolute top-0 left-0 w-full h-full' alt="" />
                        <img src="https://www.dropbox.com/scl/fi/14o6x44o8pr9fevaxu6ib/Group-19.png?rlkey=h8q2ojvbful41j57636qlimka&dl=1" className='w-28 scale-75 lg:scale-100 z-20' alt="" />
                        <h1 className={`text-2xl lg:text-4xl mt-3 text-white z-20 text-center ${styles.pang}`}>
                        Lyricism
                        </h1>
                    </div>
                    <div className="flex flex-col items-center justify-center relative py-20 pt-28 pb-16 cursor-pointer transition-all hover:-translate-y-5">
                        <img src="https://www.dropbox.com/scl/fi/4553rw10klwzh6q5ci3dj/Group-5-2.png?rlkey=tvkxlnesroebganb35d2ck5qt&dl=1" className='absolute top-0 left-0 w-full h-full' alt="" />
                        <img src="https://www.dropbox.com/scl/fi/ohj4545wtn25tvsemcnb4/Vector-103.png?rlkey=i9merm7qgk9huj5jn48ovo0jm&dl=1" className='h-24 scale-75 lg:scale-100 z-20' alt="" />
                        <h1 className={`text-2xl lg:text-4xl mt-3 text-white z-20 text-center ${styles.pang}`}>
                        Text Crafting
                        </h1>
                    </div>
                    <div className="flex flex-col items-center justify-center relative py-20 pt-28 pb-16 cursor-pointer transition-all hover:-translate-y-5">
                        <img src="https://www.dropbox.com/scl/fi/4553rw10klwzh6q5ci3dj/Group-5-2.png?rlkey=tvkxlnesroebganb35d2ck5qt&dl=1" className='absolute top-0 left-0 w-full h-full' alt="" />
                        <img src="https://www.dropbox.com/scl/fi/xo01kporb3chv6z7uj3rt/mic-2.png?rlkey=c9dievcqx6d2pp87xxr8swl1l&dl=1" className='h-24 scale-75 lg:scale-100 z-20' alt="" />
                        <h1 className={`text-2xl lg:text-4xl mt-3 text-white z-20 text-center ${styles.pang}`}>
                        Oratory
                        </h1>
                    </div>
                    <div className="flex flex-col items-center justify-center relative py-20 pt-28 pb-16 cursor-pointer transition-all hover:-translate-y-5">
                        <img src="https://www.dropbox.com/scl/fi/4553rw10klwzh6q5ci3dj/Group-5-2.png?rlkey=tvkxlnesroebganb35d2ck5qt&dl=1" className='absolute top-0 left-0 w-full h-full' alt="" />
                        <img src="https://www.dropbox.com/scl/fi/yu2om9zk16to76jzb459h/Vector-2.png?rlkey=7ilb07ewxwf0yzm6eb5d5yx4l&dl=1" className='h-24 scale-75 lg:scale-100 z-20' alt="" />
                        <h1 className={`text-2xl lg:text-4xl mt-3 text-white z-20 text-center ${styles.pang}`}>
                        Artistry
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Languages;
