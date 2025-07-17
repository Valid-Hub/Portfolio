import React, { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

type Theme = 'dark' | 'light' | 'treasure' | 'retro' | 'neon' | 'minimalist' | 'nature' | 'ocean' | 'forest' | 'desert' | 'space';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

const getInitialTheme = (): Theme => {
    if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme') as Theme;
        if (['dark', 'light', 'treasure', 'retro', 'neon', 'minimalist', 'nature', 'ocean', 'forest', 'desert', 'space'].includes(savedTheme)) {
            return savedTheme;
        }
    }
    return 'light';
};

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setThemeState] = useState<Theme>(getInitialTheme);
    const location = useLocation();

    const setTheme = (newTheme: Theme) => {
        console.log(`[ThemeContext] setTheme called with theme: ${newTheme}`);
        if (['dark', 'light', 'treasure', 'retro', 'neon', 'minimalist', 'nature', 'ocean', 'forest', 'desert', 'space'].includes(newTheme)) {
            console.log(`[ThemeContext] Setting theme to: ${newTheme}`);
            setThemeState(newTheme);
        } else {
            console.warn(`[ThemeContext] Invalid theme: ${newTheme}`);
        }
    };

    const toggleTheme = () => {
        console.log(`[ThemeContext] toggleTheme called, current theme: ${theme}`);
        setThemeState((prevTheme) => {
            // Define the cycle order for toggling
            const themeOrder: Theme[] = ['light', 'dark', 'treasure', 'retro', 'neon', 'minimalist', 'nature', 'ocean', 'forest', 'desert', 'space'];
            const currentIndex = themeOrder.indexOf(prevTheme);
            const nextIndex = (currentIndex + 1) % themeOrder.length;
            const newTheme = themeOrder[nextIndex];
            console.log(`[ThemeContext] Toggling from ${prevTheme} to ${newTheme}`);
            return newTheme;
        });
    };

    useEffect(() => {
        const isAuthPage = location.pathname.includes('/login') || location.pathname.includes('/register');

        // Restrict certain themes on auth pages
        if (isAuthPage && ['treasure', 'retro', 'neon', 'forest', 'desert', 'space'].includes(theme)) {
            console.log(`[ThemeContext] Auth page detected, restricting theme from ${theme} to light`);
            setTheme('light');
        }
    }, [location.pathname, theme]);

    useEffect(() => {
        console.log(`[ThemeContext] Setting data-theme attribute to: ${theme}`);
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        // Verify the attribute was set correctly
        setTimeout(() => {
            const currentTheme = document.body.getAttribute('data-theme');
            console.log(`[ThemeContext] Verification - Current data-theme attribute: ${currentTheme}`);
            if (currentTheme !== theme) {
                console.error(`[ThemeContext] Theme attribute mismatch! Expected: ${theme}, Got: ${currentTheme}`);
            }
        }, 100);
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>{children}</ThemeContext.Provider>;
};
