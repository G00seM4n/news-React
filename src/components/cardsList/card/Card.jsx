import styles from './card.module.scss';

import { Preview } from './preview/Preview';
import { Content } from './content/Content';
import { Controls } from './controls/Controls';

export function Card () {
    return (
        <li className={styles.card}>
            <Preview
                src="/src/assets/images/discussion-img_1.jpg"
                alt="Реализация намеченных плановых заданий"
            />

            <Content
                title="Реализация намеченных плановых заданий"
                date="4 часа назад"
            />

            <Controls />
        </li>
    );
}