"use client";
import React from 'react';
import styles from '../../styles/DoodlePage/style.module.css';
import Link from 'next/link';

const Landing: React.FC = () => {
    const style: Record<string, React.CSSProperties> = {
        container: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            backgroundSize: 'cover',
            overflow: 'hidden',
        },
    };

    return (
        <>
            <div style={style.container} className='h-[50vh] lg:min-h-[100vh] bg-black'>
                <div className="flex flex-col justify-center items-center">
                    <img className='w-60 h-60' src="https://www.dropbox.com/scl/fi/scbldisgtdfuidy9ddiwp/Avatar.png?rlkey=irkfu0c7lgoylyhorqpnztpm2&dl=1" alt="" />
                </div>
            </div>
        </>
    );
};

export default Landing;
