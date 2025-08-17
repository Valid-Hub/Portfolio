import React, { useState, useMemo } from 'react';
import { useI18n } from '../../contexts/I18nContext';
import styles from '../../styles/Components/Sections/projects.section.module.css';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import { useCompatibility } from '../../hooks/useCompability';
import WordBanner from '../Banners/WordBanner';

interface Project {
    id: number;
    title: string;
    descriptionHu: string;
    descriptionEn: string;
    image: string;
    githubUrl: string | null;
    liveUrl: string | null;
}

const bannerWordsArray = ['React', 'TypeScript', 'CSS Modules', 'Node JS', 'JavaScript', 'Next JS', 'Nest JS', 'Vue'];

const projects: Project[] = [
    {
        id: 1,
        title: 'Portfolio',
        descriptionHu:
            'Modern portfólió weboldal React és TypeScript alapokon. Letisztult dizájn, finom animációk és 3D elemek a látványos megjelenésért. Teljes mértékben reszponzív, minden eszközre optimalizálva.',

        descriptionEn:
            'Modern portfolio website built with React and TypeScript. Clean design, smooth animations, and 3D elements for a visually engaging experience. Fully responsive and optimized for all devices.',
        image: '/portfolio.png',
        githubUrl: 'https://github.com/Valid-Hub/Portfolio',
        liveUrl: null,
    } as Project,
    {
        id: 2,
        title: 'Pollák Csengő',
        descriptionHu:
            'Iskolai csengőrendszer webes vezérléssel. Csoportos fejlesztés keretében készült, modern technológiákkal. Felhasználókezelés, jogosultsági szintek, időzített csengési beállítások és kezelőfelület. Reszponzív dizájn, egyszerű használat oktatási intézmények számára.',
        descriptionEn:
            'School bell system with web-based control. Developed as part of a team project using modern technologies. Includes user management, permission levels, scheduled bell settings, and an intuitive control panel. Fully responsive design optimized for use in educational institutions.',
        image: '/pollakCsengo.png   ',
        githubUrl: 'https://github.com/Valid-Hub/Pollak-Csengo-Thesis',
        liveUrl: null,
    } as Project,
    {
        id: 3,
        title: 'PlateMate',
        descriptionHu:
            'Teljes körű étterem-menedzsment rendszer Vue.js és Express technológiákkal. Asztalfoglalás, rendeléskezelés és admin felület MySQL adatbázissal. Teljesen reszponzív kialakítás. Az első fullstack projektjeim egyike.',
        descriptionEn:
            'Full-featured restaurant management system built with Vue.js and Express. Includes table reservations, order handling, and an admin panel backed by a MySQL database. Fully responsive design. One of my first fullstack projects.',
        image: '/plateMate.png',
        githubUrl: 'https://github.com/Valid-Hub/PlateMate',
        liveUrl: null,
    } as Project,
    {
        id: 4,
        title: 'EduCloud backend',
        descriptionHu:
            'Iskolai projekt keretében készült oktatásmenedzsment rendszer backendje. A Google Classroom kisebb, testreszabott alternatívája, NestJS és TypeScript alapokon. PostgreSQL adatbázissal és ORM-mel valósítottuk meg, egy csapattársammal közösen az iskola számára.',
        descriptionEn:
            'Backend for a custom-built education management system, created as a school project. A lightweight alternative to Google Classroom, built with NestJS and TypeScript. Uses PostgreSQL with ORM, developed in collaboration with a teammate for our school.',
        image: '/educloud.webp',
        githubUrl: 'https://github.com/Valid-Hub/EduCloud-Backend',
        liveUrl: null,
    } as Project,
    {
        id: 5,
        title: 'Final exam',
        descriptionHu:
            'Ezek a záróvizsga feladataim a megoldásaikkal együtt. Mindegyikre 100%-ot kaptam. A feladatok magyar nyelvűek, de a megoldásokban többnyire angolt használtam a változók neveinél.',
        descriptionEn:
            "These are my final exam tasks with their solutions. I've recieved 100% on all of them. The tasks are in Hungarian, but in the solutions I mostly used English as the primary language for variables.",
        image: '/finalExam.jpg',
        githubUrl: 'https://github.com/Valid-Hub/Final-Exam',
        liveUrl: null,
    } as Project,
];

const ProjectsSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { t, language } = useI18n();
    const { isVisible, ref } = useInView();
    const { width } = useCompatibility(768);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const tags = ['React', 'TypeScript', 'Next.js', 'Node.js', 'CSS/SCSS', 'Git'];

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

            <div className={styles.projectsSection} ref={ref}>
                <div className={styles.contentWrapper}>
                    <div className={`${styles.experienceColumn} ${isVisible ? styles.animate : ''}`}>
                        <div className={`${styles.experienceContent} ${isVisible ? styles.animate : ''}`}>
                            <h2 className={styles.experienceTitle}>{t('sections.projects.title')}</h2>

                            <p>{t('sections.projects.paragraphs.0')}</p>

                            <p>{t('sections.projects.paragraphs.1')}</p>

                            <p>{t('sections.projects.paragraphs.2')}</p>
                        </div>

                        <div className={styles.skillsSection}>
                            <div className={styles.skillTags}>
                                {tags.map((tag, index) => {
                                    return (
                                        <span key={index} className={`${styles.skillTag}`} style={{ animationDelay: `${index * 0.5}s` }}>
                                            {tag}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.projectsColumn} ${isVisible ? styles.animate : ''}`}>
                        <div className={styles.carouselContainer}>
                            <div
                                className={styles.carouselWrapper}
                                style={{
                                    transform: `translateX(-${currentSlide * 100}%)`,
                                }}
                            >
                                {projects.map((project) => (
                                    <div key={project.id} className={styles.carouselSlide}>
                                        <div className={styles.projectCard}>
                                            <img src={project.image} alt={project.title} className={styles.projectImage} />

                                            <div className={styles.projectContent}>
                                                <div>
                                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                                    <p className={styles.projectDescription}>
                                                        {language === 'hu' ? project.descriptionHu : project.descriptionEn}
                                                    </p>
                                                </div>

                                                <div className={styles.projectLinks}>
                                                    {project.githubUrl && (
                                                        <a
                                                            href={project.githubUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`${styles.linkButton} ${styles.githubButton}`}
                                                        >
                                                            <Github size={18} />
                                                            GitHub
                                                        </a>
                                                    )}

                                                    {project.liveUrl && (
                                                        <a
                                                            href={project.liveUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`${styles.linkButton} ${styles.liveButton}`}
                                                        >
                                                            <ExternalLink size={18} />
                                                            {t('sections.projects.buttons.live')}
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.carouselControlsWrapper}>
                            <div className={styles.carouselControls}>
                                <button onClick={prevSlide} className={`${styles.navButton} ${styles.prevButton}`}>
                                    <ChevronLeft size={24} />
                                    {width > 768 ? t('sections.projects.buttons.previous') : null}
                                </button>

                                <button onClick={nextSlide} className={`${styles.navButton} ${styles.nextButton}`}>
                                    {width > 768 ? t('sections.projects.buttons.next') : null}
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WordBanner words={bannerWordsArray} direction="left" />
        </div>
    );
};

export default ProjectsSection;
