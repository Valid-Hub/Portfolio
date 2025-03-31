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
                        <a href="">Home</a>
                        <a href="">Specialities</a>
                        <a href="">About</a>
                        <a href="">Projects</a>
                        <a href="">Contact</a>
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
                            <a href="">Home</a>
                            <a href="">Specialities</a>
                            <a href="">About</a>
                            <a href="">Projects</a>
                            <a href="">Contact</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
