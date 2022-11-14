import styles from './Header.module.css'

import logo from '../assets/rocket.svg'

export function Header () {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.containerLogo}>
        <img src={logo}  />
        <h1 className={styles.logoTitle}>to<span>do</span> </h1>
      </div>
    </div>
  )
}