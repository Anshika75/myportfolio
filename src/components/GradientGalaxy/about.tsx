"use client";
import React from 'react';
import styles from '../../styles/GradientGalaxy/style.module.css';

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
            top: '-50%',
            left: 0,
            width: '100%',
            height: '150%',
            backgroundImage: "url('https://i.gifer.com/origin/79/79d54f97aa5e1b0681f3039ab5439aed_w200.gif')",
            backgroundSize: 'cover',
            filter: 'blur(45px)',
            overflow: 'hidden',
            transform: 'rotate(180deg)',
            backgroundAttachment: 'fixed',
        },
    };

    return (
        <>
            <div className="flex flex-col px-4 lg:px-20 items-center pb-20 mt-4 relative">
                <div style={style.bg} className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
                <div className="flex flex-row justify-center items-center z-20">
                    <h1 className={`${styles.limegradtext} ${styles.space} ${styles.limeglow} text-2xl lg:text-5xl font-bold`}>Alchemist Tale</h1>
                    <img className='w-8 lg:w-16 -mt-8 animate-pulse' src="https://www.dropbox.com/scl/fi/4pxokcpu1tff65h4jqmyy/Frame-819-1.png?rlkey=k5p33faaub42j042m0ku608hn&dl=1" alt="" />
                </div>
                <p className={`text-[#faf0d1] text-justify  opacity-80 ${styles.space} mt-12 text-sm lg:text-2xl lg:leading-[2.5rem]`}>Welcome to my digital laboratory! I'm <span className={`${styles.limegradtext} ${styles.limeglow} font-semibold`}>Anshika</span>, your alchemist of <span className={`${styles.limegradtext} ${styles.limeglow} font-semibold`}>Web Development</span>, blending elements with code and color. With over <span className={`${styles.limegradtext} ${styles.limeglow} font-semibold`}>4 years</span> of alchemical experience, I specialize in transmuting seamless and interactive experiences using <span className={`${styles.limegradtext} ${styles.limeglow} font-semibold`}>HTML, CSS, JavaScript,</span> and the mystical properties of <span className={`${styles.limegradtext} ${styles.limeglow} font-semibold`}>React.js</span> and <span>Next.js</span>.
                    But here's where the magic truly begins – I infuse each pixel with a touch of <span className={`${styles.limegradtext} ${styles.limeglow} font-semibold`}>gradient</span> alchemy, transforming mere designs into mesmerizing vistas that captivate the senses. As we journey together through the realms of technology and creativity, I believe in the power of <span className={`${styles.limegradtext} ${styles.limeglow} font-semibold`}>collaboration</span>, where every team member adds their unique essence to our concoction of possibilities.

                    In our realm, every line of code is a whisper of incantation, and every project is a <span className={`${styles.limegradtext} ${styles.limeglow} font-semibold`}>spellbinding</span> tale waiting to be told. Join me, and let's forge the future with a blend crafted from the essences of imagination and <span className={`${styles.limegradtext} ${styles.limeglow} font-semibold`}>innovation</span>.🔮</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
                        
                    </div>

                <img className='mt-20 animate-pulse h-16 lg:h-32' src="https://www.dropbox.com/scl/fi/1iggijpl69ek8f90rwp2v/Vector-392-1.png?rlkey=5va19dot71mchwj3yzixoh62r&dl=1" alt="" />
            </div>
        </>
    );
};

export default About;
