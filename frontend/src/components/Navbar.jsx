import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import cropNowLogo from '@/assets/cropNowLogo.png';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import '@/index.css'



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuBar = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const toggleMenu = () => setMenuOpen(prev => !prev);

    useEffect(() => {
        if (menuBar.current) {
            if (menuOpen) {
                gsap.fromTo(
                    menuBar.current,
                    { x: '100%' },
                    { x: '0%', duration: 0.5, ease: 'power2.out' }
                );
            } else {
                gsap.fromTo(menuBar.current, {
                    x: '100%'
                }, {
                    x: '0%',
                    duration: 0.5,
                    ease: 'power2.out',

                });
            }
        }
    }, [menuOpen]);

    const isActive = (path) =>
        location.pathname === path ? 'text-[#28A745] underline underline-offset-4 decoration-[#fff] decoration-' : '';

    return (
        <div className="fixed bg-transparent text-white w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-1">
                    <div className="relative">
                        <img
                            src={cropNowLogo}
                            alt="CropNow Logo"
                            className="h-8 sm:h-9 md:h-14 md:w-14  w-auto transition-all duration-300"
                        />
                        <span className="absolute top-0 -right-1 md:-right-2 text-[10px] sm:text-[9px] md:text-[15px] font-bold text-white">
                            ™
                        </span>
                    </div>
                    <span className="text-2xl md:text-5xl sm:text-2xl font-semibold">CropNow.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-10 text-[14px] uppercase font-[inter]">
                    <Link to="/about" className={`hover:text-[#28A745] ${isActive('/about')}`}>About</Link>
                    <Link to="/technology" className={`hover:text-[#28A745] ${isActive('/technology')}`}>Technology</Link>
                    <Link to="/rnd" className={`hover:text-[#28A745] ${isActive('/rnd')}`}>R&D</Link>
                    <Link to="/solutions" className={`hover:text-[#28A745] ${isActive('/solutions')}`}>Solutions</Link>
                </nav>
                <section className='hidden md:flex gap-5 text-[14px] font-[inter]'>
                    <button
                        onClick={() => navigate('/contactus')}
                        className='navbar-button hover:bg-[#28A745]/20 border-[1.20px] border-[#28A745] px-10 py-3 rounded-[6px] cursor-pointer'
                    >
                        CONTACT
                    </button>
                    <button
                        onClick={() => navigate('/cropdesk')}
                        className='border-[1.20px] px-10 py-3 rounded-[6px] cursor-pointer bg-[#28A745] border-[#28A745]'
                    >
                        CROPDESK
                    </button>
                </section>
                {/* Mobile Hamburger */}
                <button onClick={toggleMenu} className="md:hidden z-[60] relative">
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div
                    ref={menuBar}
                    className="fixed top-0 right-0 w-3/5 h-full bg-[#495057] text-xl z-50 px-6 py-5 space-y-4 rounded-l-2xl shadow-lg font-[inter] overflow-y-auto"
                >
                    <Link to="/" onClick={toggleMenu} className={`block hover:text-[#28A745] ${isActive('/')}`}>Home</Link>
                    <Link to="/about" onClick={toggleMenu} className={`block hover:text-[#28A745] ${isActive('/about')}`}>About</Link>
                    <Link to="/rnd" onClick={toggleMenu} className={`block hover:text-[#28A745] ${isActive('/rnd')}`}>R&D</Link>
                    <Link to="/technology" onClick={toggleMenu} className={`block hover:text-[#28A745] ${isActive('/technology')}`}>Technology</Link>
                    <Link to="/solutions" onClick={toggleMenu} className={`block hover:text-[#28A745] ${isActive('/solutions')}`}>Solutions</Link>
                    <Link to="/contactus" onClick={toggleMenu} className={`block hover:text-[#28A745] ${isActive('/contactus')}`}>ContactUs</Link>
                    <section className='absolute bottom-10 left-10 flex items-center justify-center gap-3 text-[14px] font-[inter]'>
                        <button className='border-[1.20px] px-10 py-3 rounded-[6px] w-full bg-[#28A745] border-[#28A745]'
                            onClick={() => {
                                navigate('/cropdesk');
                                setMenuOpen(false);
                            }}
                        >CROPDESK</button>
                    </section>
                </div>
            )}
        </div>
    );
};

export default Navbar;
