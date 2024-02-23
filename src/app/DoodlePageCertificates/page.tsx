"use client";
import React from 'react';
import CertficateLanding from '@/components/DoodlePage/Home/certificatelanding';
import MoreCertificates from '@/components/DoodlePage/Home/morecertificates';


const DoodlePage: React.FC = () => {
        return (
            <>
            <div className="main w-full min-h-screen bg-white">
                <CertficateLanding/>
                <MoreCertificates/>
            </div>
            </>
    );
};

export default DoodlePage;
