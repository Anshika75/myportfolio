"use client";
import React from 'react';
import CertficateLanding from '@/components/DoodlePage/certificatelanding';
import MoreCertificates from '@/components/DoodlePage/morecertificates';


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
