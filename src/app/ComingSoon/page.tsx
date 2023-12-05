// ComingSoonPage.tsx
"use client"
import React, { useState, useEffect } from 'react';
import styles from '../../styles/ComingSoon/styles.module.css';

const ComingSoonPage: React.FC = () => {
    const launchDate = new Date('2024-01-01T00:00:00');
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
    const [progressDays, setProgressDays] = useState(calculateProgress('days'));
    const [progressHours, setProgressHours] = useState(calculateProgress('hours'));
    const [progressMinutes, setProgressMinutes] = useState(calculateProgress('minutes'));
    const [progressSeconds, setProgressSeconds] = useState(calculateProgress('seconds'));

    function calculateTimeRemaining() {
        const now = new Date();
        const timeRemaining = launchDate.getTime() - now.getTime();
        return {
            days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
            hours: Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((timeRemaining % (1000 * 60)) / 1000),
        };
    }

    function calculateProgress(unit: 'days' | 'hours' | 'minutes' | 'seconds') {
        const totalUnits = {
            days: 365,
            hours: 24,
            minutes: 60,
            seconds: 60,
        }[unit];

        const remainingTime = timeRemaining[unit];
        return ((totalUnits - remainingTime) / totalUnits) * 100;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const newTimeRemaining = calculateTimeRemaining();
            const newProgressDays = calculateProgress('days');
            const newProgressHours = calculateProgress('hours');
            const newProgressMinutes = calculateProgress('minutes');
            const newProgressSeconds = calculateProgress('seconds');

            setTimeRemaining(newTimeRemaining);
            setProgressDays(newProgressDays);
            setProgressHours(newProgressHours);
            setProgressMinutes(newProgressMinutes);
            setProgressSeconds(newProgressSeconds);
        }, 1000);

        return () => clearInterval(interval);
    }, [timeRemaining]);

    const formatNumber = (num: number) => (num < 10 ? `0${num}` : num);

    return (
        <div className={`bg-[#212428] text-white min-h-screen flex justify-center items-center ${styles.bg}`}>
            <div className={`${styles.overlay}`}></div>
            <div className="text-center z-20 opacity-80">
                <h1 className={`text-[90px] font-bold text-[#FD4766] ${styles.black}`}>Coming Soon</h1>
                <div className="w-[900px] grid grid-cols-4 gap-0 mt-8">
                    {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
                        <div key={index} className="relative grid mt-10 place-items-center">
                            <svg className="absolute transform -rotate-90">
                                <circle cx="50%" cy="50%" r="60" stroke="#3B3251" strokeWidth="8" fill="transparent"  />
                                <circle
                                    cx="50%"
                                    cy="50%"
                                    r="60"
                                    stroke="#FD4766"  // Initial neon green color
                                    strokeWidth="8"
                                    fill="transparent"
                                    strokeDasharray={unit === 'days' ? 376.991 : unit === 'hours' ? 376.991 : 376.991}
                                    strokeDashoffset={
                                        unit === 'days'
                                            ? 376.991 - (timeRemaining[unit as keyof typeof timeRemaining] * 376.991) / 365
                                            : unit === 'hours'
                                                ? 376.991 - (timeRemaining[unit as keyof typeof timeRemaining] * 376.991) / 24
                                                : 376.991 - (timeRemaining[unit as keyof typeof timeRemaining] * 376.991) / 60
                                    }
                                    strokeLinecap="round"
                                    className="circular-progress-bar"
                                    style={{
                                        filter: 'drop-shadow(10px 10px 10px #1c1e22, -10px -10px 10px #262a2e)',
                                    }}
                                />
                            </svg>
                            <div className="text-center">
                                <div className={`text-3xl font-bold text-[#FD4766] ${styles.grad}`}>{formatNumber(timeRemaining[unit as keyof typeof timeRemaining])}</div>
                                <div className={`text-sm capitalize text-[#ffd1d8] ${styles.grad}`}>{unit}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ComingSoonPage;
