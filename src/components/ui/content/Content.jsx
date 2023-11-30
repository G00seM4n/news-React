import PropTypes from 'prop-types';

import styles from './content.module.scss';

export function Content ({ children }) {
    return (
        <main className={styles.content}>
            { children }
        </main>
    );
}

Content.propTypes = {
    children: PropTypes.node
};