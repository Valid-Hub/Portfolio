'use client';
import React, { useState, useEffect } from 'react';

import '@/styles/LandingBoxStyles.css';

export default function LandingBox() {
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 1120) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
    });

    return (
        <div className="box">
            <div className="left">
                <div className="title">
                    <b>Jani Patrik</b>
                </div>
                <div className="content">
                    A passionate and dedicated software developer with experience in full-stack development, DevOps, and GitHub project management. I enjoy
                    building scalable applications, optimizing workflows, and contributing to open-source projects.
                </div>
                <div className="button-holder">
                    <button className="button">View Projects</button>
                </div>
            </div>
            {!isMobile && (
                <div className="right">
                    <div className="profile-container">
                        <div className="profile-image-wrapper portrait half-out">
                            <img src="me.png" alt="Profile" className="profile-image" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
