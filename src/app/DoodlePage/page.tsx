"use client";
import React from 'react';
import styles from '../../styles/DoodlePage/styles.module.css';
import Landing from '@/components/DoodlePage/Home/landing';
import About from '@/components/DoodlePage/Home/aboutme';
import Skills from '@/components/DoodlePage/Home/skills';
import Experience from '@/components/DoodlePage/Home/experience';


const DoodlePage: React.FC = () => {
        return (
            <>
            <div className="main w-full min-h-screen bg-white">
                <Landing/>
                <About/>
                <Skills/>
                <Experience/>
            </div>
            </>
    );
};

export default DoodlePage;
