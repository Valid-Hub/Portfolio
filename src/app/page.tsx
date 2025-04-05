'use client';
import React, { useState, useEffect } from 'react';

import SpecialityCard from '@/components/SpecialityCard';
import LandingBox from '@/components/LandingBox';
import Paragraph from '@/components/Paragraph';
import QualityCubes from '@/components/QualityCubes';
import ProjectCard from '@/components/ProjectCard';
import Navbar from '@/components/Navbar';
import AboutMeDescription from '@/components/AboutMeDescription';
import CardSlider from '@/components/CardSlider';
import Contact from '@/components/Contact';

import '@/styles/HomeStyles.css';

export default function Home() {
    const cardData = [
        {
            imageUrl: 'alma.jpg',
            title: 'Project 1',
            content: 'Description for Project 1',
            hasGithub: true,
            githubUrl: 'https://github.com/project1',
            hasWebsite: true,
            websiteUrl: 'https://project1.com',
        },
        {
            imageUrl: 'alma.jpg',
            title: 'Project 2',
            content: 'Description for Project 2',
            hasGithub: true,
            githubUrl: 'https://github.com/project2',
            hasWebsite: false,
        },
        {
            imageUrl: 'alma.jpg',
            title: 'Project 3',
            content: 'Description for Project 3',
            hasGithub: false,
            hasWebsite: true,
            websiteUrl: 'https://project3.com',
        },
        {
            imageUrl: 'alma.jpg',
            title: 'Project 4',
            content: 'Description for Project 4',
            hasGithub: true,
            githubUrl: 'https://github.com/project4',
            hasWebsite: true,
            websiteUrl: 'https://project4.com',
        },
    ];

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updatePosition);
        return () => window.removeEventListener('mousemove', updatePosition);
    }, []);

    const [isVisible, setIsVisible] = useState(true);

    const handleResize2 = () => {
        if (window.innerWidth < 347) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize2);
        handleResize2();
    });

    return (
        <div>
            {isVisible && (
                <div className="page-holder">
                    <div className="blur-layer"></div>

                    <div
                        className="mouse-glow-button"
                        style={{
                            left: position.x,
                            top: position.y,
                        }}
                    />

                    <div className="navbar">
                        <Navbar />
                    </div>

                    <div className="home" id="home">
                        <LandingBox />
                    </div>

                    <div className="paragraph-holder" id="specialities">
                        <Paragraph
                            category="SPECIALITY"
                            titleFirstWord="My"
                            titleSecondWord="Specialities"
                            content="I specialize in developing efficient and scalable applications using modern technologies. My expertise spans across backend and frontend development."
                        />
                    </div>

                    <div className="specialities">
                        <SpecialityCard
                            iconName="github"
                            title="Github manager"
                            content="Proficient in managing repositories, and collaborating with teams to maintain efficient codebases."
                        />
                        <SpecialityCard
                            iconName="settings"
                            title="Fullstack Developer"
                            content="Skilled in both frontend and backend development, creating seamless user experiences."
                        />
                        <SpecialityCard
                            iconName="home"
                            title="DevOps Enthusiast"
                            content="Beginner in automating workflows and deploying applications to ensure efficient operations."
                        />
                    </div>

                    <div className="paragraph-holder" id="about">
                        <Paragraph
                            category="ABOUT ME"
                            titleFirstWord="Key"
                            titleSecondWord="Qualities"
                            content="I enjoy crafting clean and maintainable code while solving complex problems. My focus is on building intuitive and high-performance applications."
                        />
                    </div>

                    <div className="about">
                        <div className="about-qualities">
                            <div className="first-line">
                                <QualityCubes content="Creative" />
                                <QualityCubes content="Logical" />
                                <QualityCubes content="Focused" />
                                <QualityCubes content="Precise" />
                            </div>
                            <div className="second-line">
                                <QualityCubes content="Efficient" />
                                <QualityCubes content="Innovative" />
                                <QualityCubes content="Reliable" />
                            </div>
                        </div>
                        <div className="about-description">
                            <AboutMeDescription
                                imageUrl="alma.jpg"
                                title="Passionate Developer & Tech Enthusiast"
                                partOne="I am Patrik, a high school student and an aspiring full-stack developer with a strong passion for software development. With experience in Vue.js, Express.js, C#, NestJS, and MySQL, I enjoy building scalable applications and optimizing workflows."
                                partTwo="My expertise spans across backend and frontend development, DevOps, and cloud-based deployments. I have worked on projects ranging from admin dashboards to reservation systems, always aiming for efficiency and great user experience."
                            />
                        </div>
                    </div>

                    <div className="paragraph-holder" id="projects">
                        <Paragraph
                            category="PROJECTS"
                            titleFirstWord="Personal"
                            titleSecondWord="Projects"
                            content="I work on personal projects that allow me to explore new technologies and solve real-world problems. I focus on building efficient, scalable solutions with clean, maintainable code."
                        />
                    </div>

                    <div className="projects">
                        <CardSlider cards={cardData} />
                    </div>

                    <div className="paragraph-holder" id="contact">
                        <Paragraph
                            category="CONTACT"
                            titleFirstWord="Contact"
                            titleSecondWord="Information"
                            content="These are my personal contact details. I am always open to new opportunities and collaborations. Feel free to reach out!"
                        />
                    </div>

                    <div className="contact">
                        <Contact />
                    </div>
                </div>
            )}

            {!isVisible && (
                <div className="screen">
                    <div className="text">The screen is not large enough to view this page!</div>
                </div>
            )}
        </div>
    );
}
