'use client'
import { useState, useEffect } from 'react';
import "./navbar.css"
import Link from "next/link"

export default function navbar() {
    const [windowWidth, setWindowWidth] = useState(0);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleHamburger = () => {
        setIsHamburgerOpen(!isHamburgerOpen);
    };

    return (
        <div className="navbar">
            <div className="logo">
                <h1 className='authorName'>EDWIN LIBY</h1>
            </div>
            {
                windowWidth < 912 ? <div className="three">
                    <div className={`hamburger ${isHamburgerOpen ? 'is-active' : ''}`} id="hamburger-11" onClick={toggleHamburger}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div> : <div className="nav_links">
                    <Link className="link" href="/projects">Projects</Link>
                    <Link className="link" href="/">Experience</Link>
                </div>
            }
        </div>
    )
}