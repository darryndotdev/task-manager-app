import styles from './BackLogItem.module.css';
import Bookmark from '../../UI/Icons/Bookmark';
import Bin from '../../UI/Icons/Bin';

function BackLogItem({ task }) {
    const { id, title } = task;

    return (
        <li className={styles.item}>
            <div className={styles.content}>
                <Bookmark />
                <p>
                    <span>{id}</span>{' '}
                    <span className={styles.title}>{title}</span>
                </p>
            </div>
            <button>
                <Bin />
            </button>
        </li>
    );
}

export default BackLogItem;
