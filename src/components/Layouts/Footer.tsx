import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/components/Layouts/footer.module.css';
import { Facebook, Github, Instagram, Linkedin, Music, Music2, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
    text?: string;
}

const Footer: React.FC<FooterProps> = () => {
    const [isVisible, setIsVisible] = useState(false);
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            },
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <div className={styles.wrapper} ref={footerRef}>
            <div className={styles.inner}>
                <div className={`${styles.content} ${isVisible ? styles.animate : ''}`}>
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Legális</h3>
                        <ul className={styles.linkList}>
                            <li>
                                <a href="/privacy-policy" className={styles.link}>
                                    Adatvédelmi szabályzat
                                </a>
                            </li>
                            <li>
                                <a href="/terms-of-service" className={styles.link}>
                                    Felhasználási feltételek
                                </a>
                            </li>
                            <li>
                                <a href="/cookie-policy" className={styles.link}>
                                    Süti szabályzat
                                </a>
                            </li>
                            <li>
                                <a href="/disclaimer" className={styles.link}>
                                    Jogi nyilatkozat
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Oldalak</h3>
                        <ul className={styles.linkList}>
                            <li>
                                <a href="/home" className={styles.link}>
                                    Kezdőlap
                                </a>
                            </li>
                            <li>
                                <a href="/about" className={styles.link}>
                                    Rólunk
                                </a>
                            </li>
                            <li>
                                <a href="/services" className={styles.link}>
                                    Szolgáltatások
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className={styles.link}>
                                    Kapcsolat
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`${styles.socialSection} ${isVisible ? styles.animate : ''}`}>
                    <div className={styles.socialLinks}>
                        <a href="https://facebook.com" className={styles.socialLink} aria-label="Facebook">
                            <Facebook size={24} />
                        </a>
                        <a href="https://tiktok.com" className={styles.socialLink} aria-label="Twitter">
                            <Music2 size={24} />
                        </a>
                        <a href="https://instagram.com" className={styles.socialLink} aria-label="Instagram">
                            <Instagram size={24} />
                        </a>
                        <a href="https://youtube.com" className={styles.socialLink} aria-label="YouTube">
                            <Youtube size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className={`${styles.bottomBrand} ${isVisible ? styles.animate : ''}`}>
                <span className={styles.brandText}>FADEZ.</span>
            </div>
        </div>
    );
};

export default Footer;
