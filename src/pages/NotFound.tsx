import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, Home } from 'lucide-react';
import styles from '../styles/Pages/not.found.module.css';

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <div className={styles.iconWrapper}>
                    <div className={styles.mapWrapper}>
                        <Map className={styles.mapIcon} />
                        <div className={styles.errorCircle}>
                            <div className={styles.errorCode}>404</div>
                        </div>
                    </div>
                </div>
                <h1 className={styles.title}>Az oldal nem található</h1>
                <p className={styles.message}>Sajnáljuk, de a keresett oldal nem létezik vagy már nem elérhető.</p>
                <div className={styles.buttonWrapper}>
                    <button onClick={() => navigate('/home')} className={styles.buttonLink}>
                        <Home className={styles.homeIcon} />
                        Vissza a főoldalra
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
