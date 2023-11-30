import PropTypes from 'prop-types';

import styles from './preview.module.scss';

export function Preview ({src, alt}) {
    return (
        <div className={styles.preview}>
            <img className={styles.preview__img}
                src={src}
                alt={alt}
            />
        </div>
    );
}

Preview.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};