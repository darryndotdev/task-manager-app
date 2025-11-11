import styles from './Backlog.module.css';
import { useOutletContext } from 'react-router-dom';
import BoardLayout from '../../UI/BoardLayout/BoardLayout';
import BacklogItem from './BackLogItem';

function Backlog() {
    const { tasks } = useOutletContext();

    const backLogTasks = tasks.filter((task) => task.status === 'backlog');

    return (
        <BoardLayout>
            <h1>Backlog</h1>
            <ul className={styles.list}>
                {backLogTasks.map((task) => (
                    <BacklogItem task={task} key={task.id} />
                ))}
            </ul>
        </BoardLayout>
    );
}

export default Backlog;
