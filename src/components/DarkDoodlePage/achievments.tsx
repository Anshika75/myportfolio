"use client";
import React from 'react';
import styles from '../../styles/DoodlePage/style.module.css';

const Achievments: React.FC = () => {
    return (
        <>
            <div className="lg:mt-8 flex flex-col items-center justify-start px-[20px] lg:px-0 pb-20">
                <div className={`flex flex-col relative w-full items-center scale-50 lg:scale-100 ${styles.anim1}`}>
                    <img src="https://www.dropbox.com/scl/fi/diuvurir4e4rgbgne30b8/Vector-12.png?rlkey=xgxsyx95yogsw0htniavg83sn&dl=1" className="absolute top-[60%] left-[50%] h-[5rem] w-[9rem] -translate-x-1/2 -translate-y-1/2" />
                    <p className={`text-white text-5xl z-20 ${styles.pang}`}>Key</p>
                </div>
                <h1 className={`text-5xl lg:text-[120px] -mt-2 text-black ${styles.lond} ${styles.anim2} font-black`}>Accomplishments</h1>
                
                <div className="grid place-items-center mt-24 w-full relative">
                    <img src="https://img.freepik.com/premium-vector/stars-white-background-black-star-shooting-with-elegant-star-meteoroid-comet-asteroid-stars_209910-481.jpg?w=2000" className='absolute top-0 left-0 w-full h-full' alt="" />
                    <div className="flex p-6 lg:p-12 bg-white z-20 border-4 border-black rounded-lg relative cursor-pointer hover:-translate-y-5 transition-all">
                        <img src="https://www.dropbox.com/scl/fi/ruz3aydxee4k84cwvre8e/1646678308032.jpeg?rlkey=sxzkfpqctbc9bmupvg7bcxpxd&dl=1" className='max-h-[75vh]' alt="" />
                        <div className="absolute top-0 translate-y-[-85%] left-[30%] h-10 w-6 lg:h-16 lg:w-10 bg-[#555] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] left-[30%] h-10 w-6 lg:h-16 lg:w-10 bg-black"></div>
                        <div className="absolute top-0 translate-y-[-85%] right-[30%] h-10 w-6 lg:h-16 lg:w-10 bg-[#555] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] right-[30%] h-10 w-6 lg:h-16 lg:w-10 bg-black"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Achievments;
