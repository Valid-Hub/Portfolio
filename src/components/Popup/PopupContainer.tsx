import React, { useEffect, useState } from 'react';
import { usePopup } from '../../contexts/PopupContext';
import Popup from './Popup';
import styles from '../../styles/Components/Popup/popup.container.module.css';

const PopupContainer = () => {
    const { popups, removePopup } = usePopup();
    const [closingPopups, setClosingPopups] = useState<number[]>([]);

    useEffect(() => {
        popups.forEach((popup) => {
            if (!closingPopups.includes(popup.id)) {
                setTimeout(() => {
                    setClosingPopups((prev) => [...prev, popup.id]);
                    setTimeout(() => {
                        removePopup(popup.id);
                        setClosingPopups((prev) => prev.filter((id) => id !== popup.id));
                    }, 300);
                }, 3000);
            }
        });
    }, [popups]);

    return (
        <div className={styles.popupContainer}>
            {popups.map((popup) => (
                <Popup key={popup.id} id={popup.id} message={popup.message} type={popup.type} closing={closingPopups.includes(popup.id)} />
            ))}
        </div>
    );
};

export default PopupContainer;
