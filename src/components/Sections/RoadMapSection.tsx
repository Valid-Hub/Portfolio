import React, { useRef, useEffect, useState, useMemo } from 'react';
import styles from '../../styles/Components/Sections/roadmap.section.module.css';
import { useInView } from '../../hooks/useInView';
import { useCompatibility } from '../../hooks/useCompability';
import { useI18n } from '../../contexts/I18nContext';

interface Experience {
    side: 'left' | 'right';
    title: string;
    content: string[];
    date: string;
}

const RoadMapSection: React.FC = () => {
    const { ref, isVisible } = useInView();
    const { t, language } = useI18n();
    const { ref: aboutRef, isVisible: aboutIsVisible } = useInView();
    const lineRef = useRef<HTMLDivElement>(null);
    const [lineHeight, setLineHeight] = useState(0);
    const { isCompatible } = useCompatibility(900);

    const isMobile = !isCompatible;

    const experiencesRaw = t('sections.roadmap.experiences', { returnObjects: true });
    const experiences = Array.isArray(experiencesRaw) ? (experiencesRaw as Experience[]) : [];

    useEffect(() => {
        const root = document.getElementById('root');
        if (!root) return;

        const handleScroll = () => {
            if (lineRef.current && root) {
                const rect = lineRef.current.getBoundingClientRect();
                const rootRect = root.getBoundingClientRect();
                const visible = Math.min(Math.max(rootRect.bottom - window.innerHeight / 2 - rect.top, 0), rect.height);
                setLineHeight((visible / rect.height) * 100);
            }
        };

        root.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => root.removeEventListener('scroll', handleScroll);
    }, []);

    const particles = useMemo(() => {
        return Array.from({ length: 30 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            animationDelay: Math.random() * 4,
        }));
    }, []);

    return (
        <div className={styles.container}>
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

            <div className={styles.aboutSection} ref={aboutRef}>
                <div className={styles.title}>{t('sections.roadmap.title')}</div>
                <div className={styles.aboutContent}>
                    <div
                        className={styles.aboutText}
                        style={{
                            opacity: aboutIsVisible ? 1 : 0,
                            transform: aboutIsVisible ? 'translateX(0)' : 'translateX(-50px)',
                            transition: 'all 0.8s ease-out',
                            transitionDelay: aboutIsVisible ? '0.2s' : '0s',
                        }}
                    >
                        <div className={styles.paragraph}>{t('sections.roadmap.paragraphs.0')}</div>
                        <div className={styles.paragraph}>{t('sections.roadmap.paragraphs.1')}</div>
                    </div>
                    <div
                        className={styles.profileImageContainer}
                        style={{
                            opacity: aboutIsVisible ? 1 : 0,
                            transform: aboutIsVisible ? 'translateX(0)' : 'translateX(50px)',
                            transition: 'all 0.8s ease-out',
                            transitionDelay: aboutIsVisible ? '0.4s' : '0s',
                        }}
                    >
                        <img src="/aboutMePicture.jpeg" alt="Profile" className={styles.profileImage} />
                    </div>
                </div>
            </div>

            <div className={styles.roadmapSection} ref={ref}>
                <div className={styles.subTitle}>{t('sections.roadmap.subtitle')}</div>
                <div className={styles.roadmapWrapper}>
                    {isMobile ? (
                        <div className={styles.mobileColumn}>
                            {experiences.map((exp, idx) => (
                                <div
                                    key={exp.title}
                                    className={styles.roadmapCard}
                                    style={{
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                                        transition: 'all 0.8s cubic-bezier(.68,-0.55,.27,1.55)',
                                        transitionDelay: isVisible ? `${0.2 * (idx + 1)}s` : '0s',
                                    }}
                                >
                                    <div className={styles.cardTitle}>{exp.title}</div>
                                    <div className={styles.cardContent}>
                                        {Array.isArray(exp.content) ? (
                                            exp.content.map((paragraph: string, i: number) => <p key={i}>{paragraph}</p>)
                                        ) : (
                                            <p>{exp.content}</p>
                                        )}
                                    </div>
                                    <div className={styles.cardDate}>{exp.date}</div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            <div className={`${styles.columnLeft} ${isVisible ? styles.animate : ''}`}>
                                {experiences
                                    .filter((e) => e.side === 'left')
                                    .map((exp, idx) => (
                                        <div
                                            key={exp.title}
                                            className={`${styles.roadmapCard} ${styles.leftCard}`}
                                            style={{
                                                marginTop: idx === 0 ? '0px' : '150px',
                                                opacity: isVisible ? 1 : 0,
                                                transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
                                                transition: 'all 1s ease-out',
                                                transitionDelay: isVisible ? `${0.2 * (idx + 1)}s` : '0s',
                                            }}
                                        >
                                            <div className={styles.cardTitle}>{exp.title}</div>
                                            <div className={styles.cardContent}>
                                                {Array.isArray(exp.content) ? (
                                                    exp.content.map((paragraph: string, i: number) => <p key={i}>{paragraph}</p>)
                                                ) : (
                                                    <p>{exp.content}</p>
                                                )}
                                            </div>
                                            <div className={styles.cardDate}>{exp.date}</div>
                                        </div>
                                    ))}
                            </div>
                            <div className={styles.roadmapLine} ref={lineRef}>
                                <div className={styles.roadmapLineFill} style={{ height: `${lineHeight}%` }} />
                            </div>
                            <div className={`${styles.columnRight} ${isVisible ? styles.animate : ''}`}>
                                {experiences
                                    .filter((e) => e.side === 'right')
                                    .map((exp, idx) => (
                                        <div
                                            key={exp.title}
                                            className={`${styles.roadmapCard} ${styles.rightCard}`}
                                            style={{
                                                marginTop: '150px',
                                                opacity: isVisible ? 1 : 0,
                                                transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
                                                transition: 'all 1s ease-out',
                                                transitionDelay: isVisible ? `${0.2 * (idx + 1)}s` : '0s',
                                            }}
                                        >
                                            <div className={styles.cardTitle}>{exp.title}</div>
                                            <div className={styles.cardContent}>
                                                {Array.isArray(exp.content) ? (
                                                    exp.content.map((paragraph: string, i: number) => <p key={i}>{paragraph}</p>)
                                                ) : (
                                                    <p>{exp.content}</p>
                                                )}
                                            </div>
                                            <div className={styles.cardDate}>{exp.date}</div>
                                        </div>
                                    ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RoadMapSection;
