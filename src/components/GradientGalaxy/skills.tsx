"use client";
import React from 'react';
import styles from '../../styles/GradientGalaxy/style.module.css';

const Skills: React.FC = () => {
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
                    <h1 className={`${styles.skygradtext} ${styles.space} ${styles.skyglow} text-2xl lg:text-5xl font-bold`}>Alchemist Abilities</h1>
                    <img className='w-8 lg:w-16 -mt-8 animate-pulse' src="https://www.dropbox.com/scl/fi/ew2mm9nptl7ftvjgr3vz3/Frame-819-2-1.png?rlkey=9wc4rp6de1j4w502nd8l8m8wf&dl=1" alt="" />
                </div>
                <p className={`text-[#f0fbff] text-justify lg:text-center opacity-80 ${styles.space} mt-12 text-sm lg:text-2xl lg:leading-[2.5rem]`}>Embark on a voyage through the mystical realm of my <span className={`${styles.skygradtext} ${styles.skyglow} font-semibold`}>coding canvas!</span> I am the <span className={`${styles.skygradtext} ${styles.skyglow} font-semibold`}>Script Alchemist</span>, beckoning you to behold the harmonious convergence of skills, where every line is a stroke of brilliance, and every language is a hue in the tapestry of digital enchantment.

                    In this domain where invention waltzes with accuracy, my talents are the arcane elixirs that animate digital fantasies. From <span  className={`${styles.skygradtext} ${styles.skyglow} font-semibold`}>HTML</span> to <span  className={`${styles.skygradtext} ${styles.skyglow} font-semibold`}>Next.js</span>, each line is a pixel of fervor inscribed onto the parchment of imagination. Let us traverse the binary horizons, transmuting code into a magnum opus and pixels into <span  className={`${styles.skygradtext} ${styles.skyglow} font-semibold`}>indelible adventures</span>! 💻✨ </p>
                <img className='mt-20 animate-pulse h-16 lg:h-32' src="https://www.dropbox.com/scl/fi/tjj8t13ytjrzira6piosy/Vector-392-2-1.png?rlkey=9zhvxurkpceap4amj8hfwnasu&dl=1" alt="" />
            </div>
        </>
    );
};

export default Skills;
