"use client";
import React from 'react';
import styles from '../../styles/DoodlePageDark/style.module.css';
import Link from 'next/link';

const About: React.FC = () => {
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
            <div className="flex flex-col items-center pb-4 mt-4">
                <div className="flex flex-row justify-center items-center">
                        <h1 className={`${styles.limegradtext} ${styles.space} ${styles.limeglow} text-3xl lg:text-5xl font-bold`}>Sorceress Tale</h1>
                        <img className='w-16 -mt-8 animate-pulse' src="https://www.dropbox.com/scl/fi/4pxokcpu1tff65h4jqmyy/Frame-819-1.png?rlkey=k5p33faaub42j042m0ku608hn&dl=1" alt="" />
                </div>
            </div>
        </>
    );
};

export default About;
