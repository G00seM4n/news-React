import PropTypes from 'prop-types';

import styles from './content.module.scss'

import { Title } from './title/Title';
import { Info } from './info/Info';

export function Content () {
    return (
        <div className={styles.content}>
            <Title
                title=''
            />

            <Info />
        </div>
    );
}

Content.propTypes = {
    title: PropTypes.string.isRequired
};