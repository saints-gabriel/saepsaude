import styles from '../styles/Globals.module.css';

export const Header = () => {
    const login = () => {

    }
    return (
        <header className={styles.headerBut}>
            <button className={styles.loginBut} onClick={login}>
                Login
            </button>
        </header>
    );
}