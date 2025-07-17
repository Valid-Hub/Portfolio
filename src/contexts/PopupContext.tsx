import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type PopupType = 'success' | 'error' | 'notice';

export type PopupData = {
    id: number;
    message: string;
    type: PopupType;
};

type PopupContextType = {
    popups: PopupData[];
    addPopup: (message: string, type: PopupType) => void;
    removePopup: (id: number) => void;
};

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const usePopup = () => {
    const context = useContext(PopupContext);
    if (!context) throw new Error('usePopup must be used within PopupProvider');
    return context;
};

export const PopupProvider = ({ children }: { children: ReactNode }) => {
    const [popups, setPopups] = useState<PopupData[]>([]);

    const addPopup = (message: string, type: PopupType) => {
        const id = Date.now();
        setPopups((prev) => [...prev, { id, message, type }]);
    };

    const removePopup = (id: number) => {
        setPopups((prev) => prev.filter((p) => p.id !== id));
    };

    return <PopupContext.Provider value={{ popups, addPopup, removePopup }}>{children}</PopupContext.Provider>;
};
