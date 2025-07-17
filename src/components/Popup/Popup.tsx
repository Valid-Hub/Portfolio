import React from 'react';
import styles from '../../styles/Components/Popup/popup.module.css';
import { CircleCheck, CircleAlert, CircleX } from 'lucide-react';

type PopupProps = {
    id: number;
    message: string;
    type: 'success' | 'error' | 'notice';
    closing: boolean;
};

const Popup: React.FC<PopupProps> = ({ message, type, closing }) => {
    const getIcon = () => {
        switch (type) {
            case 'success':
                return <CircleCheck className={styles.icon} />;
            case 'notice':
                return <CircleAlert className={styles.icon} />;
            case 'error':
                return <CircleX className={styles.icon} />;
            default:
                return null;
        }
    };

    return (
        <div className={`${styles.popup} ${styles[type]} ${closing ? styles.fadeOut : styles.fadeIn}`}>
            {getIcon()}
            <span>{message}</span>
        </div>
    );
};

export default Popup;
