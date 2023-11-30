import styles from './info.module.scss';

import { DatePublished } from './datePublished/DatePublished';
import { Author } from './author/Author';

export function Info () {
    return (
        <div className={styles.content__info}>
            <DatePublished />

            <Author />
        </div>
    );
}