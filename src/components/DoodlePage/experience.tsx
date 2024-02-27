"use client";
import React from 'react';
import styles from '../../styles/DoodlePage/style.module.css';
import {
    useKeenSlider,
    KeenSliderPlugin,
    KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { MutableRefObject } from 'react';
import experiences from "../../helpers/experience";
function ThumbnailPlugin(
    mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx: number) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}

const Experience: React.FC = () => {
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
    });
    const [thumbnailPerView, setThumbnailPerView] = React.useState(4);

    React.useEffect(() => {
        const handleResize = () => {
            const newThumbnailPerView = window.innerWidth <= 768 ? 2 : 4;
            setThumbnailPerView(newThumbnailPerView);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
        {
            initial: 0,
            slides: {
                perView: thumbnailPerView,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    );

    return (
        <>
            <style>
                {`
                    .thumbnail .keen-slider__slide {
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .thumbnail .keen-slider__slide img {
                        max-width: 100%;
                        max-height: 100%;
                    }

                    .thumbnail .keen-slider__slide.active {
                        border: 4px dashed black;
                        border-radius: 15px;
                    }
                    .thumbnail .keen-slider__slide.active img {
                        transform: scale(1.1);
                    }
                `}
            </style>
            <div id="doodleexperience" className="mt-8 flex flex-col items-center justify-start pb-20 px-[20px] lg:px-[60px]">
                <div className={`flex flex-col relative w-full items-center scale-50 lg:scale-100 ${styles.anim1}`}>
                    <img src="https://www.dropbox.com/scl/fi/qp30gepl98pdihzjo3h4f/Group-1.png?rlkey=l0qe1jjslbrieiiqhdra900ih&dl=1" className="absolute top-[50%] left-[50%] h-[6rem] w-[9rem] -translate-x-1/2 -translate-y-1/2" />
                    <div className={`text-white text-5xl z-20 ${styles.pang}`}>Work</div>
                </div>
                <h1 className={`text-6xl lg:text-[120px] -mt-4 text-black ${styles.lond} ${styles.anim2} font-black`}>Voyage</h1>

                    <div ref={sliderRef} className="keen-slider mt-12">
                        {experiences.map((experience, index) => (
                            <div key={index} className={`keen-slider__slide border-black rounded-lg border-4 p-4`}>
                                <div className={`${styles.indi} text-lg lg:text-3xl text-black`}><b className={`${styles.pang} mr-2`}>Company:</b>{experience.company}</div>
                                <div className={`${styles.indi} text-lg lg:text-3xl text-black`}><b className={`${styles.pang} mr-2`}>Role:</b>{experience.role}</div>
                                <div className={`${styles.indi} text-lg lg:text-3xl text-black`}><b className={`${styles.pang} mr-2`}>Duration:</b>{experience.timePeriod}</div>
                                <div className={`${styles.indi} text-lg lg:text-3xl text-black`}><b className={`${styles.pang} mr-2`}>Responsibilities:</b>{experience.responsibilities}</div>
                            </div>
                        ))}
                    </div>

                    <div ref={thumbnailRef} className="keen-slider thumbnail mt-8">
                        {experiences.map((experience, index) => (
                            <div key={index} className={`keen-slider__slide border-black rounded-lg border-4 p-4 group cursor-pointer`}>
                                <img src={experience.url} className='grayscale h-32 group-hover:scale-110 transition-all' />
                            </div>
                        ))}
                    </div>
            </div>
        </>
    );
};

export default Experience;
