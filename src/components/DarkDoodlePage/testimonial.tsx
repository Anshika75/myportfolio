"use client";
import React, { useState } from 'react';
import styles from '../../styles/DoodlePage/style.module.css';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css";
import testimonials from '../../helpers/testimonial'; // Import the external data
import Link from 'next/link';

const Testimonial: React.FC = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    return (
        <>

            <style>
                {`
            .number-slide{
              background: grey;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 50px;
              color: #fff;
              font-weight: 500;
              height: 300px;
              max-height: 100vh;
            }
            
            .number-slide2 {
              background: rgb(255, 75, 64);
            }
            
            
            .navigation-wrapper {
              position: relative;
            }
            
            .dots {
              display: flex;
              padding: 10px 0;
              justify-content: center;
            }
            
            .dot {
              border: none;
              width: 10px;
              height: 10px;
              background: #c5c5c5;
              border-radius: 50%;
              margin: 0 5px;
              padding: 0 5px;
              cursor: pointer;
            }
            
            .dot:focus {
              outline: none;
            }
            
            .dot.active {
              background: #000;
            }
            
            .arrow {
              width: 30px;
              height: 30px;
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              -webkit-transform: translateY(-50%);
              fill: #000;
              cursor: pointer;
            }
            
            .arrow--left {
              left: 5px;
            }
            
            .arrow--right {
              left: auto;
              right: 5px;
            }
            
            .arrow--disabled {
              fill: black;
            }
            @media screen and (max-width: 768px){
                .arrow {
                    top: 30%;
                    transform: translateY(-50%);
                    -webkit-transform: translateY(-50%);
                  }
                  .arrow--left{
                    left:0px:
                  }
                  .arrow--right {
                    left: auto;
                    right: 0px;
                  }
            }
            `}
            </style>
            <div className="flex flex-col items-center justify-start pb-20 mt-6 px-[20px] lg:px-[60px]">
                <div className={`flex flex-col relative w-full items-center scale-50 lg:scale-100 ${styles.anim1}`}>
                    <img src="https://www.dropbox.com/scl/fi/g8gdn5g524kzl0wsq84w9/Group-3.png?rlkey=jew9qok0w0aqi7yu6e6z3ls4n&dl=1" className="absolute top-[60%] left-[50%] h-[7rem] w-[13rem] -translate-x-1/2 -translate-y-1/2 -rotate-12" />
                    <p className={`text-white text-5xl z-20 ${styles.pang}`}>Others</p>
                </div>
                <h1 className={`text-6xl lg:text-[120px] text-black ${styles.lond} ${styles.anim2} font-black`}>Impressions</h1>
                <div className="navigation-wrapper w-full mt-12">
                    <div ref={sliderRef} className="keen-slider">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="keen-slider__slide number-slide1 flex flex-col lg:flex-row items-center">
                                <div className="flex flex-col items-center w-[40%] lg:py-12">
                                    <div className="relative hidden lg:flex flex-col items-center justify-start w-[300px] h-[300px] px-4 py-4 shadow-md border-4 border-black rounded-lg group hover:-translate-y-5 transition-all">
                                        <img src={testimonial.imageSrc} alt="" className='grayscale transition-all group-hover:scale-105 h-[70%] w-full' />
                                        <div className="flex items-center justify-center w-full social-links mt-6">
                                            {testimonial.socialLinks.github && (
                                                <Link href={testimonial.socialLinks.github}><i className="fa-brands fa-github mr-3 transition-all hover:scale-90 text-black text-3xl"></i></Link>
                                            )}
                                            {testimonial.socialLinks.facebook && (
                                                <Link href={testimonial.socialLinks.facebook}><i className="fa-brands fa-facebook mr-3 transition-all hover:scale-90 text-black text-3xl"></i></Link>
                                            )}
                                            {testimonial.socialLinks.linkedin && (
                                                <Link href={testimonial.socialLinks.linkedin}><i className="fa-brands fa-linkedin mr-3 transition-all hover:scale-90 text-black text-3xl"></i></Link>
                                            )}
                                            {testimonial.socialLinks.instagram && (
                                                <Link href={testimonial.socialLinks.instagram}><i className="fa-brands fa-square-instagram mr-3 transition-all hover:scale-90 text-black text-3xl"></i></Link>
                                            )}
                                            {testimonial.socialLinks.twitter && (
                                                <Link href={testimonial.socialLinks.twitter}><i className="fa-brands fa-twitter mr-3 transition-all hover:scale-90 text-black text-3xl"></i></Link>
                                            )}
                                            {testimonial.socialLinks.email && (
                                                <Link href={testimonial.socialLinks.email}><i className="fa-solid fa-envelope mr-3 transition-all hover:scale-90 text-black text-3xl"></i></Link>
                                            )}
                                        </div>
                                        <div className="absolute top-0 translate-y-[-85%] left-[30%] h-10 w-6 bg-[#555] origin-bottom rotate-[5deg]"></div>
                                        <div className="absolute top-0 translate-y-[-80%] left-[30%] h-10 w-6 bg-black"></div>
                                        <div className="absolute top-0 translate-y-[-85%] right-[30%] h-10 w-6 bg-[#555] origin-bottom rotate-[5deg]"></div>
                                        <div className="absolute top-0 translate-y-[-80%] right-[30%] h-10 w-6 bg-black"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center w-full lg:w-[60%] lg:pr-4">
                                    <div className="hidden lg:block">
                                        <i className="fa-solid fa-quote-left text-[90px] text-black mb-6 "></i>
                                    </div>
                                    <p className={`text-lg text-black mt-2 ${styles.indi} w-[80%] text-justify`}>{testimonial.testimonialText}</p>
                                    <div className="flex flex-col w-full  lg:w-[80%] items-end justify-end">
                                    <img src={testimonial.imageSrc} alt="" className='mt-12 rounded-full grayscale block lg:hidden transition-all group-hover:scale-105 h-[50px] w-[50px]' />
                                        <p className={`text-2xl text-black font-bold lg:w-[80%] text-right ${styles.perm}`}>~ {testimonial.name}</p>
                                        <p className={`text-black ${styles.pang} lg:w-[80%] text-sm text-right`}>{testimonial.role}</p>
                                        
                                        <div className="flex items-end justify-end w-full lg:hidden social-links mt-2 mb-6">
                                            {testimonial.socialLinks.github && (
                                                <Link href={testimonial.socialLinks.github}><i className="fa-brands fa-github mr-3 transition-all hover:scale-90 text-black text-base"></i></Link>
                                            )}
                                            {testimonial.socialLinks.facebook && (
                                                <Link href={testimonial.socialLinks.facebook}><i className="fa-brands fa-facebook mr-3 transition-all hover:scale-90 text-black text-base"></i></Link>
                                            )}
                                            {testimonial.socialLinks.linkedin && (
                                                <Link href={testimonial.socialLinks.linkedin}><i className="fa-brands fa-linkedin mr-3 transition-all hover:scale-90 text-black text-base"></i></Link>
                                            )}
                                            {testimonial.socialLinks.instagram && (
                                                <Link href={testimonial.socialLinks.instagram}><i className="fa-brands fa-square-instagram mr-3 transition-all hover:scale-90 text-black text-base"></i></Link>
                                            )}
                                            {testimonial.socialLinks.twitter && (
                                                <Link href={testimonial.socialLinks.twitter}><i className="fa-brands fa-twitter mr-3 transition-all hover:scale-90 text-black text-base"></i></Link>
                                            )}
                                            {testimonial.socialLinks.email && (
                                                <Link href={testimonial.socialLinks.email}><i className="fa-solid fa-envelope mr-3 transition-all hover:scale-90 text-black text-base"></i></Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {loaded && instanceRef.current && (
                        <>
                            <Arrow
                                left
                                onClick={(e: any) =>
                                    e.stopPropagation() || instanceRef.current?.prev()
                                }
                                disabled={currentSlide === 0}
                            />

                            <Arrow
                                onClick={(e: any) =>
                                    e.stopPropagation() || instanceRef.current?.next()
                                }
                                disabled={
                                    currentSlide ===
                                    instanceRef.current.track.details.slides.length - 1
                                }
                            />
                        </>
                    )}
                </div>
                {loaded && instanceRef.current && (
                    <div className="dots">
                        {[
                            ...Array.from(Array(instanceRef.current.track.details.slides.length).keys()),
                        ].map((idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            ></button>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
}) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}

export default Testimonial;
