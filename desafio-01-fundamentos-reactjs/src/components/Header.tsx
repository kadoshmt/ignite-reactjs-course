import todoLogo from '../assets/logo-todo.svg'
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={todoLogo} className="logo" alt="Todo logo" width="126" />
        </header>
    )
}