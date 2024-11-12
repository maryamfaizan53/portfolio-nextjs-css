'use client'
import React from 'react'
import styles from './education.module.css'


const Education = () => {
  return (
    <section className={styles.education} id="education">
      <h2 className={styles.heading}>Education</h2>
      <div className={styles.educationContainer}>
        <div className={styles.educationBox}>
          <h4>St. Josephs College for Girls – Pre-Medical Focus</h4>
          <p>
            Successfully completed pre-medical studies with a strong foundation in
            biology, chemistry, and physics.
          </p>
        </div>
    
        <div className={styles.educationBox}>
          <h4>Karachi University - Bachelor of Commerce (B.Com)</h4>
          <p>
            Graduated with a Bachelors degree in Commerce, acquiring in-depth
            knowledge in areas such as accounting, finance, business management, and
            economics.
          </p>
        </div>
    
        <div className={styles.educationBox}>
          <h4>GIAIC - AI, Metaverse, and Web 3.0</h4>
          <p>
            Currently pursuing specialized training in emerging technologies such as
            Artificial Intelligence, Metaverse, and Web 3.0.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Education
