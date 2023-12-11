"use client";
import React from 'react';
import styles from '../../styles/DoodlePage/styles.module.css';
import Landing from '@/components/DoodlePage/Home/landing';
import About from '@/components/DoodlePage/Home/aboutme';
import Skills from '@/components/DoodlePage/Home/skills';


const DoodlePage: React.FC = () => {
        return (
            <>
            <div className="main w-full min-h-screen bg-white">
                <Landing/>
                <About/>
                <Skills/>
            </div>
            </>
    );
};

export default DoodlePage;
