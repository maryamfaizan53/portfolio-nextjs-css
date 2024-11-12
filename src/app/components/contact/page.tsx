
'use client'
import React from 'react'
import styles from './contact.module.css'

const Contact = () => {
  return (
    <div>
      <section className={styles.contact} id="contact">
        <h2 className={styles.heading}>Contact<span>Me</span></h2>
        <form action="">
          <div className={styles.inputGroup}>
            <div className={styles.inputBox}>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
            </div>
          </div>
          <div className={styles.inputGroup2}>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Your Message"
            ></textarea>
            <input type="submit" value="Send Message" className={styles.btn} />
          </div>
        </form>
      </section>
    </div>
  )
}

export default Contact

  
