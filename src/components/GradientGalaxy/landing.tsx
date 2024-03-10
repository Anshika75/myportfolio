"use client";
import React from 'react';
import styles from '../../styles/DoodlePageDark/style.module.css';
import Link from 'next/link';

const Landing: React.FC = () => {
    const style: Record<string, React.CSSProperties> = {
        container: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            overflow: 'hidden',
        },
        bg: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: "url('https://i.gifer.com/QON.gif')",
            backgroundSize: 'cover',
            filter: 'blur(5px)',
            overflow: 'hidden',
        },
    };

    return (
        <>
            <div style={style.container} className='h-[70vh] lg:min-h-[100vh] bg-black'>
                <div style={style.bg} className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
                <div className="z-20 flex flex-col justify-center items-center opacity-90 mt-6">
                    <div className={`rounded-full mb-6 w-36 h-36 lg:w-60 lg:h-60 relative grid place-items-center bg-red-100`}>
                        <img className={`absolute animate-pulse w-[75%] h-[75%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-30`} src="https://www.dropbox.com/scl/fi/12q4wpy092tc6mv9urfmh/Abstract_Pink_Gamer_Girl_Gaming_Logo-removebg-preview-1.png?rlkey=tvjpg7ol90tl8jghvwniaughr&dl=1" alt="" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full h-[95%] w-[95%] bg-black z-10"></div>
                        <div className={`rounded-full p-6 w-36 h-36 lg:w-60 lg:h-60 ${styles.purplegradbg} animate-spin`}></div>
                    </div>
                    <h1 className={`${styles.space} ${styles.purplegradtext} ${styles.purpleglow} text-center text-xl lg:text-5xl lg:leading-[3.8rem] font-bold`}>Bonjour! Je suis Anshika. <br /> A Web Developer</h1>
                    <img className='w-full h-40 animate-pulse' src="https://www.dropbox.com/scl/fi/qrj152k7yunzw1zjm9ont/Frame-824.png?rlkey=gynlyleap4ryk6hwgwa708ak7&dl=1" alt="" />
                </div>
            </div>
        </>
    );
};

export default Landing;
