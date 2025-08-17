import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/components/Layouts/footer.module.css';
import { Facebook, Github, Instagram, Linkedin, Music, Music2, Twitter, Youtube } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

interface FooterProps {
    text?: string;
}

const Footer: React.FC<FooterProps> = () => {
    const { ref, isVisible } = useInView();

    return (
        <div className={styles.wrapper} ref={ref}>
            <span className={styles.text}>© 2025 Jani Patrik Portfolio.</span>
        </div>
    );
};

export default Footer;
