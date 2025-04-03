import React, { useState, useEffect } from 'react';

import '@/styles/NavbarStyles.css';

import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';

export default function Navbar() {
    const [isLargeEnough, setIsLargeEnough] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const handleResize = () => {
        setIsLargeEnough(window.innerWidth >= 600);
        if (window.innerWidth >= 600) setIsOpen(false);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="bar">
            <div className="holder">
                {isLargeEnough ? (
                    <div className="monitor">
                        <a href="#home">Home</a>
                        <a href="#specialities">Specialities</a>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                ) : (
                    <div className="mobile-open">
                        <div className="menu-open">
                            <div className="title">Portfolio</div>
                            <div className="button" onClick={() => setIsOpen(!isOpen)}>
                                <Icon path={mdiMenu} size={1} />
                            </div>
                        </div>
                        <div className={`menu-items ${isOpen ? 'open' : ''}`}>
                            <div className="line"></div>
                            <a
                                href="#home"
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                            >
                                Home
                            </a>
                            <a
                                href="#specialities"
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                            >
                                Specialities
                            </a>
                            <a
                                href="#about"
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                            >
                                About
                            </a>
                            <a
                                href="#projects"
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                            >
                                Projects
                            </a>
                            <a
                                href="#contact"
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
