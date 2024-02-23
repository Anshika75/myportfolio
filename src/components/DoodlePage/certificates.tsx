"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/DoodlePage/style.module.css';
import Link from 'next/link';
const Certificates: React.FC = () => {
    return (
        <>

            <div className="flex flex-col items-center justify-start lg:mt-16 px-[25px] lg:px-[60px]">
                <div className={`flex flex-col relative w-full items-center scale-50 lg:scale-100 ${styles.anim1}`}>
                    <img src="https://www.dropbox.com/scl/fi/4xkn7jw7do3oik1qkfhr5/Vector-13.png?rlkey=53uezgn1xwt7bv1ogi16yunzp&dl=1" className="absolute top-[30%] left-[50%] h-[7rem] w-[18rem] -translate-x-1/2 -translate-y-1/2" />
                    <p className={`text-white text-4xl z-20 ${styles.pang}`}>Certification</p>
                </div>
                <h1 className={`text-6xl lg:text-[120px] text-black ${styles.lond} ${styles.anim2} font-black`}>Repository</h1>
                <div
                    className={`grid w-full pb-4 lg:pt-8 mt-8 grid-cols-1 gap-4`}
                >
                    <Link href='https://www.linkedin.com/learning/certificates/e5c81cad326867fa2577fc12b7ce39a3517cd4df597c87302b8ca2a7491f2747' className="flex flex-row items-center justify-between relative transition-all hover:scale-[0.92] scale-[0.9] cursor-pointer py-4 px-4 w-full border-4 border-black rounded-[75px]">
                        <div className="rounded-full lg:h-5 h-4 w-4 lg:w-5 bg-black relative before:absolute before:top-1/2 before:left-1/2 before:h-32 before:w-1 lg:before:w-2 before:-translate-x-1/2 before:rounded-3xl before:-translate-y-1/2 before:bg-black"></div>
                        <p className={`text-sm lg:text-3xl text-black z-20 text-center ${styles.pang}`}>
                            Introduction to Graphic Design: Concepts
                        </p>
                        <div className="rounded-full lg:h-5 h-4 w-4 lg:w-5 bg-black relative before:absolute before:top-1/2 before:left-1/2 before:h-32 before:w-1 lg:before:w-2 before:-translate-x-1/2 before:rounded-3xl before:-translate-y-1/2 before:bg-black"></div>
                    </Link>
                    <Link href='https://www.linkedin.com/learning/certificates/f14717b8c703499d3c88a7abcaa86a37f53fe6b96e62de1bafd5c3440dc7eb9c' className="flex flex-row items-center justify-between relative transition-all hover:scale-[0.92] scale-[0.9] cursor-pointer py-4 px-4 w-full border-4 border-black rounded-[75px]">
                        <div className="rounded-full lg:h-5 h-4 w-4 lg:w-5 bg-black relative before:absolute before:top-1/2 before:left-1/2 before:h-32 before:w-1 lg:before:w-2 before:-translate-x-1/2 before:rounded-3xl before:-translate-y-1/2 before:bg-black"></div>
                        <p className={`text-sm lg:text-3xl text-black z-20 text-center ${styles.pang}`}>
                            Graphic Design Foundations: Typography
                        </p>
                        <div className="rounded-full lg:h-5 h-4 w-4 lg:w-5 bg-black relative before:absolute before:top-1/2 before:left-1/2 before:h-32 before:w-1 lg:before:w-2 before:-translate-x-1/2 before:rounded-3xl before:-translate-y-1/2 before:bg-black"></div>
                    </Link>
                    <Link href='https://www.linkedin.com/learning/certificates/54b0c826b5e0cbb93dc7922358cf1b96bc0410f91de9331967a9e07e40dfd24d' className="flex flex-row items-center justify-between relative transition-all hover:scale-[0.92] scale-[0.9] cursor-pointer py-4 px-4 w-full border-4 border-black rounded-[75px]">
                        <div className="rounded-full lg:h-5 h-4 w-4 lg:w-5 bg-black relative before:absolute before:top-1/2 before:left-1/2 before:h-32 before:w-1 lg:before:w-2 before:-translate-x-1/2 before:rounded-3xl before:-translate-y-1/2 before:bg-black"></div>
                        <p className={`text-sm lg:text-3xl text-black z-20 text-center ${styles.pang}`}>
                            Graphic Design Foundations: Layout and Composition
                        </p>
                        <div className="rounded-full lg:h-5 h-4 w-4 lg:w-5 bg-black relative before:absolute before:top-1/2 before:left-1/2 before:h-32 before:w-1 lg:before:w-2 before:-translate-x-1/2 before:rounded-3xl before:-translate-y-1/2 before:bg-black"></div>
                    </Link>
                </div>

                <Link href={'/DoodlePageCertificates'} className={`flex flex-col relative w-full my-12 items-center transition-all opacity-80 hover:opacity-100 hover:scale-95`}>
                    <img src="https://www.dropbox.com/scl/fi/ezi8w9x1a9ro2drli15hf/Group-5.png?rlkey=j19qmjvz2gjd6d5b62ifh6phg&dl=1" className="absolute top-[50%] left-[50%] h-[4rem] w-[12rem] -translate-x-1/2 -translate-y-1/2" />
                    <p className={`text-white text-2xl z-20 ${styles.pang}`}>Dig More</p>
                </Link>
            </div>
        </>
    );
};

export default Certificates;
