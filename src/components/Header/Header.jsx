import React from 'react'
import styles from './Header.module.css'
import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
        <header>
           {/*FIXME:  Serial legal botar uma div cobrindo o img para futuros problemas*/}
           <div className={styles.menuHeader}>
            <img src={Logo} />
            <nav>
              <ul className={styles.navbar}>
                 {/*FIXME:  as LIs devem ser botões*/}
                  <li>Home</li>
                  <li>Library</li>
                  <li>About Us</li>
                  <li>Contact</li>
                </ul>
            </nav>
           </div>
            

            <div className={styles.buttons}>
              <button>Log in</button>
              <button>Pro</button>
              <button>Certifications</button>
            </div>
        </header>
    
  )
}
