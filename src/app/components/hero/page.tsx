'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './hero.module.css'
import { FaLinkedin, FaSquareGithub, FaSquareUpwork } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.homeContent}>
        <h1>
          Hi, Its <span>Maryam</span>
        </h1>
        <h3 className={styles.textAnimation}>
          <span>I am a</span> Web Developer
        </h3>
        <div className={styles.homeImage}>
        <Image 
  src="/portfolio1.jpg" 
  alt="Maryam's profile picture" 
  width={100}
  height={50}
  className={styles.homeImage}
/>
</div>
        <p>
          I am a front-end developer with expertise in HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS,
          and Bootstrap. With a passion for creating intuitive user interfaces and a strong foundation in UI/UX design,
          I build responsive, high-performance web applications.
        </p>
        <div className={styles.socialIcons}>
          <Link href="https://www.linkedin.com/in/maryam-faizan-b86965323/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/maryamfaizan53/" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FaSquareGithub />
          </Link>
          <Link href="mailto:maryam.faizanmianoor@gmail.com" aria-label="UpWork">
            <FaSquareUpwork />
          </Link>
        </div>
        <div className={styles.btnGroup}>
          <Link href="#contact" className={styles.btn} role="button">Contact</Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
