"use client";
import React from 'react';
import styles from '../../../styles/DoodlePage/style.module.css';
import {
    useKeenSlider,
    KeenSliderPlugin,
    KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { MutableRefObject } from 'react';

// Mock data for the slider content
const experiences = [
    {
        "company": "BasketHunt Pvt Ltd",
        "role": "Internet Technology Development Intern",
        "timePeriod": "Feb 2022 - Apr 2022 | 3 mos",
        "responsibilities": "Managed VPNs and user profiles on the Moodle platform.",
        "url": "https://www.dropbox.com/scl/fi/789q3c0lzplgo0uu0uy7v/1630649608507-removebg-preview.png?rlkey=vwjihkvnpu6re98h03vas0dkt&dl=1"
    },
    {
        "company": "The LaDebug Club",
        "role": "Technical Team Co-ordinator",
        "timePeriod": "Jan 2022 - Aug 2022 | 8 mos",
        "responsibilities": "Developed the team website and handled mailer management.",
        "url": "https://www.dropbox.com/scl/fi/08uksa8dcopwimxu0bo1u/society_club_official_logo-removebg-preview.png?rlkey=4829g3fhqeroode68ht7jy1mo&dl=1"
    },
    {
        "company": "TreeAndHumanKnot",
        "role": "Web Development Intern",
        "timePeriod": "Jun 2022 - Sep 2022 | 4 mos",
        "responsibilities": "Designed and developed the website using child and parent themes.",
        "url": "https://www.dropbox.com/scl/fi/y2qpy5fhqe38fwpy04nz1/images-2.jpeg?rlkey=9s7bto0cygbryr2zj7yvn4ylv&dl=1",
    },
    {
        "company": "Repaybly",
        "role": "Senior Frontend Developer",
        "timePeriod": "Aug 2022 - Nov 2022 | 4 mos",
        "responsibilities": "Developed the website using React and Tailwind; managed the team.",
        "url": "https://www.dropbox.com/scl/fi/pkla3l9pgyq1mg06ostu0/repaybly_gmz_logo-removebg-preview.png?rlkey=vahi3jxc8lec488rqsw6b6w6x&dl=1",
    },
    {
        "company": "INFINITY SMART INDIA",
        "role": "Web Developer",
        "timePeriod": "Jun 2022 - Dec 2022 | 7 mos",
        "responsibilities": "Developed a school management system on React and Tailwind from Figma UI.",
        "url": "https://www.dropbox.com/scl/fi/ez91wyf6akk1h9c0gwgim/1649053371963-removebg-preview.png?rlkey=o6wphu6kupdw6ubewy0gy2w5o&dl=1",
    },
    {
        "company": "House of Couton Private Limited",
        "role": "Subject Matter Expert",
        "timePeriod": "Jun 2023 - Jul 2023 | 2 mos",
        "responsibilities": "Completed content writing tasks, worked with UML software, and did wireframe designs.",
        "url": "https://www.dropbox.com/scl/fi/r89a4yh2zsqxmlpfhddif/1630604650807-removebg-preview.png?rlkey=hfjf3wkf8xg10t2bjjb29ld0d&dl=1",
    },
    {
        "company": "Hackoverflow Society",
        "role": "Technical Lead",
        "timePeriod": "Jan 2022 - Aug 2023 | 1 yr 8 mos",
        "responsibilities": "Led the tech team, developed the team website, and actively contributed to event organization. Organized HS Day, Hack The Fest, and judged the CSS Quest competition.",
        "url": "https://www.dropbox.com/scl/fi/8gkb7gvqroajvr6ms05yj/images__1_-removebg-preview.png?rlkey=k2w58h6bb1bqk3k55u8dkxip3&dl=1"
    },
    {
        "company": "Report Prime",
        "role": "Web Development Intern",
        "timePeriod": "Jun 2023 - Oct 2023 | 5 mos",
        "responsibilities": "Developed the site using Bootstrap and Bootstrap Sass.",
        "url": "https://www.dropbox.com/scl/fi/tvwvajw8w4mksvmkc3n9y/reportmines_com_logo-removebg-preview.png?rlkey=8iz60k117fffu1q594dhydd4y&dl=1",
    },
    {
        "company": "Medantrik Medtech Pvt Ltd",
        "role": "Frontend Developer",
        "timePeriod": "Oct 2023 - Present | 2 mos",
        "responsibilities": "Designed the app on Figma and developed its working prototype.",
        "url": "https://www.dropbox.com/scl/fi/a3y6grw2m3yw1p2xot34o/medantrik_logo.jpeg?rlkey=uls9r4v1fw0wltreuay5i02nl&dl=1"
    }
];

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
            <div className="mt-8 flex flex-col items-center justify-start pb-20 px-[20px] lg:px-[60px]">
                <div className={`flex flex-col relative w-full items-center scale-50 lg:scale-100 ${styles.anim1}`}>
                    <img src="https://www.dropbox.com/scl/fi/qp30gepl98pdihzjo3h4f/Group-1.png?rlkey=l0qe1jjslbrieiiqhdra900ih&dl=1" className="absolute top-[50%] left-[50%] h-[6rem] w-[9rem] -translate-x-1/2 -translate-y-1/2" />
                    <div className={`text-white text-5xl z-20 ${styles.pang}`}>Work</div>
                </div>
                <h1 className={`text-6xl lg:text-[120px] -mt-4 text-black ${styles.lond} ${styles.anim2} font-black`}>Voyage</h1>

                    <div ref={sliderRef} className="keen-slider mt-12">
                        {experiences.map((experience, index) => (
                            <div key={index} className={`keen-slider__slide border-black rounded-lg border-4 p-4`}>
                                <div className={`${styles.indi} text-3xl text-black`}><b className={`${styles.pang} mr-2`}>Company:</b>{experience.company}</div>
                                <div className={`${styles.indi} text-3xl text-black`}><b className={`${styles.pang} mr-2`}>Role:</b>{experience.role}</div>
                                <div className={`${styles.indi} text-3xl text-black`}><b className={`${styles.pang} mr-2`}>Duration:</b>{experience.timePeriod}</div>
                                <div className={`${styles.indi} text-3xl text-black`}><b className={`${styles.pang} mr-2`}>Responsibilities:</b>{experience.responsibilities}</div>
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
