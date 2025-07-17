import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';

const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AppRoutes: React.FC = () => {
    return (
        <AnimatePresence mode="wait">
            <Suspense>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />

                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </Suspense>
        </AnimatePresence>
    );
};

export default AppRoutes;
