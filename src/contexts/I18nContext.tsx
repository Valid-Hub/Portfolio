import React, { createContext, useContext, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n.use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'hu',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/{{lng}}/translation.json',
        },
        supportedLngs: ['hu', 'en', 'de'],
    });

interface I18nContextType {
    t: (key: string) => string;
    language: string;
    i18n: typeof i18n;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const useI18n = (): I18nContextType => {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
};

interface I18nProviderProps {
    children: React.ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
    const { t, i18n: i18nInstance } = useTranslation();

    useEffect(() => {
        document.documentElement.lang = i18nInstance.language;

        const restrictedPaths = ['/login', '/register'];
        const allowedLanguages = ['hu', 'en'];
        const currentPath = window.location.pathname;

        const isRestricted = restrictedPaths.some((path) => currentPath.includes(path));

        if (isRestricted && !allowedLanguages.includes(i18nInstance.language)) {
            i18nInstance.changeLanguage('hu');
            localStorage.setItem('i18nextLng', 'hu');
        }
    }, [i18nInstance]);

    return <I18nContext.Provider value={{ t, language: i18nInstance.language, i18n: i18nInstance }}>{children}</I18nContext.Provider>;
};
