import { useState, useEffect, useMemo } from 'react';
import { useI18n } from '../../contexts/I18nContext';
import styles from '../../styles/Components/Sections/hero.section.module.css';
import { useInView } from '../../hooks/useInView';
import { Code, Download, FileJson, Github, Hexagon, Send } from 'lucide-react';
import WordBanner from '../Banners/WordBanner';

const HeroSection = () => {
    const { t } = useI18n();
    const { ref, isVisible } = useInView();
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    const typewriterTexts = [
        t('sections.hero.typewriter.0'),
        t('sections.hero.typewriter.1'),
        t('sections.hero.typewriter.2'),
        t('sections.hero.typewriter.3'),
    ];

    const bannerWordsArray = ['React', 'TypeScript', 'CSS Modules', 'Node JS', 'JavaScript', 'Next JS', 'Nest JS', 'Vue'];

    const handleCapsuleClick = () => {
        document.getElementById('root')?.scrollBy({
            top: window.innerHeight - 75,
            behavior: 'smooth',
        });
    };

    const particles = useMemo(() => {
        return Array.from({ length: 30 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            animationDelay: Math.random() * 4,
        }));
    }, []);

    useEffect(() => {
        if (isTyping) {
            const currentText = typewriterTexts[currentIndex];
            if (displayedText.length < currentText.length) {
                const timeout = setTimeout(() => {
                    setDisplayedText(currentText.slice(0, displayedText.length + 1));
                }, 100);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setIsTyping(false);
                }, 2000);
                return () => clearTimeout(timeout);
            }
        } else {
            if (displayedText.length > 0) {
                const timeout = setTimeout(() => {
                    setDisplayedText(displayedText.slice(0, -1));
                }, 50);
                return () => clearTimeout(timeout);
            } else {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % typewriterTexts.length);
                setIsTyping(true);
            }
        }
    }, [displayedText, currentIndex, isTyping]);

    return (
        <div className={styles.container} ref={ref}>
            <div className={styles.content}>
                <div className={`${styles.leftContent} ${isVisible ? styles.animate : ''}`}>
                    <div className={styles.titleSection}>
                        <h1 className={styles.title}>{t('sections.hero.title')}</h1>
                        <p className={styles.subtitle}>{t('sections.hero.subtitle')}</p>
                    </div>

                    <div className={styles.typewriterSection}>
                        <span className={styles.typewriterText}>
                            {displayedText}
                            <span className={styles.cursor}>|</span>
                        </span>
                    </div>

                    <div className={styles.ctaSection}>
                        <button
                            className={`${styles.ctaButton} ${styles.primary}`}
                            onClick={() => {
                                const contactSection = document.getElementById('contact');
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            <Send />
                            <span>{t('sections.hero.getInTouch')}</span>
                        </button>

                        <a href="/Patrik_Jani_CV.pdf" download className={`${styles.ctaButton} ${styles.secondary}`}>
                            <Download />
                            <span>{t('sections.hero.downloadCV')}</span>
                        </a>
                    </div>
                </div>

                <div className={`${styles.rightContent} ${isVisible ? styles.animate : ''}`}>
                    <div className={styles.profileBubble}>
                        <div className={styles.bubbleBorder}></div>
                        <div className={styles.imageContainer}>
                            <img src="/profilePicture.png" alt="Profile" className={styles.profileImage} />
                        </div>
                        <div className={styles.profileGlow}></div>
                        <div className={`${styles.languageFloatingIcon1}`}>
                            <Github width={'100%'} height={'100%'} />
                        </div>
                        <div className={`${styles.languageFloatingIcon2}`}>
                            <FileJson width={'100%'} height={'100%'} />
                        </div>
                        <div className={`${styles.languageFloatingIcon3}`}>
                            <Hexagon width={'100%'} height={'100%'} />
                        </div>
                        <div className={`${styles.languageFloatingIcon4}`}>
                            <Code width={'100%'} height={'100%'} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.heroBottom} ${isVisible ? styles.animate : ''}`}>
                <div className={styles.verticalCapsule} onClick={handleCapsuleClick} tabIndex={0} role="button" aria-label="Scroll down">
                    <div className={styles.capsuleBall} />
                </div>
                <WordBanner words={bannerWordsArray} direction="right" />
            </div>

            <div className={styles.particles}>
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className={styles.particle}
                        style={{
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                            animationDelay: `${particle.animationDelay}s`,
                        }}
                    />
                ))}
            </div>

            <div className={styles.backgroundEffects}>
                <div className={`${styles.gradientOrb} ${styles.orb1}`}></div>
                <div className={`${styles.gradientOrb} ${styles.orb2}`}></div>
                <div className={`${styles.gradientOrb} ${styles.orb3}`}></div>
            </div>
        </div>
    );
};

export default HeroSection;
