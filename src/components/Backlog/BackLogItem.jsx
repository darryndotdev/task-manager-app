import styles from './BackLogItem.module.css';
import Bookmark from '../../UI/Icons/Bookmark';
import Bin from '../../UI/Icons/Bin';
import { useOutletContext } from 'react-router-dom';

function BackLogItem({ task }) {
    const { id, title } = task;

    const { handleDeleteTasks } = useOutletContext();

    return (
        <li className={styles.item}>
            <div className={styles.content}>
                <Bookmark />
                <p>
                    <span>{id}</span>{' '}
                    <span className={styles.title}>{title}</span>
                </p>
            </div>
            <button onClick={() => handleDeleteTasks(id)}>
                <Bin />
            </button>
        </li>
    );
}

export default BackLogItem;
