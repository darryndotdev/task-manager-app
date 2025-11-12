import styles from './BacklogItem.module.css';
import Bookmark from '../../UI/Icons/Bookmark';
import Bin from '../../UI/Icons/Bin';
import { Link, useOutletContext } from 'react-router-dom';

function BacklogItem({ task }) {
    const { id, title } = task;

    const { handleDeleteTasks } = useOutletContext();

    return (
        <li>
            <Link
                className={styles.item}
                to={`/app/ticket/${id}`}
                state={{ from: '/app/backlog' }}
            >
                <div className={styles.content}>
                    <Bookmark />
                    <p>
                        <span>{id}</span>{' '}
                        <span className={styles.title}>{title}</span>
                    </p>
                </div>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleDeleteTasks(id);
                    }}
                >
                    <Bin fill='var(--colour)' />
                </button>
            </Link>
        </li>
    );
}

export default BacklogItem;
