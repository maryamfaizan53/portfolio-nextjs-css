'use client'
import styles from './footer.module.css'
import React from 'react'
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareUpwork } from "react-icons/fa6";


const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.social}>
          <Link href="https://www.linkedin.com/in/maryam-faizan-b86965323/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          </Link>
          <Link href="https://github.com/maryamfaizan53/" target="_blank" rel="noopener noreferrer">
          <FaSquareGithub />
          </Link>
          <Link href="mailto:maryam.faizanmianoor@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaSquareUpwork />
          </Link>
        </div>
        <p className={styles.copyright}>
          * Maryam Faizan | ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  )
}

export default Footer
