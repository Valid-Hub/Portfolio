'use client';
import { useState } from 'react';
import '@/styles/CardSliderStyles.css';
import ProjectCard from './ProjectCard';

export default function CardSlider({ cards }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const getVisibleCards = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(cards[(currentIndex + i) % cards.length]);
        }
        return visible;
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    return (
        <div className="slider">
            <button className="nav-button" onClick={handlePrev}>
                ◀
            </button>
            <div className="card-container">
                {getVisibleCards().map((card, index) => (
                    <ProjectCard key={index} props={card} />
                ))}
            </div>
            <button className="nav-button" onClick={handleNext}>
                ▶
            </button>
        </div>
    );
}
