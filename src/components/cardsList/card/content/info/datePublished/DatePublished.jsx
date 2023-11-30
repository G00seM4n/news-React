import styles from './datePublished.module.scss';

export function DatePublished () {
    return (
        <span className={styles.content__publishedAt}>
            <span className={styles.content__publishedAtMobile}>опубликовано </span>
            4 часа назад
        </span>
    );
}