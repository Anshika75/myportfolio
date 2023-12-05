// CustomAlert.tsx
import React from 'react';
import styles from '../../styles/CustomAlert/styles.module.css';

interface CustomAlertProps {
    message: string;
    onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message, onClose }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.alert}>
                <div className={styles.alertContent}>
                    <p>{message}</p>
                    <button className={styles.btn} onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default CustomAlert;
