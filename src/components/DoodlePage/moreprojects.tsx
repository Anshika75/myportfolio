import React, { useState } from 'react';
import styles from '../../styles/DoodlePage/style.module.css';
import Link from 'next/link';
import shuffledProjects from "../../helpers/projects"; // Import the projects data

const MoreProjects: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    // Function to handle filter change
    const handleFilterChange = (tag: string) => {
        setActiveFilter(tag);
    };

    // Function to filter projects based on the active tag
    const filteredProjects = activeFilter === "All" ? shuffledProjects : shuffledProjects.filter((project: any) => project.tag === activeFilter);

    return (
        <>
            <div className="mt-20 relative flex flex-col items-center justify-start pb-20 px-[20px] lg:px-[60px]">
                {/* Header and Filter Buttons */}
                <div className={`flex flex-col relative w-full items-center scale-50 lg:scale-100 ${styles.anim1}`}>
                    {/* Header Image */}
                    <img src="https://www.dropbox.com/scl/fi/b21fen5gwrdcuf3h57a2b/Group-1.png?rlkey=tu5pfc4w48fnepr2dszosbayl&dl=1" className="absolute top-[40%] left-[50%] h-[5rem] w-[7rem] -translate-x-1/2 -translate-y-1/2" />
                    {/* Header Text */}
                    <p className={`text-white text-5xl z-20 ${styles.pang}`}>My</p>
                </div>
                <h1 className={`text-6xl -mt-2 lg:mt-0 lg:text-[120px] text-black ${styles.lond} ${styles.anim2} font-black`}>Creations</h1>
                {/* Filter Buttons */}
                <div className="grid grid-cols-3 lg:grid-cols-5 gap-5 place-items-center my-8 w-full lg:w-[75%] justify-center align-center">
                    {["All", "CSS Art", "Basic", "Intermediate", "Advanced", "Design"].map((tag, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer hover:animate-none hover:bg-opacity-100 z-20 bg-[#231F20] w-full text-center rounded-full text-white py-4 text-sm lg:text-xl ${styles.pang} ${activeFilter === tag ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                            onClick={() => handleFilterChange(tag)}
                        >
                            {tag}
                        </div>
                    ))}
                </div>
                {/* Project Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-4 lg:gap-y-16 mt-12 cursor-pointer transition-all">
                    {filteredProjects.map((project: any, index: number) => (
                        <Link key={index} href={project.githubLink} className="relative flex flex-col items-start justify-start w-full px-4 py-4 shadow-md border-4 border-black rounded-lg group hover:-translate-y-5 transition-all" target='blank'>
                            <div className={`text-2xl text-black font-bold mt-4 ${styles.perm}`}>{project.name}</div>
                            <p className={`text-black ${styles.pang} text-sm`}>{project.techStack}</p>
                            <p className={`text-lg text-black mt-2 ${styles.indi} text-justify`}>{project.description}</p>
                            <div className='flex text-black w-full justify-between mt-3'>
                                <i className={`${styles.pang} lowercase`}>#{project.tag}</i>
                                <p className={`text-black text-right font-black text-lg ${styles.pang} underline ${styles.anim1}`}>Get Glimpse</p>
                            </div>
                            <div className="absolute top-0 translate-y-[-85%] left-[30%] h-10 w-6 bg-[#555] origin-bottom rotate-[5deg]"></div>
                            <div className="absolute top-0 translate-y-[-80%] left-[30%] h-10 w-6 bg-black"></div>
                            <div className="absolute top-0 translate-y-[-85%] right-[30%] h-10 w-6 bg-[#555] origin-bottom rotate-[5deg]"></div>
                            <div className="absolute top-0 translate-y-[-80%] right-[30%] h-10 w-6 bg-black"></div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MoreProjects;
