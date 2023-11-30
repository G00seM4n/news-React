import PropTypes from 'prop-types';

import styles from './title.module.scss';

export function Title ({title}) {
    return (
        <a className={styles.content__link}>
            <h2 className={styles.content__title}>{title}</h2>
        </a>
    );
}

Title.propTypes = {
    title: PropTypes.string.isRequired
};