import styles from '../../styles/components/Layouts/footer.module.css';
import { useInView } from '../../hooks/useInView';

interface FooterProps {
    text?: string;
}

const Footer: React.FC<FooterProps> = () => {
    const { ref } = useInView();

    return (
        <div className={styles.wrapper} ref={ref}>
            <span className={styles.text}>© 2025 Jani Patrik Portfolio.</span>
        </div>
    );
};

export default Footer;
