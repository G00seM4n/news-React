import styles from './menu.module.scss';

export function Menu () {
    return (
        <div className={styles.menu}>
            <button className={styles.menuButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="20" viewBox="0 0 5 20" fill="none">
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
                    <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
                    <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
                </svg>
            </button>
        </div>
    );
}