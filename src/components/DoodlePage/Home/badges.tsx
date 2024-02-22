"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/DoodlePage/style.module.css';
import Link from 'next/link';


const Badges: React.FC = () => {

    return (
        <>

            <div className="flex flex-col items-center justify-start pb-20 lg:mt-20 px-[40px] lg:px-[60px]">
                <div className={`flex flex-col relative w-full items-center scale-50 lg:scale-100 ${styles.anim1}`}>
                    <img src="https://www.dropbox.com/scl/fi/qp30gepl98pdihzjo3h4f/Group-1.png?rlkey=l0qe1jjslbrieiiqhdra900ih&dl=1" className="absolute top-[30%] left-[50%] h-[7rem] w-[18rem] -translate-x-1/2 -translate-y-1/2" />
                    <p className={`text-white text-5xl z-20 ${styles.pang}`}>Mastery</p>
                </div>
                <h1 className={`text-6xl lg:text-[120px] text-black ${styles.lond} ${styles.anim2} font-black`}>Tokens</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-4 lg:gap-y-12 mt-12 cursor-pointer transition-all">

                    <Link href={'https://www.credly.com/badges/c2f4847f-0ff4-45df-acbe-f5e2fefc8abe/public_url'} className="relative grid place-items-center shadow-md border-8 border-black rounded-full group hover:-translate-y-5 transition-all h-64 w-64 border-double" target='blank'>
                        <img src="https://images.credly.com/images/ac4daa48-1924-4dc5-80cf-ede5a08bac51/Data_Science_Foundations_Specialization.png" alt="" className='grayscale h-44 -mt-4 transition-all group-hover:scale-105' />
                        <div className="absolute top-[10%] translate-y-[-85%] left-[10%] origin-bottom -rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] left-[10%] origin-bottom -rotate-[50deg] h-10 w-6 bg-black"></div>
                        <div className="absolute top-[10%] translate-y-[-85%] right-[10%] origin-bottom rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] right-[10%] origin-bottom rotate-[50deg] h-10 w-6 bg-black"></div>
                    </Link>
                    <Link href={'https://www.credly.com/badges/77d7f6cf-77c4-40d9-bc9d-8a295a27d6e1/public_url'} className="relative grid place-items-center shadow-md border-8 border-black rounded-full group hover:-translate-y-5 transition-all h-64 w-64 border-double" target='blank'>
                        <img src="https://images.credly.com/images/594e0ab7-c864-4d9a-9987-3a903ec3f06a/Cognitive_Class_-_DB_and_SQL_for_Data_Sci.png" alt="" className='grayscale h-44 -mt-4 transition-all group-hover:scale-105' />
                        <div className="absolute top-[10%] translate-y-[-85%] left-[10%] origin-bottom -rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] left-[10%] origin-bottom -rotate-[50deg] h-10 w-6 bg-black"></div>
                        <div className="absolute top-[10%] translate-y-[-85%] right-[10%] origin-bottom rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] right-[10%] origin-bottom rotate-[50deg] h-10 w-6 bg-black"></div>
                    </Link>
                    <Link href={'https://www.credly.com/badges/12e76a1c-cf2e-4d86-b085-9668682310c3/public_url'} className="relative grid place-items-center shadow-md border-8 border-black rounded-full group hover:-translate-y-5 transition-all h-64 w-64 border-double" target='blank'>
                        <img src="https://images.credly.com/images/1b67aaf9-670d-4c92-8d51-7ac1190f0a42/image.png" alt="" className='grayscale h-44 -mt-4 transition-all group-hover:scale-105' />
                        <div className="absolute top-[10%] translate-y-[-85%] left-[10%] origin-bottom -rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] left-[10%] origin-bottom -rotate-[50deg] h-10 w-6 bg-black"></div>
                        <div className="absolute top-[10%] translate-y-[-85%] right-[10%] origin-bottom rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] right-[10%] origin-bottom rotate-[50deg] h-10 w-6 bg-black"></div>
                    </Link>
                    <Link href={'https://www.credly.com/badges/77d7f6cf-77c4-40d9-bc9d-8a295a27d6e1/public_url'} className="relative grid place-items-center shadow-md border-8 border-black rounded-full group hover:-translate-y-5 transition-all h-64 w-64 border-double" target='blank'>
                        <img src="https://images.credly.com/images/594e0ab7-c864-4d9a-9987-3a903ec3f06a/Cognitive_Class_-_DB_and_SQL_for_Data_Sci.png" alt="" className='grayscale h-44 -mt-4 transition-all group-hover:scale-105' />
                        <div className="absolute top-[10%] translate-y-[-85%] left-[10%] origin-bottom -rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] left-[10%] origin-bottom -rotate-[50deg] h-10 w-6 bg-black"></div>
                        <div className="absolute top-[10%] translate-y-[-85%] right-[10%] origin-bottom rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] right-[10%] origin-bottom rotate-[50deg] h-10 w-6 bg-black"></div>
                    </Link>
                    <Link href={'https://www.holopin.io/userbadge/cla2g6tq01036609jnkubeooik'} className="relative grid place-items-center shadow-md border-8 border-black rounded-full group hover:-translate-y-5 transition-all h-64 w-64 border-double" target='blank'>
                        <img src="https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbDlmczZqdWgxNjI1ODA5bWkyNXAyNjRtbiIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbH19" alt="" className='grayscale h-44 -mt-4 transition-all group-hover:scale-105' />
                        <div className="absolute top-[10%] translate-y-[-85%] left-[10%] origin-bottom -rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] left-[10%] origin-bottom -rotate-[50deg] h-10 w-6 bg-black"></div>
                        <div className="absolute top-[10%] translate-y-[-85%] right-[10%] origin-bottom rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] right-[10%] origin-bottom rotate-[50deg] h-10 w-6 bg-black"></div>
                    </Link>
                    <Link href={'https://www.holopin.io/userbadge/clsw7mz4r93570fiek0wrafhs'} className="relative grid place-items-center shadow-md border-8 border-black rounded-full group hover:-translate-y-5 transition-all h-64 w-64 border-double" target='blank'>
                        <img src="https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbDhkOHVrb3MwMDk0MDlqbnVuaGRhcDd3IiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0=" alt="" className='grayscale h-44 -mt-4 transition-all group-hover:scale-105' />
                        <div className="absolute top-[10%] translate-y-[-85%] left-[10%] origin-bottom -rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] left-[10%] origin-bottom -rotate-[50deg] h-10 w-6 bg-black"></div>
                        <div className="absolute top-[10%] translate-y-[-85%] right-[10%] origin-bottom rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] right-[10%] origin-bottom rotate-[50deg] h-10 w-6 bg-black"></div>
                    </Link>
                    <Link href={'https://www.holopin.io/userbadge/cl9c7jexb450509k0fcclxk9z'} className="relative grid place-items-center shadow-md border-8 border-black rounded-full group hover:-translate-y-5 transition-all h-64 w-64 border-double" target='blank'>
                        <img src="https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbDhkOHRrZnAwMDMyMDlqbmtxZTF3dzVhIiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0=" alt="" className='grayscale h-44 -mt-4 transition-all group-hover:scale-105' />
                        <div className="absolute top-[10%] translate-y-[-85%] left-[10%] origin-bottom -rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] left-[10%] origin-bottom -rotate-[50deg] h-10 w-6 bg-black"></div>
                        <div className="absolute top-[10%] translate-y-[-85%] right-[10%] origin-bottom rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] right-[10%] origin-bottom rotate-[50deg] h-10 w-6 bg-black"></div>
                    </Link>
                    <Link href={'https://www.holopin.io/userbadge/clsw81hgv129210fiexg3kg87v'} className="relative grid place-items-center shadow-md border-8 border-black rounded-full group hover:-translate-y-5 transition-all h-64 w-64 border-double" target='blank'>
                        <img src="https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbDhkODlvaTAwMDE3MDlpZjdsdWxhNHV5IiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0=" alt="" className='grayscale h-44 -mt-4 transition-all group-hover:scale-105' />
                        <div className="absolute top-[10%] translate-y-[-85%] left-[10%] origin-bottom -rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] left-[10%] origin-bottom -rotate-[50deg] h-10 w-6 bg-black"></div>
                        <div className="absolute top-[10%] translate-y-[-85%] right-[10%] origin-bottom rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] right-[10%] origin-bottom rotate-[50deg] h-10 w-6 bg-black"></div>
                    </Link>
                    <Link href={'https://www.holopin.io/userbadge/cl9c7jwio457409k0valv7a0h'} className="relative grid place-items-center shadow-md border-8 border-black rounded-full group hover:-translate-y-5 transition-all h-64 w-64 border-double" target='blank'>
                        <img src="https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbDhkNmZycXowMTgxMDltaGFleGpmczRwIiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0=" alt="" className='grayscale h-44 -mt-4 transition-all group-hover:scale-105' />
                        <div className="absolute top-[10%] translate-y-[-85%] left-[10%] origin-bottom -rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] left-[10%] origin-bottom -rotate-[50deg] h-10 w-6 bg-black"></div>
                        <div className="absolute top-[10%] translate-y-[-85%] right-[10%] origin-bottom rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] right-[10%] origin-bottom rotate-[50deg] h-10 w-6 bg-black"></div>
                    </Link>
                    <Link href={'https://www.holopin.io/userbadge/cl91cmu512066309jqegnx2lzg'} className="relative grid place-items-center shadow-md border-8 border-black rounded-full group hover:-translate-y-5 transition-all h-64 w-64 border-double" target='blank'>
                        <img src="https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbDhlcTN6OWMwMzU3MDlsM2Z4OTluOHg2IiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0=" alt="" className='grayscale h-44 -mt-4 transition-all group-hover:scale-105' />
                        <div className="absolute top-[10%] translate-y-[-85%] left-[10%] origin-bottom -rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] left-[10%] origin-bottom -rotate-[50deg] h-10 w-6 bg-black"></div>
                        <div className="absolute top-[10%] translate-y-[-85%] right-[10%] origin-bottom rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] right-[10%] origin-bottom rotate-[50deg] h-10 w-6 bg-black"></div>
                    </Link>
                    <Link href={'https://www.holopin.io/userbadge/clampo1s1153408mkdrjxg13w'} className="relative grid place-items-center shadow-md border-8 border-black rounded-full group hover:-translate-y-5 transition-all h-64 w-64 border-double" target='blank'>
                        <img src="https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbGFqeHF4eTUwNDMzMDhqc3k3bXp1NmlwIiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0=" alt="" className='grayscale h-44 transition-all group-hover:scale-105' />
                        <div className="absolute top-[10%] translate-y-[-85%] left-[10%] origin-bottom -rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] left-[10%] origin-bottom -rotate-[50deg] h-10 w-6 bg-black"></div>
                        <div className="absolute top-[10%] translate-y-[-85%] right-[10%] origin-bottom rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] right-[10%] origin-bottom rotate-[50deg] h-10 w-6 bg-black"></div>
                    </Link>
                    <Link href={'https://www.cloudskillsboost.google/public_profiles/b42300dc-0e54-4781-8cfc-4ee5dd8442f0/badges/3142086'} className="relative grid place-items-center shadow-md border-8 border-black rounded-full group hover:-translate-y-5 transition-all h-64 w-64 border-double" target='blank'>
                        <img src="https://cdn.qwiklabs.com/chImyyo8QkjI9FvZjnuPb9a3BVlt2M12kJYilhiSBsk%3D" alt="" className='grayscale h-44 transition-all group-hover:scale-105' />
                        <div className="absolute top-[10%] translate-y-[-85%] left-[10%] origin-bottom -rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] left-[10%] origin-bottom -rotate-[50deg] h-10 w-6 bg-black"></div>
                        <div className="absolute top-[10%] translate-y-[-85%] right-[10%] origin-bottom rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] right-[10%] origin-bottom rotate-[50deg] h-10 w-6 bg-black"></div>
                    </Link>
                    <Link href={'https://www.cloudskillsboost.google/public_profiles/b42300dc-0e54-4781-8cfc-4ee5dd8442f0/badges/3105263'} className="relative grid place-items-center shadow-md border-8 border-black rounded-full group hover:-translate-y-5 transition-all h-64 w-64 border-double" target='blank'>
                        <img src="https://cdn.qwiklabs.com/t1rieoUO9jW60M3eNwC4cWIxxbPmc9uhgEUUJLbySf8%3D" alt="" className='grayscale h-44 transition-all group-hover:scale-105' />
                        <div className="absolute top-[10%] translate-y-[-85%] left-[10%] origin-bottom -rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] left-[10%] origin-bottom -rotate-[50deg] h-10 w-6 bg-black"></div>
                        <div className="absolute top-[10%] translate-y-[-85%] right-[10%] origin-bottom rotate-[40deg] h-10 w-6 bg-[#555]"></div>
                        <div className="absolute top-[10%] translate-y-[-80%] right-[10%] origin-bottom rotate-[50deg] h-10 w-6 bg-black"></div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Badges;
