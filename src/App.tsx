import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { I18nProvider } from './contexts/I18nContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { PopupProvider } from './contexts/PopupContext';
import './styles/Global/globals.css';
import PopupContainer from './components/Popup/PopupContainer';

function App() {
    return (
        <BrowserRouter>
            <I18nProvider>
                <ThemeProvider>
                    <PopupProvider>
                        <AppRoutes />
                        <PopupContainer />
                    </PopupProvider>
                </ThemeProvider>
            </I18nProvider>
        </BrowserRouter>
    );
}

export default App;
