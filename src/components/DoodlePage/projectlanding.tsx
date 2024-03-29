"use client";
import React from 'react';
import styles from '../../styles/DoodlePage/style.module.css';

const ProjectLanding: React.FC = () => {
    const style: Record<string, React.CSSProperties> = {
        container: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            backgroundImage: 'url("https://media.istockphoto.com/id/1199971584/vector/paper-texture-background.jpg?s=612x612&w=0&k=20&c=nqWK-ppAxZLYeKfxur9eHVldpSLDD1njkitFS2hyinY=")',
            backgroundSize: 'cover',
            overflow: 'hidden',
        },
    };

    return (
        <>
            <div style={style.container} className='h-[50vh] lg:min-h-[100vh]'>
                <div className="h-[50vh] lg:min-h-screen flex flex-col w-full items-center justify-center">
                    <img src="https://www.dropbox.com/scl/fi/vl1jix1g5mc5c8a1gcoa7/Pink_Doodle_Project_Presentation__1_-removebg.png?rlkey=n4wqzsc9i09bkh5wskxzn3urd&dl=1" className={`absolute left-0 top-0 h-[50vh] lg:h-[100%] w-full z-10 ${styles.anim3}`} alt="" />
                    <div className="flex w-full mt-2 lg:mt-8 justify-center">
                    <div className="relative w-full flex flex-col justify-center items-center">
                        <img src="https://i.pinimg.com/originals/ec/2b/26/ec2b2668869590e1a4f5297a7c935171.gif" alt="" className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2' />
                        <p className={`z-20 text-black text-3xl font-black ${styles.indi} ${styles.anim1}`}>Welcome to my</p>
                        <h1 className={`z-20 text-black text-6xl lg:text-[120px] ${styles.fred} ${styles.anim2}`}>CreativeShowcase</h1>
                    </div>
                    </div>
                </div>
                <img src="https://www.dropbox.com/scl/fi/hw270h8ph76yy5m7zzpzr/banner-full-img.png?rlkey=jmv3oow0behidquczjfx9fm5k&dl=1" className={`z-10 lg:-mt-20`} alt="" />
            </div>
        </>
    );
};

export default ProjectLanding;
