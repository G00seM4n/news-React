import PropTypes from 'prop-types';

import styles from './textContent.module.scss';

export function TextContent ({
    title,
    imgUrl,
    authorName,
    publishedAt,
}) {
    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img
                        className={styles.avatar}
                        src={imgUrl}
                        role="presentation"
                    />
                    <a className={styles.username} href="#user-url">
                        {authorName}
                    </a>
                </div>
                <span className={styles.createdAt}>
                    <span className={styles.publishedLabel}>опубликовано </span>
                    {publishedAt}
                </span>
            </div>
            <h2 className={styles.title}>
                <a className={styles.postLink} href="#post-url">
                    {title}
                </a>
            </h2>
        </div>
    );
}

TextContent.propTypes = {
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired
};