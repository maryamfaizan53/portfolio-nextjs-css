'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './nav.module.css';
import { TiThMenu } from 'react-icons/ti';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className={styles.header}>
      <Link href="#home" className={styles.logo}>
        Maryam<span>Faizan</span>
      </Link>
      <TiThMenu className={styles.menuIcon} onClick={toggleMobileMenu} />
      <nav className={`${styles.navbar} ${isMobileMenuOpen ? styles.mobileActive : ''}`}>
        <Link href="#home" className={styles.active}>Home</Link>
        <Link href="#education">Education</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#contact">Contact</Link>

     
      
    
      </nav>
    </header>
  )
}

export default Header
