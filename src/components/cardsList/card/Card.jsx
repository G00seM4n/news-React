import styles from './card.module.scss';

// components
import { TextContent } from './textContent/TextContent';
import { Preview } from './preview/Preview';
import { Menu } from './menu/menu';
import { KarmaCounter } from './karmaCounter/KarmaCounter';
import { CommentsButton } from './commentsButton/CommentsButton';
import { ShareButton } from './shareButton/ShareButton';
import { SaveButton } from './saveButton/SaveButton';

export function Card () {
    return (
        <li className={styles.card}>
            <TextContent
                title="Следует отметить, что новая модель организационной..."
                imgUrl="https://sun9-71.userapi.com/impg/1qVRHqX8AOdc-sgRO9Fxtfr7OUD-vXwTKTEKqw/6iTnSfo-S8M.jpg?size=1440x1920&quality=96&sign=b7c5cd75147d082fab5f72d3224d81ec&type=album"
                authorName="Дмитрий Гришин"
                publishedAt="4 часа назад"
            />

            <Preview
                imgUrl="https://cdn.dribbble.com/users/3945526/screenshots/6973489/media/84f87b990ac0ebbdbd15645a218e68cf.jpg?resize=400x300&vertical=center"
                alt="Следует отметить, что новая модель организационной..."
            />

            <Menu />

            <div className={styles.controls}>
                <KarmaCounter
                    count={234}
                />

                <CommentsButton
                    count={13}
                />

                <div className={styles.actions}>
                    <ShareButton />

                    <SaveButton />
                </div>
            </div>
        </li>
    );
}