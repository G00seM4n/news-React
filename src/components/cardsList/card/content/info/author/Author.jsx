import PropTypes from 'prop-types';

import styles from './author.module.scss';

export function Author ({url, imgUrl, name}) {
    return (
        <a href={url} className={styles.author}>
            <img src={imgUrl} alt={name} className={styles.author__img} />
            <span className={styles.author__name}>{name}</span>
        </a>
    );
}

Author.propTypes = {
    url: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};