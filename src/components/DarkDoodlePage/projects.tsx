"use client";
import React from 'react';
import styles from '../../styles/DoodlePage/style.module.css';
import Link from 'next/link';

const Projects: React.FC = () => {
    return (
        <>
            <div className="mt-8 flex flex-col items-center justify-start pb-20 px-[20px] lg:px-[60px]">
                <div className={`flex flex-col relative w-full items-center scale-50 lg:scale-100 ${styles.anim1}`}>
                    <img src="https://www.dropbox.com/scl/fi/b21fen5gwrdcuf3h57a2b/Group-1.png?rlkey=tu5pfc4w48fnepr2dszosbayl&dl=1" className="absolute top-[40%] left-[50%] h-[5rem] w-[7rem] -translate-x-1/2 -translate-y-1/2" />
                    <p className={`text-white text-5xl z-20 ${styles.pang}`}>My</p>
                </div>
                <h1 className={`text-6xl lg:text-[120px] text-black ${styles.lond} ${styles.anim2} font-black`}>Creations</h1>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-4 mt-12 cursor-pointer transition-all">

                    <Link href={'https://github.com/Anshika75/WebMindz'} className="relative flex flex-col items-start justify-start w-full px-4 py-4 shadow-md border-4 border-black rounded-lg group hover:-translate-y-5 transition-all" target='blank'>
                        <img src="https://www.dropbox.com/scl/fi/96c1kuabei76hezk7o6dy/Picture4.png?rlkey=25lo7if8p4nym9u4t9y5wy78f&dl=1" alt="" className='grayscale  transition-all group-hover:scale-105' />
                        <h1 className={`text-2xl text-black font-bold mt-4 ${styles.perm}`}>WebMindz</h1>
                        <p className={`text-black ${styles.pang} text-sm`}>NExtjs, Tailwind, Firebase Auth, API</p>
                        <p className={`text-lg text-black mt-2 ${styles.indi} text-justify`}>Empowering the visually impaired, our AI chatbot offers conversion, gaming, and translation, envisioning a user-friendly world without sight.</p>
                        <div className='flex text-black w-full justify-between mt-3'>
                            <i className={`${styles.pang}`}>#advance</i>
                            <p className={`text-black text-right font-black text-lg ${styles.pang} underline ${styles.anim1}`}>Get Glimpse</p>
                        </div>
                        <div className="absolute top-0 translate-y-[-85%] left-[30%] h-10 w-6 bg-[#555] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] left-[30%] h-10 w-6 bg-black"></div>
                        <div className="absolute top-0 translate-y-[-85%] right-[30%] h-10 w-6 bg-[#555] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] right-[30%] h-10 w-6 bg-black"></div>
                    </Link>

                    <Link href={'https://github.com/Anshika75/Maggi-Album?tab=readme-ov-file'} className="relative flex flex-col items-start justify-start w-full px-4 py-4 shadow-md border-4 border-black rounded-lg group hover:-translate-y-5 transition-all" target='blank'>
                        <img src="https://www.dropbox.com/scl/fi/yp2jx5xdabz8e6pgeskzc/Picture1.png?rlkey=zsok9zvv8idlb8oc174zqcz63&dl=1" alt="" className='grayscale  transition-all group-hover:scale-105' />
                        <h1 className={`text-2xl text-black font-bold mt-4 ${styles.perm}`}>Maggi Album</h1>
                        <p className={`text-black ${styles.pang} text-sm`}>React, Tailwind, Firebase</p>
                        <p className={`text-lg text-black mt-2 ${styles.indi} text-justify`}>An open platform to cherish and save your precious moments. Immerse yourself in a world where memories unfold.</p>
                        <div className='flex text-black w-full justify-between mt-3'>
                            <i className={`${styles.pang}`}>#advance</i>
                            <p className={`text-black text-right font-black text-lg ${styles.pang} underline ${styles.anim1}`}>Get Glimpse</p>
                        </div>
                        <div className="absolute top-0 translate-y-[-85%] left-[30%] h-10 w-6 bg-[#555] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] left-[30%] h-10 w-6 bg-black"></div>
                        <div className="absolute top-0 translate-y-[-85%] right-[30%] h-10 w-6 bg-[#555] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] right-[30%] h-10 w-6 bg-black"></div>
                    </Link>

                    <Link href={'https://github.com/Anshika75/Maggi-Weather'} className="relative flex flex-col items-start justify-start w-full px-4 py-4 shadow-md border-4 border-black rounded-lg group hover:-translate-y-5 transition-all" target='blank'>
                        <img src="https://www.dropbox.com/scl/fi/6rvksf1untwq36ox0cw53/Picture2.png?rlkey=ithg982uum1g6s7xd5yq9nmjm&dl=1" alt="" className='grayscale  transition-all group-hover:scale-105' />
                        <h1 className={`text-2xl text-black font-bold mt-4 ${styles.perm}`}>Maggi Weather</h1>
                        <p className={`text-black ${styles.pang} text-sm`}>React, Tailwind, API</p>
                        <p className={`text-lg text-black mt-2 ${styles.indi} text-justify`}>Web app offering hourly and weekly weather updates for different cities. Enjoy distinct UI experiences throughout the day.</p>
                        <div className='flex text-black w-full justify-between mt-3'>
                            <i className={`${styles.pang}`}>#advance</i>
                            <p className={`text-black text-right font-black text-lg ${styles.pang} underline ${styles.anim1}`}>Get Glimpse</p>
                        </div>
                        <div className="absolute top-0 translate-y-[-85%] left-[30%] h-10 w-6 bg-[#555] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] left-[30%] h-10 w-6 bg-black"></div>
                        <div className="absolute top-0 translate-y-[-85%] right-[30%] h-10 w-6 bg-[#555] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] right-[30%] h-10 w-6 bg-black"></div>
                    </Link>

                    <Link href={'https://github.com/Anshika75/Maggi-Hub'} className="relative flex flex-col items-start justify-start w-full px-4 py-4 shadow-md border-4 border-black rounded-lg group hover:-translate-y-5 transition-all" target='blank'>
                        <img src="https://www.dropbox.com/scl/fi/8d11r9ektuuhkpapmc6sa/Picture3.png?rlkey=x11vsmkad808w1yzrv5agamuo&dl=1" alt="" className='grayscale  transition-all group-hover:scale-105' />
                        <h1 className={`text-2xl text-black font-bold mt-4 ${styles.perm}`}>Maggi Hub</h1>
                        <p className={`text-black ${styles.pang} text-sm`}>React, Tailwind,</p>
                        <p className={`text-lg text-black mt-2 ${styles.indi} text-justify`}>Indulge in a culinary journey with 'Maggi Hub,' a food website serving a diverse range of delicacies to elevate your new year celebrations.</p>
                        <div className='flex text-black w-full justify-between mt-3'>
                            <i className={`${styles.pang}`}>#advance</i>
                            <p className={`text-black text-right font-black text-lg ${styles.pang} underline ${styles.anim1}`}>Get Glimpse</p>
                        </div>
                        <div className="absolute top-0 translate-y-[-85%] left-[30%] h-10 w-6 bg-[#555] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] left-[30%] h-10 w-6 bg-black"></div>
                        <div className="absolute top-0 translate-y-[-85%] right-[30%] h-10 w-6 bg-[#555] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] right-[30%] h-10 w-6 bg-black"></div>
                    </Link>
                </div>
                <Link href={'/DoodlePageProjects'} className={`flex flex-col relative w-full mt-12 items-center transition-all opacity-80 hover:opacity-100 hover:scale-95`}>
                <img src="https://www.dropbox.com/scl/fi/ezi8w9x1a9ro2drli15hf/Group-5.png?rlkey=j19qmjvz2gjd6d5b62ifh6phg&dl=1" className="absolute top-[50%] left-[50%] h-[4rem] w-[12rem] -translate-x-1/2 -translate-y-1/2" />
                    <p className={`text-white text-2xl z-20 ${styles.pang}`}>Dig More</p>
                </Link>
            </div>
        </>
    );
};

export default Projects;
