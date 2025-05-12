import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import gsap from 'gsap';
import LoadingScreen from '@/components/common/LoadingScreen';
import Navbar from '@/components/Navbar';

const AppLayout = () => {
    const navigation = useNavigation();
    const [showContent, setShowContent] = useState(false);
    const contentRef = useRef(null); // Ref for the content div

    useEffect(() => {
        let delay;

        if (navigation.state === 'loading') {
            setShowContent(false);
        } else {
            // Delay rendering content for minimum 2s
            delay = setTimeout(() => {
                setShowContent(true);
            }, 2000);
        }

        return () => clearTimeout(delay);
    }, [navigation.state]);

    useEffect(() => {
        if (showContent && contentRef.current) {
            // Animate after content is mounted
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 2, ease: 'power2.out' }
            );
        }
    }, [showContent]);

    return (
        <Suspense fallback={<LoadingScreen />}>
            {!showContent ? (
                <LoadingScreen />
            ) : (
                <div ref={contentRef} className="content">
                    <Navbar />
                    <main>
                        <Outlet />
                    </main>
                    {/* Footer can be added here */}
                </div>
            )}
        </Suspense>
    );
};

export default AppLayout;
