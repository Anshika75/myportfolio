"use client";
import React from 'react';
import styles from '../../styles/DarkDoodlePage/style.module.css';

const Landing: React.FC = () => {
    const style: Record<string, React.CSSProperties> = {
        container: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            backgroundImage: 'url("https://www.dropbox.com/scl/fi/9haa6adhe3d37ix8miula/Black-White-Scrapbook-Monochrome-Group-Project-Presentation-3-1.png?rlkey=q9syw4ugwa78eew74aickff04&dl=1")',
            backgroundSize: 'cover',
            overflow: 'hidden',
            WebkitBackgroundSize: '100% 100%',
        },
    };

    return (
        <>
            <div style={style.container} className='h-[50vh] lg:min-h-[100vh]'>
                <div className="h-[50vh] lg:min-h-screen flex flex-col w-full items-center justify-center">
                    <div className="flex w-full mt-2 lg:mt-16 justify-center lg:px-60">
                        <div className="hidden lg:flex flex-col items-center w-[30%]">
                            <a href="" className={`cursor-pointer hover:animate-none animate-pulse z-20 bg-[#FF407A] w-32 text-center rounded-full my-6 text-white py-4 px-2 rotate-12 ${styles.balsamiq}`}>About</a>
                            <a href="" className={`cursor-pointer hover:animate-none animate-pulse z-20 bg-[#4F66FF] w-32 text-center rounded-full my-6 text-white py-4 px-2 ${styles.balsamiq}`}>Skills</a>
                            <a href="" className={`cursor-pointer hover:animate-none animate-pulse z-20 bg-[#9b3eff] w-32 text-center rounded-full my-6 text-white py-4 px-2 rotate-[-12deg] ${styles.balsamiq}`}>Experience</a>
                        </div>
                        <div className="relative w-full flex flex-col justify-center items-center">
                            <p className={`z-20 text-[#8E8E8E] lg:text-3xl font-black ${styles.balsamiq} ${styles.anim1}`}>Welcome to my</p>
                            <h1 className={`z-20 text-[#d4d4d4] text-6xl lg:text-[120px] ${styles.caveat} ${styles.anim2}`}>DoodleVerse</h1>
                        </div>
                        <div className="hidden lg:flex flex-col items-center w-[30%]">
                            <a href="" className={`cursor-pointer hover:animate-none animate-pulse z-20 bg-[#FF407A] w-32 text-center rounded-full my-6 text-white py-4 px-2 rotate-[-12deg] ${styles.balsamiq}`}>Projects</a>
                            <a href="" className={`cursor-pointer hover:animate-none animate-pulse z-20 bg-[#4F66FF] w-32 text-center rounded-full my-6 text-white py-4 px-2 ${styles.balsamiq}`}>Testimonials</a>
                            <a href="" className={`cursor-pointer hover:animate-none animate-pulse z-20 bg-[#9b3eff] w-32 text-center rounded-full my-6 text-white py-4 px-2 rotate-[12deg] ${styles.balsamiq}`}>Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Landing;
