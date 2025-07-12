import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Icon from '../assets/RDS_Nav.svg'
import '../styles/Nav.css';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  return (
    <nav>
        <div className="nav-left">
            <Link to="/" className="nav-logo" onClick={closeMenu}>
                <img src={Icon} alt="Rado Design Studio" />
            </Link>
        </div>

        <div className={`nav-right ${isOpen ? 'open' : ''}`}>
            <ul>
                <li>
                    <NavLink to="/our-work" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
                        Work
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/pricing-packages" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
                        Packages
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? (
                <>
                    <span className="close left"></span>
                    <span className="close right"></span>
                    <div className="mobile-menu-gradient">
                        <div className="blob" />
                        <div className="blob" />
                        <div className="blob" />
                        <div className="blob" />
                    </div>
                </>
            ) : (
            <>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </>
            )}
        </div>
    </nav>
    );
}
