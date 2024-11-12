'use client'
import React from 'react'
import styles from './skills.module.css'

const Skills = () => {
  return (
    <div className='container'>
      <section className={styles.skills}>
        <div className={styles.skillsContainer} id="skills">
          <h2 className={styles.heading}>My Skills</h2>

          <div className={styles.skill}>
            <h3>TypeScript</h3>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '100%' }}>100%</div>
            </div>
          </div>

          <div className={styles.skill}>
            <h3>JavaScript</h3>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '100%' }}>100%</div>
            </div>
          </div>

          <div className={styles.skill}>
            <h3>HTML</h3>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '100%' }}>100%</div>
            </div>
          </div>

          <div className={styles.skill}>
            <h3>CSS</h3>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '100%' }}>100%</div>
            </div>
          </div>

          <div className={styles.skill}>
            <h3>Tailwind CSS</h3>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '80%' }}>80%</div>
            </div>
          </div>

          <div className={styles.skill}>
            <h3>Bootstrap</h3>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '90%' }}>90%</div>
            </div>
          </div>

          <div className={styles.skill}>
            <h3>Python</h3>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '100%' }}>100%</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
