import React from 'react';
import styles from '../../../styles/DoodlePage/style.module.css';

export default function Loader() {
    
    return (
        <>
            <div className={`${styles.main}`}>
                
            <div className={`${styles.hexagon}`}>
                <div className={`${styles.hexagongroup}`}>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                </div>
                <div className={`${styles.hexagongroup}`}>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                </div>
                <div className={`${styles.hexagongroup}`}>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                </div>
                <div className={`${styles.hexagongroup}`}>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                </div>
                <div className={`${styles.hexagongroup}`}>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                </div>
                <div className={`${styles.hexagongroup}`}>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                    <div className={`${styles.hexagonsector}`}></div>
                </div>
            </div>
            <p aria-label={`${styles.Loading}`}>Loading</p>
            </div>
        </>
    )
}
