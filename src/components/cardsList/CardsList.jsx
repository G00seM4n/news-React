import styles from './cardsList.module.scss';

import { Card } from './card/Card';

export function CardsList () {
    return (
        <ul className={styles.cardsList}>
            <Card/>
        </ul>
    );
}