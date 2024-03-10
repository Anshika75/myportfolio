"use client";
import React from 'react';
import ProjectLanding from '@/components/DoodlePage/projectlanding';
import MoreProjects from '@/components/DoodlePage/moreprojects';


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
