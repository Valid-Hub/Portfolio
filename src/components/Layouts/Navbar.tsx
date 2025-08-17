import styles from '../../styles/Components/Layouts/navbar.module.css';
import { useI18n } from '../../contexts/I18nContext';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const { t } = useI18n();
    const { i18n } = useTranslation();

    const [language, setLanguage] = useState<'hu' | 'en'>('hu');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const storedLang = localStorage.getItem('i18nextLng') as 'hu' | 'en' | null;

        if (storedLang === 'en' || storedLang === 'hu') {
            setLanguage(storedLang);
            i18n.changeLanguage(storedLang);
        } else {
            i18n.changeLanguage('hu');
            setLanguage('hu');
        }

        const handleLanguageChange = (lng: string) => {
            if (lng === 'en' || lng === 'hu') {
                setLanguage(lng);
            }
        };

        i18n.on('languageChanged', handleLanguageChange);

        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [i18n]);

    const toggleLanguage = () => {
        const newLang: 'hu' | 'en' = language === 'hu' ? 'en' : 'hu';
        setLanguage(newLang);
        i18n.changeLanguage(newLang);
        localStorage.setItem('i18nextLng', newLang);
    };

    const handleScrollTo = (id: string) => {
        const target = document.querySelector(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setMenuOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.content}>
                <div className={styles.leftSection}>
                    <span className={styles.brandName}>Portfolio</span>
                </div>

                <div className={styles.rightSection}>
                    <div className={styles.navLinks}>
                        <a
                            href="#home"
                            className={styles.navLink}
                            onClick={(e) => {
                                e.preventDefault();
                                handleScrollTo('#home');
                            }}
                        >
                            {t('layouts.mainLayout.navbar.links.home')}
                        </a>
                        <a
                            href="#about"
                            className={styles.navLink}
                            onClick={(e) => {
                                e.preventDefault();
                                handleScrollTo('#about');
                            }}
                        >
                            {t('layouts.mainLayout.navbar.links.skills')}
                        </a>
                        <a
                            href="#projects"
                            className={styles.navLink}
                            onClick={(e) => {
                                e.preventDefault();
                                handleScrollTo('#projects');
                            }}
                        >
                            {t('layouts.mainLayout.navbar.links.projects')}
                        </a>
                        <a
                            href="#contact"
                            className={styles.navLink}
                            onClick={(e) => {
                                e.preventDefault();
                                handleScrollTo('#contact');
                            }}
                        >
                            {t('layouts.mainLayout.navbar.links.contact')}
                        </a>
                    </div>

                    <div className={`${styles.mobileMenuWrapper} ${menuOpen ? styles.menuOpen : ''}`}>
                        <div className={styles.mobileNavLinks}>
                            <a
                                href="#home"
                                className={styles.navLink}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScrollTo('#home');
                                }}
                            >
                                {t('layouts.mainLayout.navbar.links.home')}
                            </a>
                            <a
                                href="#about"
                                className={styles.navLink}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScrollTo('#about');
                                }}
                            >
                                {t('layouts.mainLayout.navbar.links.skills')}
                            </a>
                            <a
                                href="#projects"
                                className={styles.navLink}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScrollTo('#projects');
                                }}
                            >
                                {t('layouts.mainLayout.navbar.links.projects')}
                            </a>
                            <a
                                href="#contact"
                                className={styles.navLink}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScrollTo('#contact');
                                }}
                            >
                                {t('layouts.mainLayout.navbar.links.contact')}
                            </a>
                        </div>
                    </div>

                    <button
                        onClick={toggleLanguage}
                        style={{
                            backgroundImage: `url(/${language === 'hu' ? 'hun_flag.jpeg' : 'eng_flag.png'})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        className={styles.languageToggle}
                    ></button>

                    <button
                        className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                    </button>
                </div>
            </div>
        </nav>
    );
}
