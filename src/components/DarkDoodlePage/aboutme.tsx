"use client";
import React from 'react';
import styles from '../../styles/DarkDoodlePage/style.module.css';

const About: React.FC = () => {
    
    return (
        <>
            <div  className="lg:mt-0 lg:pt-12 -mt-2 z-30 py-10 lg:py-0 flex flex-col items-center justify-start px-[20x] lg:px-[60px] pb-20">
                <div className={`flex flex-col relative w-full items-center scale-50 lg:scale-100 ${styles.anim1}`}>
                    <img src="https://www.dropbox.com/scl/fi/rgvm4cf9v5v02kb2v3b2f/Group-12-1.png?rlkey=meh9l5n100u1y0hoh6y6icu3m&dl=1" className="absolute top-[60%] left-[50%] h-[5rem] w-[7rem] -translate-x-1/2 -translate-y-1/2" />
                    <p className={`text-white text-5xl z-20 ${styles.pang}`}>My</p>
                </div>
                <h1 className={`text-6xl lg:text-[120px] -mt-4 text-[#FF407A] ${styles.lond} ${styles.anim2} font-black`}>Narrative</h1>
                <div className="flex flex-col lg:flex-row w-full justify-around items-center mt-8 text-justify">
                    <img src="https://www.dropbox.com/scl/fi/cg365wnq37s5ug5oztns9/pngegg-1.png?rlkey=vl1x8vdlkqlbmn6qqsyn8o51x&dl=1" className={`hidden lg:block ${styles.anim5} w-64`}/>
                    <div className={`text-[#d4d4d4] text-lg lg:text-3xl w-[90%] lg:w-1/2 ${styles.balsamiq}`}>
                        <p className={`lg:text-3xl text-lg lg:leading-[3.5rem] ${styles.balsamiq}`}><b className={`${styles.pang} ${styles.anim1} text-[#FF407A]`}>Welcome</b> to the whimsical world of code conjuring!</p>  <br />
                        I'm Anshika, a <b className={`${styles.pang} ${styles.anim1} text-[#FF407A]`}>Front-End Maestro</b> on a quest to blend technology and creativity into seamless, enchanting digital experiences. With over 4 years of spellbinding expertise, I specialize in the mystical arts of <b className={`${styles.pang} ${styles.anim1} text-[#FF407A]`}>HTML, CSS,</b> and <b className={`${styles.pang} ${styles.anim1} text-[#FF407A]`}>JavaScript</b>, wielding the mighty frameworks of <b className={`${styles.pang} ${styles.anim1} text-[#FF407A]`}>React.js</b> and <b className={`${styles.pang} ${styles.anim1} text-[#FF407A]`}>Next.js</b>. <br /><br />

                        Picture me as your <b className={`${styles.pang} ${styles.anim1} text-[#FF407A]`}>digital sorceress,</b> transforming design blueprints into pixel-perfect realities. I thrive in the collaborative dance of cross-functional teams, where my coding spells harmonize with others to deliver enchanting solutions. A true <b className={`${styles.pang} ${styles.anim1} text-[#FF407A]`}>team player</b>, I see the lines of code as the brushstrokes in the masterpiece of captivating user journeys. <br />
                    </div>
                    <img src="https://assets-global.website-files.com/5e51b3b0337309d672efd94c/5e535cc533d36869f23e5264_mix-6.svg" className={`block lg:hidden mt-8 ${styles.anim6}`} alt="" />
                </div>
            </div>
        </>
    );
};

export default About;
