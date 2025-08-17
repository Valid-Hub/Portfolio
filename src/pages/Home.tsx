import styles from '../styles/Pages/home.module.css';
import ContactSection from '../components/Sections/ContactSection';
import HeroSection from '../components/Sections/HeroSection';
import ProjectsSection from '../components/Sections/ProjectsSection';
import RoadMapSection from '../components/Sections/RoadMapSection';

const Home = () => {
    return (
        <div className={styles.container}>
            <div id="home">
                <HeroSection />
            </div>
            <div id="about">
                <RoadMapSection />
            </div>
            <div id="projects">
                <ProjectsSection />
            </div>
            <div id="contact">
                <ContactSection />
            </div>
        </div>
    );
};

export default Home;
