import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import logo from '@/assets/cropNowLogo.png';

const LoadingScreen = () => {
    const logoRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            logoRef.current,
            {
                rotation: 0,
                transformOrigin: 'center center',
            },
            {
                rotation: 360,
                duration: 4,
                ease: 'power2.inout',
                repeat: -1,
            }
        );
    }, []);


    return (
        <section className="relative bg-[#1E1E1E] min-h-[100svh] min-w-[100svw] flex items-center justify-center overflow-hidden">
           
            <div className="flex items-center  text-white">
                <span className="text-[50px] relative z-10 capitalize leading-none font-extrabold">cr</span>
                <div className="flex items-center justify-center w-10 h-10">
                    <img
                        ref={logoRef}
                        src={logo}
                        alt="Logo"
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
                <span className="text-[50px] relative z-1 flex items-center font-extrabold">pNow...</span>
            </div>
        </section>
    );
};

export default LoadingScreen;
