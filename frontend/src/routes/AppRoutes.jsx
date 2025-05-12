// AppRoutes.jsx
import React, { lazy } from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import AppLayout from '@/layout/AppLayout';
import ErrorBoundary from '@/components/common/ErrorBoundary';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const RAndD = lazy(() => import('@/pages/RAndD'));
const Technology = lazy(() => import('@/pages/Technology'));
const Solutions = lazy(() => import('@/pages/Solutions'));
const ContactUs = lazy(() => import('@/pages/ContactUs'));

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AppLayout />} errorElement={<NotFound />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rnd" element={<RAndD />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

const AppRoutes = () => (
    <ErrorBoundary>
        <RouterProvider router={router} />
    </ErrorBoundary>
);

export default AppRoutes;
