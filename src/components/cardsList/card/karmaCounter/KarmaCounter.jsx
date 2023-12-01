import PropTypes from 'prop-types';

import styles from './karmaCounter.module.scss';

export function KarmaCounter ({count}) {
    return (
        <div className={styles.karmaCounter}>
            <button className={styles.up}>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
                    <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
                </svg>
            </button>

            <span className={styles.karmaValue}>
                {count}
            </span>

            <button className={styles.down}>
                <svg className={styles.down} xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
                    <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
                </svg>
            </button>
        </div>
    );
}

KarmaCounter.propTypes = {
    count: PropTypes.number.isRequired
};