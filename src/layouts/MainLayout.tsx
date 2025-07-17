import NotCompatible from '../pages/NotCompatible';
import { Outlet } from 'react-router-dom';
import styles from '../styles/Layouts/main.layout.module.css';
import Footer from '../components/Layouts/Footer';
import Navbar from '../components/Layouts/Navbar';
import { useCompatibility } from '../hooks/useCompability';

const MainLayout = () => {
    const { isCompatible } = useCompatibility(340);

    if (!isCompatible) {
        return <NotCompatible />;
    }

    return (
        <div className={styles.container}>
            <nav>
                <Navbar />
            </nav>
            <Outlet />
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout;
