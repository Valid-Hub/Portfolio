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
        const updatePosition = (e) => {
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

                    <div className="home">
                        <LandingBox />
                    </div>

                    <div className="paragraph-holder">
                        <Paragraph
                            props={{
                                category: 'SPECIALITY',
                                titleFirstWord: 'My',
                                titleSecondWord: 'Specialities',
                                content:
                                    'I specialize in developing efficient and scalable applications using modern technologies. My expertise spans across backend and frontend development.',
                            }}
                        />
                    </div>

                    <div className="specialities">
                        <SpecialityCard
                            props={{
                                iconName: 'github',
                                title: 'Github manager',
                                content: 'Proficient in managing repositories, and collaborating with teams to maintain efficient codebases.',
                            }}
                        />
                        <SpecialityCard
                            props={{
                                iconName: 'settings',
                                title: 'Fullstack Developer',
                                content: 'Skilled in both frontend and backend development, creating seamless user experiences.',
                            }}
                        />
                        <SpecialityCard
                            props={{
                                iconName: 'home',
                                title: 'DevOps Enthusiast',
                                content: 'Beginner in automating workflows and deploying applications to ensure efficient operations.',
                            }}
                        />
                    </div>

                    <div className="paragraph-holder">
                        <Paragraph
                            props={{
                                category: 'ABOUT ME',
                                titleFirstWord: 'Key',
                                titleSecondWord: 'Qualities',
                                content:
                                    'I enjoy crafting clean and maintainable code while solving complex problems. My focus is on building intuitive and high-performance applications.',
                            }}
                        />
                    </div>

                    <div className="about">
                        <div className="about-qualities">
                            <div className="first-line">
                                <QualityCubes props={{ content: 'Creative' }} />
                                <QualityCubes props={{ content: 'Logical' }} />
                                <QualityCubes props={{ content: 'Focused' }} />
                                <QualityCubes props={{ content: 'Precise' }} />
                            </div>
                            <div className="second-line">
                                <QualityCubes props={{ content: 'Efficient' }} />
                                <QualityCubes props={{ content: 'Innovative' }} />
                                <QualityCubes props={{ content: 'Reliable' }} />
                            </div>
                        </div>
                        <div className="about-description">
                            <AboutMeDescription
                                props={{
                                    imageUrl: 'alma.jpg',
                                    title: 'Passionate Developer & Tech Enthusiast',
                                    partOne:
                                        'I am Patrik, a high school student and an aspiring full-stack developer with a strong passion for software development. With experience in Vue.js, Express.js, C#, NestJS, and MySQL, I enjoy building scalable applications and optimizing workflows.',
                                    partTwo:
                                        'My expertise spans across backend and frontend development, DevOps, and cloud-based deployments. I have worked on projects ranging from admin dashboards to reservation systems, always aiming for efficiency and great user experience.',
                                }}
                            />
                        </div>
                    </div>

                    <div className="projects">
                        <CardSlider cards={cardData} />
                    </div>
                    <div className="contact"></div>
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

{
    /*
    const cardData = [
      {
        imageUrl: "alma.jpg",
        title: "Project 1",
        content: "Description for Project 1",
        hasGithub: true,
        githubUrl: "https://github.com/project1",
        hasWebsite: true,
        websiteUrl: "https://project1.com",
      },
      {
        imageUrl: "alma.jpg",
        title: "Project 2",
        content: "Description for Project 2",
        hasGithub: true,
        githubUrl: "https://github.com/project2",
        hasWebsite: false,
      },
      {
        imageUrl: "alma.jpg",
        title: "Project 3",
        content: "Description for Project 3",
        hasGithub: false,
        hasWebsite: true,
        websiteUrl: "https://project3.com",
      },
      {
        imageUrl: "alma.jpg",
        title: "Project 4",
        content: "Description for Project 4",
        hasGithub: true,
        githubUrl: "https://github.com/project4",
        hasWebsite: true,
        websiteUrl: "https://project4.com",
      },
    ];

    <CardSlider cards={cardData} />;
  */
}

{
    /*
   <Navbar />
  */
}

{
    /*
    <LandingBox />
  */
}

{
    /*
    <AboutMeDescription
      props={{
        imageUrl: "alma.jpg",
        title: "Passionate Developer & Tech Enthusiast",
        partOne:
          "I am Patrik, a high school student and an aspiring full-stack developer with a strong passion for software development. With experience in Vue.js, Express.js, C#, NestJS, and MySQL, I enjoy building scalable applications and optimizing workflows.",
        partTwo:
          "My expertise spans across backend and frontend development, DevOps, and cloud-based deployments. I have worked on projects ranging from admin dashboards to reservation systems, always aiming for efficiency and great user experience.",
      }}
    />
  */
}

{
    /*
    <ProjectCard
      props={{
        imageUrl: "alma.jpg",
        hasGithub: true,
        hasWebsite: true,
        githubUrl: "https://www.w3schools.com/css/css3_flexbox_container.asp",
        websiteUrl:
          "https://www.w3schools.com/css/css3_flexbox_container.asp",
        title: "Pollák Csengő",
        content:
          "My expertise spans across backend and frontend development, ns across backend and frontend deve DevOps, and cloud-based deployments. I have worked on projects ranging from admin dashboards to reservation systems, always aiming for efficiency and great user experience.",
      }}
    />
  */
}

{
    /*
    <QualityCubes props={{ content: "Creative" }} />
  */
}

{
    /*
    <Paragraph
      props={{
        category: "SPECIALITY",
        titleFirstWord: "My",
        titleSecondWord: "Specialities",
        content:
          "I specialize in developing efficient and scalable applications using modern technologies. My expertise spans across backend and frontend development.",
      }}
    />
  */
}

{
    /*
  <SpecialityCard props={{ iconName : "github", title: "Github manager", content: "Proficient in managing repositories, and collaborating with teams to maintain efficient codebases." }} />
  <SpecialityCard props={{ iconName : "settings", title: "Fullstack Developer", content: "Skilled in both frontend and backend development, creating seamless user experiences." }} />
  <SpecialityCard props={{ iconName : "home", title: "DevOps Enthusiast", content: "Beginner in automating workflows and deploying applications to ensure efficient operations." }} />
  */
}
