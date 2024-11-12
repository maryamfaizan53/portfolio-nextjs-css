'use client'
import React from 'react'
import styles from './experience.module.css'

const Experience = () => {
  return (
    <div>
      <section className={styles.experience} id="experience">
        <h2 className={styles.heading}>Experience</h2>
        <div className={styles.experienceContainer}>
          <div className={styles.experienceBox}>
            <h4>Front-End Developer – Freelance</h4>
            <p>
              Designed and developed responsive web applications using HTML, CSS, JavaScript, React.js, and Tailwind CSS. Collaborated with clients to create user-friendly interfaces and improve UX.
            </p>
            <span>2022 - Present</span>
          </div>
    
          <div className={styles.experienceBox}>
            <h4>UI/UX Designer – Medwave Agency</h4>
            <p>
              Created interactive prototypes, wireframes, and visual mockups for various client projects. Conducted user research and usability tests to optimize design decisions.
            </p>
            <span>2021 - 2022</span>
          </div>
    
          <div className={styles.experienceBox}>
            <h4>Junior Web Developer – Tech Solutions</h4>
            <p>
              Assisted in the development of corporate websites and e-commerce platforms using JavaScript, Bootstrap, and Next.js. Gained experience in version control and team collaboration through Git and Agile methodology.
            </p>
            <span>2020 - 2021</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
