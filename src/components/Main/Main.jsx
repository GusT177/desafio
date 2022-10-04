import React from 'react'
import styles from './Main.module.css'

export function Main(props) {
  return (
    <div>
        <main>
            <div className={styles.learncontent}>
                <h1>Learn to Code</h1>
                <h3>Learn with UL</h3>
                <input type="text" placeholder='Search for tutorials' />
                <a href="#">Get Started</a>
            </div>
        
        </main>
    </div>
  )
}
