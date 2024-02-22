"use client";
import React from 'react';
import ProjectLanding from '@/components/DoodlePage/Home/projectlanding';
import MoreProjects from '@/components/DoodlePage/Home/moreprojects';


const DoodlePage: React.FC = () => {
        return (
            <>
            <div className="main w-full min-h-screen bg-white">
                <ProjectLanding/>
                <MoreProjects/>
            </div>
            </>
    );
};

export default DoodlePage;
