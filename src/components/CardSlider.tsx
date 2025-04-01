'use client';
import { useState, useEffect } from 'react';
import '@/styles/CardSliderStyles.css';
import ProjectCard from './ProjectCard';

export default function CardSlider({ cards }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1000) {
                setCardsToShow(1);
            } else if (window.innerWidth < 1400) {
                setCardsToShow(2);
            } else {
                setCardsToShow(3);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getVisibleCards = () => {
        const visible = [];
        for (let i = 0; i < cardsToShow; i++) {
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
