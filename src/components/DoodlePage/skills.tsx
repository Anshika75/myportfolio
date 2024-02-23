"use client";
import React from 'react';
import styles from '../../styles/DoodlePage/style.module.css';

const Skills: React.FC = () => {
    return (
        <>
            <div className="mt-8 flex flex-col items-center justify-start pb-20 px-[20px] lg:px-[60px]">
                <div className={`flex flex-col relative w-full items-center scale-50 lg:scale-100 ${styles.anim7}`}>
                    <img src="https://www.dropbox.com/scl/fi/jtt76wbmdsdp5tekwuoep/Group.png?rlkey=bn0nvhih0n4gkugd9zfennda1&dl=1" className="absolute top-[70%] left-[50%] h-[7rem] w-[10rem] -translate-x-1/2 -translate-y-1/2" />
                    <p className={`text-white text-5xl z-20 mt-12 ${styles.pang}`}>Skills</p>
                </div>
                <h1 className={`text-5xl lg:text-[120px] lg:-mt-4 text-black ${styles.lond} ${styles.anim2} font-black`}>Extravaganza</h1>
                <div className="flex flex-col lg:flex-row w-full justify-around items-center mt-20 text-justify">
                    <div className={`text-black text-lg lg:text-3xl w-[100%] text-justify flex flex-col items-center lg:w-[45%] ${styles.indi}`}>
                        <div className="flex flex-row">
                            <img src="https://static.wixstatic.com/media/49aa46_37ea75b07fa24b5d9ad05e122dc76d56~mv2.gif" className='h-32' alt="" />
                            <img src="https://static.wixstatic.com/media/49aa46_37ea75b07fa24b5d9ad05e122dc76d56~mv2.gif" className='h-32' alt="" />
                            <img src="https://static.wixstatic.com/media/49aa46_37ea75b07fa24b5d9ad05e122dc76d56~mv2.gif" className='h-32 hidden lg:block' alt="" />
                        </div>
                        Embark on a journey through the enchanted kingdom of my coding palette! I am the Doodle Developer, and I invite you to witness the symphony of skills, where every percentage is a stroke of genius, and every language is a color in the tapestry of digital artistry. <br /><br />
                        In this realm where innovation dances with precision, my skills are the magical incantations that bring digital dreams to life. From HTML to NextJS, each percentage is a pixel of passion etched into the canvas of creativity. Let's navigate the binary seas, turning code into a masterpiece and pixels into unforgettable experiences! 💻✨
                        <div className="flex flex-row">
                            <img src="https://static.wixstatic.com/media/49aa46_37ea75b07fa24b5d9ad05e122dc76d56~mv2.gif" className='h-32 lg:hidden' alt="" />
                            <img src="https://static.wixstatic.com/media/49aa46_37ea75b07fa24b5d9ad05e122dc76d56~mv2.gif" className='h-32 lg:hidden' alt="" />
                            <img src="https://monophy.com/media/RMSo4o1bGSuDPULWIZ/monophy.gif" className='h-32 hidden lg:block' alt="" />
                            <img src="https://monophy.com/media/RMSo4o1bGSuDPULWIZ/monophy.gif" className='h-32 hidden lg:block' alt="" />
                            <img src="https://monophy.com/media/RMSo4o1bGSuDPULWIZ/monophy.gif" className='h-32 hidden lg:block' alt="" />
                        </div>
                    </div>
                    <div className={`w-full mt-16 lg:mt-0 lg:w-[45%] ${styles.skillGrid} px-4`}>
                        {/* firstrow */}
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/1/PNG/256/social_html5_html_71.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>95%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/j3gr17tkdmqtddmi2o2qh/Vector-4.png?rlkey=g8ukmf2jlrobmthg1izwks9ht&dl=1" className='h-44 w-4 hidden lg:block' alt="" />
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/512/PNG/512/css3-01_icon-icons.com_50918.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>93%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/j3gr17tkdmqtddmi2o2qh/Vector-4.png?rlkey=g8ukmf2jlrobmthg1izwks9ht&dl=1" className='h-44 w-4 hidden lg:block' alt="" />
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/3375/PNG/512/javascript_brand_icon_211798.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>85%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/j3gr17tkdmqtddmi2o2qh/Vector-4.png?rlkey=g8ukmf2jlrobmthg1izwks9ht&dl=1" className='h-44 w-4 hidden lg:block' alt="" />
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/react_icon_135264.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>80%</p>
                        </div>
                        {/* First row end */}
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" className='hidden lg:block' alt="" />
                        <div className='hidden lg:block'></div>
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" className='hidden lg:block' alt="" />
                        <div className='hidden lg:block'></div>
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" className='hidden lg:block' alt="" />
                        <div className='hidden lg:block'></div>
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" className='hidden lg:block' alt="" />
                        {/* Second row */}
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/2148/PNG/512/nextjs_icon_132160.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>65%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/j3gr17tkdmqtddmi2o2qh/Vector-4.png?rlkey=g8ukmf2jlrobmthg1izwks9ht&dl=1" className='h-44 w-4 hidden lg:block' alt="" />
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/3206/PNG/512/bootstrap_icon_195906.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>90%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/j3gr17tkdmqtddmi2o2qh/Vector-4.png?rlkey=g8ukmf2jlrobmthg1izwks9ht&dl=1" className='h-44 w-4 hidden lg:block' alt="" />
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/sass_alt_logo_icon_144910.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>97%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/j3gr17tkdmqtddmi2o2qh/Vector-4.png?rlkey=g8ukmf2jlrobmthg1izwks9ht&dl=1" className='h-44 w-4 hidden lg:block' alt="" />
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/jquery_original_wordmark_logo_icon_146447.png" className='h-32 grayscale' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>80%</p>
                        </div>
                        {/* Second row end */}
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" className='hidden lg:block' alt="" />
                        <div className='hidden lg:block'></div>
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" className='hidden lg:block' alt="" />
                        <div className='hidden lg:block'></div>
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" className='hidden lg:block' alt="" />
                        <div className='hidden lg:block'></div>
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" className='hidden lg:block' alt="" />
                        {/* Third row */}
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/2148/PNG/512/tailwind_icon_131947.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>97%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/j3gr17tkdmqtddmi2o2qh/Vector-4.png?rlkey=g8ukmf2jlrobmthg1izwks9ht&dl=1" className='h-44 w-4 hidden lg:block' alt="" />
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/pocoo_flask_src_logo_icon_168043.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>55%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/j3gr17tkdmqtddmi2o2qh/Vector-4.png?rlkey=g8ukmf2jlrobmthg1izwks9ht&dl=1" className='h-44 w-4 hidden lg:block' alt="" />
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/3915/PNG/512/vite_logo_icon_249258.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>83%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/j3gr17tkdmqtddmi2o2qh/Vector-4.png?rlkey=g8ukmf2jlrobmthg1izwks9ht&dl=1" className='h-44 w-4 hidden lg:block' alt="" />
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/canva_logo_icon_145428.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>45%</p>
                        </div>
                        {/* Third row end */}
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" className='hidden lg:block' alt="" />
                        <div className='hidden lg:block'></div>
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" className='hidden lg:block' alt="" />
                        <div className='hidden lg:block'></div>
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" className='hidden lg:block' alt="" />
                        <div className='hidden lg:block'></div>
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" className='hidden lg:block' alt="" />
                        {/* Fourth row */}
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/1298/PNG/512/2333386-code-linux-os_85584.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>47%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/j3gr17tkdmqtddmi2o2qh/Vector-4.png?rlkey=g8ukmf2jlrobmthg1izwks9ht&dl=1" className='h-44 w-4 hidden lg:block' alt="" />
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/2148/PNG/512/firebase_icon_132390.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>52%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/j3gr17tkdmqtddmi2o2qh/Vector-4.png?rlkey=g8ukmf2jlrobmthg1izwks9ht&dl=1" className='h-44 w-4 hidden lg:block' alt="" />
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/628/PNG/512/sql-document_icon-icons.com_57634.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>47%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/j3gr17tkdmqtddmi2o2qh/Vector-4.png?rlkey=g8ukmf2jlrobmthg1izwks9ht&dl=1" className='h-44 w-4 hidden lg:block' alt="" />
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/typescript_logo_icon_144782.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>37%</p>
                        </div>
                    </div>
                    <div className={`w-[90%] mt-12 ${styles.skillGridMob} px-4`}>
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/1/PNG/256/social_html5_html_71.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>95%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/j3gr17tkdmqtddmi2o2qh/Vector-4.png?rlkey=g8ukmf2jlrobmthg1izwks9ht&dl=1" className='h-44 w-4' alt="" />
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/512/PNG/512/css3-01_icon-icons.com_50918.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>93%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" alt="" />
                        <div className=''></div>
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" alt="" />
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/3915/PNG/512/vite_logo_icon_249258.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>83%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/j3gr17tkdmqtddmi2o2qh/Vector-4.png?rlkey=g8ukmf2jlrobmthg1izwks9ht&dl=1" className='h-44 w-4' alt="" />
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/canva_logo_icon_145428.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>45%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" alt="" />
                        <div className=''></div>
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" alt="" />
                        {/* Second row */}
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/2148/PNG/512/nextjs_icon_132160.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>65%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/j3gr17tkdmqtddmi2o2qh/Vector-4.png?rlkey=g8ukmf2jlrobmthg1izwks9ht&dl=1" className='h-44 w-4' alt="" />
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/3206/PNG/512/bootstrap_icon_195906.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>90%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" alt="" />
                        <div className=''></div>
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" alt="" />
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/3915/PNG/512/vite_logo_icon_249258.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>83%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/j3gr17tkdmqtddmi2o2qh/Vector-4.png?rlkey=g8ukmf2jlrobmthg1izwks9ht&dl=1" className='h-44 w-4' alt="" />
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/canva_logo_icon_145428.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>45%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" alt="" />
                        <div className=''></div>
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" alt="" />
                        {/* Third row */}
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/2148/PNG/512/tailwind_icon_131947.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>97%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/j3gr17tkdmqtddmi2o2qh/Vector-4.png?rlkey=g8ukmf2jlrobmthg1izwks9ht&dl=1" className='h-44 w-4' alt="" />
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/pocoo_flask_src_logo_icon_168043.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>55%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" alt="" />
                        <div className=''></div>
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" alt="" />
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/3915/PNG/512/vite_logo_icon_249258.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>83%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/j3gr17tkdmqtddmi2o2qh/Vector-4.png?rlkey=g8ukmf2jlrobmthg1izwks9ht&dl=1" className='h-44 w-4' alt="" />
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/canva_logo_icon_145428.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>45%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" alt="" />
                        <div className=''></div>
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" alt="" />
                        {/* Fourt row */}
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/1298/PNG/512/2333386-code-linux-os_85584.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>47%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/j3gr17tkdmqtddmi2o2qh/Vector-4.png?rlkey=g8ukmf2jlrobmthg1izwks9ht&dl=1" className='h-44 w-4' alt="" />
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/2148/PNG/512/firebase_icon_132390.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>52%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" alt="" />
                        <div className=''></div>
                        <img src="https://www.dropbox.com/scl/fi/igs33pzicu92xeypdmzz3/Vector-5.png?rlkey=h2heia3xmz7mk45bbpfeex8pm&dl=1" alt="" />
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/628/PNG/512/sql-document_icon-icons.com_57634.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>47%</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/j3gr17tkdmqtddmi2o2qh/Vector-4.png?rlkey=g8ukmf2jlrobmthg1izwks9ht&dl=1" className='h-44 w-4' alt="" />
                        <div className="w-full flex flex-col items-center py-2">
                            <img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/typescript_logo_icon_144782.png" className='h-32' alt="" />
                            <p className={`text-3xl text-black ${styles.perm} mt-2`}>37%</p>
                        </div>
                    </div>
                </div><div className={`grid w-full pt-16 lg:pt-20 place-items-center lg:grid-cols-4 grid-cols-1 gap-12`}>
                    <div className="flex flex-col items-center justify-center relative px-2 py-24 cursor-pointer transition-all hover:-translate-y-5 w-[80%] lg:w-full">
                        <img src="https://www.dropbox.com/scl/fi/u9p5ve92n1p4rn1i7hrpl/Group-7.png?rlkey=xkbmtzb1v3ozoogkfqp2ajhj1&dl=1" className='absolute top-0 left-0 w-full h-full' alt="" />
                        <h1 className={`text-2xl lg:text-4xl mb-5 text-white z-20 text-center ${styles.pang}`}>
                        Harmony
                        </h1>
                    </div>
                    <div className="flex flex-col items-center justify-center relative px-2 py-24 cursor-pointer transition-all hover:-translate-y-5 w-[80%] lg:w-full">
                        <img src="https://www.dropbox.com/scl/fi/u9p5ve92n1p4rn1i7hrpl/Group-7.png?rlkey=xkbmtzb1v3ozoogkfqp2ajhj1&dl=1" className='absolute top-0 left-0 w-full h-full' alt="" />
                        <h1 className={`text-2xl lg:text-4xl mb-5 text-white z-20 text-center ${styles.pang}`}>
                        LeadSync
                        </h1>
                    </div>
                    <div className="flex flex-col items-center justify-center relative px-2 py-24 cursor-pointer transition-all hover:-translate-y-5 w-[80%] lg:w-full">
                        <img src="https://www.dropbox.com/scl/fi/u9p5ve92n1p4rn1i7hrpl/Group-7.png?rlkey=xkbmtzb1v3ozoogkfqp2ajhj1&dl=1" className='absolute top-0 left-0 w-full h-full' alt="" />
                        <h1 className={`text-2xl lg:text-4xl mb-5 text-white z-20 text-center ${styles.pang}`}>
                        ClientCare
                        </h1>
                    </div>
                    <div className="flex flex-col items-center justify-center relative px-2 py-24 cursor-pointer transition-all hover:-translate-y-5 w-[80%] lg:w-full">
                        <img src="https://www.dropbox.com/scl/fi/u9p5ve92n1p4rn1i7hrpl/Group-7.png?rlkey=xkbmtzb1v3ozoogkfqp2ajhj1&dl=1" className='absolute top-0 left-0 w-full h-full' alt="" />
                        <h1 className={`text-2xl lg:text-4xl mb-5 text-white z-20 text-center ${styles.pang}`}>
                        TimeCraft
                        </h1>
                    </div>
                    <div className="flex flex-col items-center justify-center relative px-2 py-24 cursor-pointer transition-all hover:-translate-y-5 w-[80%] lg:w-full">
                        <img src="https://www.dropbox.com/scl/fi/u9p5ve92n1p4rn1i7hrpl/Group-7.png?rlkey=xkbmtzb1v3ozoogkfqp2ajhj1&dl=1" className='absolute top-0 left-0 w-full h-full' alt="" />
                        <h1 className={`text-2xl lg:text-4xl mb-5 text-white z-20 text-center ${styles.pang}`}>
                        InnoMind
                        </h1>
                    </div>
                    <div className="flex flex-col items-center justify-center relative px-2 py-24 cursor-pointer transition-all hover:-translate-y-5 w-[80%] lg:w-full">
                        <img src="https://www.dropbox.com/scl/fi/u9p5ve92n1p4rn1i7hrpl/Group-7.png?rlkey=xkbmtzb1v3ozoogkfqp2ajhj1&dl=1" className='absolute top-0 left-0 w-full h-full' alt="" />
                        <h1 className={`text-2xl lg:text-4xl mb-5 text-white z-20 text-center ${styles.pang}`}>
                        ResolvePro
                        </h1>
                    </div>
                    <div className="flex flex-col items-center justify-center relative px-2 py-24 cursor-pointer transition-all hover:-translate-y-5 w-[80%] lg:w-full">
                        <img src="https://www.dropbox.com/scl/fi/u9p5ve92n1p4rn1i7hrpl/Group-7.png?rlkey=xkbmtzb1v3ozoogkfqp2ajhj1&dl=1" className='absolute top-0 left-0 w-full h-full' alt="" />
                        <h1 className={`text-2xl lg:text-4xl mb-5 text-white z-20 text-center ${styles.pang}`}>
                        Qualify
                        </h1>
                    </div>
                    <div className="flex flex-col items-center justify-center relative px-2 py-24 cursor-pointer transition-all hover:-translate-y-5 w-[80%] lg:w-full">
                        <img src="https://www.dropbox.com/scl/fi/u9p5ve92n1p4rn1i7hrpl/Group-7.png?rlkey=xkbmtzb1v3ozoogkfqp2ajhj1&dl=1" className='absolute top-0 left-0 w-full h-full' alt="" />
                        <h1 className={`text-2xl lg:text-4xl mb-5 text-white z-20 text-center ${styles.pang}`}>
                        CreateEase
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;
