import { useEffect, useState, useRef } from 'react';
import { Menu, X, User, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../../styles/Components/Layouts/navbar.module.css';
import { useCompatibility } from '../../hooks/useCompability';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);
    const { width } = useCompatibility(0);

    useEffect(() => {
        if (width > 999) {
            setMenuOpen(false);
        }
    }, [width]);

    useEffect(() => {
        const scrollContainer = document.getElementById('root');
        if (!scrollContainer) return;

        const handleScroll = () => {
            const currentScrollY = scrollContainer.scrollTop;

            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            lastScrollY.current = currentScrollY;
        };

        scrollContainer.addEventListener('scroll', handleScroll);

        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
            <AnimatePresence>
                {!menuOpen && showNavbar && (
                    <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -100, opacity: 0 }} className={styles.topNavbar}>
                        <span className={styles.logo}>FADEZ.</span>

                        <div className={styles.navItems}>
                            <a href="#" className={styles.navLink}>
                                Kezdőlap
                            </a>
                            <a href="#" className={styles.navLink}>
                                Időpontfoglalás
                            </a>
                            <a href="#" className={styles.navLink}>
                                Galéria
                            </a>
                        </div>

                        <div className={styles.profileWrapper}>
                            <button onClick={() => setProfileOpen((prev) => !prev)}>
                                <User className={styles.profileIcon} />
                            </button>

                            <AnimatePresence>
                                {profileOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className={styles.profileMenu}
                                    >
                                        <a href="#" className={styles.profileMenuItem}>
                                            Beállítások
                                        </a>
                                        <a href="#" className={styles.profileMenuItem}>
                                            Kijelentkezés
                                        </a>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {!menuOpen && showNavbar && (
                    <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} className={styles.bottomNavbar}>
                        <span className={styles.logo}>FADEZ.</span>

                        <button onClick={() => setMenuOpen(true)}>
                            <Menu className={styles.menuIcon} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.mobileOverlay}>
                        <div className={styles.mobileMenuItems}>
                            <a href="#" className={styles.mobileNavLink}>
                                <span>Kezdőlap</span>
                                <ChevronRight className={styles.chevronIcon} />
                            </a>
                            <a href="#" className={styles.mobileNavLink}>
                                <span>Időpontfoglalás</span>
                                <ChevronRight className={styles.chevronIcon} />
                            </a>
                            <a href="#" className={styles.mobileNavLink}>
                                <span>Galéria</span>
                                <ChevronRight className={styles.chevronIcon} />
                            </a>
                        </div>

                        <div className={styles.mobileProfileSection}>
                            <div className={styles.mobileProfileName}>John Doe</div>
                            <div className={styles.mobileProfileLinks}>
                                <a href="#" className={styles.mobileProfileLink}>
                                    <span>Beállítások</span>
                                    <ChevronRight className={styles.chevronIcon} />
                                </a>
                                <a href="#" className={styles.mobileProfileLink}>
                                    <span>Kijelentkezés</span>
                                    <ChevronRight className={styles.chevronIcon} />
                                </a>
                            </div>
                        </div>

                        <button onClick={() => setMenuOpen(false)} className={styles.closeButton}>
                            <X className={styles.closeIcon} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
