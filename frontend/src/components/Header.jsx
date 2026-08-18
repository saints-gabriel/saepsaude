import { useState, useRef, useEffect } from 'react';
import styles from '../styles/Globals.module.css';

export const Header = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const dialogRef = useRef(null);

    const login = () => {
        setIsLoginOpen(true);
    };

    const closeLogin = () => {
        setIsLoginOpen(false);
    };

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isLoginOpen) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [isLoginOpen]);

    const handleBackdropClick = (e) => {
        if (e.target === dialogRef.current) {
            closeLogin();
        }
    };

    return (
        <header className={styles.headerBut}>
            <button className={styles.loginBut} onClick={login}>
                Login
            </button>

            <dialog
                ref={dialogRef}
                className={styles.loginModal}
                onClick={handleBackdropClick}
                onCancel={closeLogin}
            >
                <div className={styles.modalContent}>
                    <button className={styles.closeBut} onClick={closeLogin} aria-label="Fechar">
                        &times;
                    </button>

                    <h2>Entrar</h2>

                    <form onSubmit={(e) => e.preventDefault()} className={styles.loginForm}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" placeholder="seu@email.com" required />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="password" placeholder="••••••••" required />
                        </div>

                        <button type="submit" className={styles.submitBut}>
                            Acessar
                        </button>
                    </form>
                </div>
            </dialog>
        </header>
    );
};