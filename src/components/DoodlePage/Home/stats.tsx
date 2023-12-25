"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/DoodlePage/style.module.css';

const CountUp = ({ end, duration, additionalText }: { end: number; duration: number; additionalText?: string }) => {
    const start = 0;
    const frames = duration / 1000 * 60; // Assuming 60 frames per second
    const increment = (end - start) / frames;
    const [current, setCurrent] = React.useState(start);
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

    useEffect(() => {
        let frame = 0;

        const updateCount = () => {
            if (frame < frames) {
                setCurrent((prev) => prev + increment);
                frame++;
                requestAnimationFrame(updateCount);
            } else {
                setCurrent(end);
                setIsAnimationComplete(true); // Set the animation completion state
            }
        };

        updateCount();
    }, [end, increment, frames]);

    return (
        <>
            {isAnimationComplete && (
                <></>
            )}
        </>
    );
};
const Stats: React.FC = () => {
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCounters();
                }
            });
        });

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    const animateCounters = () => {
        const projectCounter = document.getElementById('projectCounter');
        if (projectCounter) {
            animateCounter({
                element: projectCounter,
                endValue: 20,
                duration: 2000,
                additionalText: '+',
            });
        }

        // Connections Counter
        const connectionsCounter = document.getElementById('connectionsCounter');
        if (connectionsCounter) {
            animateCounter({
                element: connectionsCounter,
                endValue: 400,
                duration: 2000,
            });
        }

        // Experience Counter
        const experienceCounter = document.getElementById('experienceCounter');
        if (experienceCounter) {
            animateCounter({
                element: experienceCounter,
                endValue: 4,
                duration: 2000,
                additionalText: '+yr', // Specify additional text directly for the "Experience" counter
            });
        }

        // Endorsed Skills Counter
        const endorsedSkillsCounter = document.getElementById('endorsedSkillsCounter');
        if (endorsedSkillsCounter) {
            animateCounter({
                element: endorsedSkillsCounter,
                endValue: 25,
                duration: 2000,
            });
        }
    };

    const animateCounter = ({ element, endValue, duration, additionalText }: { element: HTMLElement | null; endValue: number; duration: number; additionalText?: string }) => {
        const frames = duration / 1000 * 60; // Assuming 60 frames per second
        const increment = (endValue - 0) / frames;
        let current = 0;
        additionalText = additionalText ? additionalText:"";
        const updateCount = () => {
            if (current < endValue) {
                current += increment;
                if (element) {
                    element.textContent = String(Math.floor(current)) + additionalText;
                }
                requestAnimationFrame(updateCount);
            } else {
                current = endValue;
                if (element) {
                    element.textContent = String(Math.floor(current)) + additionalText;
                }
            }
        };

        updateCount();
    };


    return (
        <>

            <div className="flex flex-col items-center justify-start pb-40 lg:mt-40 px-[60px]">
                <div className={`flex flex-col relative w-full items-center scale-50 lg:scale-100 ${styles.anim1}`}>
                    <img src="https://www.dropbox.com/scl/fi/robamf6w8rdfpfohd0ve1/Group-2.png?rlkey=qdhl8zjqzqfaox4rhjrk57tdc&dl=1" className="absolute top-[70%] left-[50%] h-[7rem] w-[13rem] -translate-x-1/2 -translate-y-1/2 rotate-12" />
                    <p className={`text-white text-5xl z-20 ${styles.pang}`}>My</p>
                </div>
                <p className={`text-6xl lg:text-[120px] text-black ${styles.lond} ${styles.anim2} font-black`}>Feats</p>
                <div
                    ref={statsRef}
                    className={`grid w-full pt-16 lg:pt-20 lg:grid-cols-4 grid-cols-1 gap-12`}
                >
                    {/* Project Counter */}
                    <div className="flex flex-col items-center justify-center relative py-20">
                        <img src="https://www.dropbox.com/scl/fi/o6gcks068k2hcc8be94cq/Vector-10.png?rlkey=06i6l4l24leo9innx4a17prtd&dl=1" className='absolute top-0 left-0 w-full h-full' alt="" />
                        <p id="projectCounter" className={`text-3xl lg:text-5xl text-white z-20 text-center ${styles.perm}`}>
                            <CountUp end={20} duration={2000} />
                            <span>+</span>
                        </p>
                        <p className={`text-2xl lg:text-4xl mt-3 text-white z-20 text-center ${styles.pang}`}>
                            Projects
                        </p>
                    </div>

                    {/* Connections Counter */}
                    <div className="flex flex-col items-center justify-center relative py-20">
                        <img src="https://www.dropbox.com/scl/fi/o6gcks068k2hcc8be94cq/Vector-10.png?rlkey=06i6l4l24leo9innx4a17prtd&dl=1" className='absolute top-0 left-0 w-full h-full' alt="" />
                        <p id="connectionsCounter" className={`text-3xl lg:text-5xl text-white z-20 text-center ${styles.perm}`}>
                            <CountUp end={400} duration={2000} />
                            <span>+</span>
                        </p>
                        <p className={`text-2xl lg:text-4xl mt-3 text-white z-20 text-center ${styles.pang}`}>
                            Connections
                        </p>
                    </div>

                    {/* Experience Counter */}
                    <div className="flex flex-col items-center justify-center relative py-20">
                        <img src="https://www.dropbox.com/scl/fi/o6gcks068k2hcc8be94cq/Vector-10.png?rlkey=06i6l4l24leo9innx4a17prtd&dl=1" className='absolute top-0 left-0 w-full h-full' alt="" />
                        <p id="experienceCounter" className={`text-3xl lg:text-5xl text-white z-20 text-center ${styles.perm}`}>
                            <CountUp end={4} duration={2000} additionalText="+yr" />
                        </p>
                        <p className={`text-2xl lg:text-4xl mt-3 text-white z-20 text-center ${styles.pang}`}>
                            Experience
                        </p>
                    </div>

                    {/* Endorsed Skills Counter */}
                    <div className="flex flex-col items-center justify-center relative py-20">
                        <img src="https://www.dropbox.com/scl/fi/o6gcks068k2hcc8be94cq/Vector-10.png?rlkey=06i6l4l24leo9innx4a17prtd&dl=1" className='absolute top-0 left-0 w-full h-full' alt="" />
                        <p id="endorsedSkillsCounter" className={`text-3xl lg:text-5xl text-white z-20 text-center ${styles.perm}`}>
                            <CountUp end={25} duration={2000} />
                        </p>
                        <p className={`text-2xl lg:text-4xl mt-3 text-white z-20 text-center ${styles.pang}`}>
                            Endorsed Skills
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Stats;
