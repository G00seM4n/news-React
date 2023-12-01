import PropTypes from 'prop-types';

import styles from './preview.module.scss';

export function Preview ({
    imgUrl,
    alt
}) {
    return (
        <div className={styles.preview}>
            <img
                className={styles.previewImg}
                src={imgUrl}
                alt={alt}
            />
        </div>
    );
}

Preview.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};