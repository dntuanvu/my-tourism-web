/* eslint-disable react/no-unescaped-entities */

'use client';

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import clsx from 'clsx';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initialize the state at component mount

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="flex space-x-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className={clsx("space-x-4", {
                    'hidden': isMobileView && !isMobileMenuOpen,
                    'flex': !isMobileView || isMobileMenuOpen,
                })}>
                    <Link href="/about" className="text-gray-700 hover:text-red-600 font-medium">About</Link>
                    <Link href="/services" className="text-gray-700 hover:text-red-600 font-medium">Services</Link>
                    <Link href="/contact" className="text-gray-700 hover:text-red-600 font-medium">Contact</Link>
                </div>
                {isMobileView && (
                    <button onClick={toggleMobileMenu} className="p-2">
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                )}
            </div>
            {isMobileMenuOpen && isMobileView && (
                <div className="flex flex-col items-left bg-gray-700 p-4">
                    <Link href="/about" onClick={toggleMobileMenu}>About</Link>
                    <Link href="/services" onClick={toggleMobileMenu}>Services</Link>
                    <Link href="/contact" onClick={toggleMobileMenu}>Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
