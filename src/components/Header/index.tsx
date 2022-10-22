import { SingInButton } from '../SignInButton'
import styles from './styles.module.scss'


export function Header () {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
            <img src="/image/logo2.png" alt="ig.news"/>
            <nav>
                <a className={styles.active}> Home </a>
                <a> Posts </a>
            </nav>
            <SingInButton/>
            </div>
        </header>
    )
}