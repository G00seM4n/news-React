import styles from './header.module.scss'

import { Search } from './search/search';
import { ThreadTitle } from '../../ui/threadTitle/ThreadTitle';
import { Sort } from './sort/Sort'

export function Header() {
    return (
        <header className={styles.header}>
            <Search />
            <ThreadTitle />
            <Sort />
        </header>
    );
}