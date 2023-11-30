import PropTypes from 'prop-types';

import styles from './layout.module.scss';

export function Layout ({ children }) {
    return (
        <div className={styles.layout}>
            { children }
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node
};