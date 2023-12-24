"use client";
import React from 'react';
import Landing from '@/components/DoodlePage/Home/landing';
import About from '@/components/DoodlePage/Home/aboutme';
import Skills from '@/components/DoodlePage/Home/skills';
import Experience from '@/components/DoodlePage/Home/experience';
import Projects from '@/components/DoodlePage/Home/projects';
import Volunteer from '@/components/DoodlePage/Home/volunteer';
import Testimonial from '@/components/DoodlePage/Home/testimonial';
import Stats from '@/components/DoodlePage/Home/stats';
import Hobbies from '@/components/DoodlePage/Home/hobbies';


const DoodlePage: React.FC = () => {
        return (
            <>
            <div className="main w-full min-h-screen bg-white">
                <Landing/>
                <About/>
                <Skills/>
                <Experience/>
                <Projects/>
                <Volunteer/>
                <Stats/>
                <Testimonial/> 
                <Hobbies/>
            </div>
            </>
    );
};

export default DoodlePage;
