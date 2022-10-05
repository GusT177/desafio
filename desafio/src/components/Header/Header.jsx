import React from 'react'
import styles from './Header.module.css'
import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <div className={styles.header}>
        <header>
            <img src={Logo} />
            <nav>
              <ul className={styles.navbar}>
                <li className={styles.link}>Home</li>
                <li className={styles.link}>Library</li>
                <li className={styles.link}>About Us</li>
                <li className={styles.link}>Contact</li>
              </ul>
            </nav>

            <div className={styles.buttons}>
              <button className={styles.btn}>Log in</button>
              <button className={styles.btn}>Pro</button>
              <button className={styles.btn}>Certifications</button>
            </div>
        </header>
    </div>
  )
}
