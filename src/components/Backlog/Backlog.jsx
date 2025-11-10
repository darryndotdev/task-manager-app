import styles from './Backlog.module.css';
import { useOutletContext } from 'react-router-dom';
import BacklogItem from './BackLogItem';

function Backlog() {
    const { tasks } = useOutletContext();

    const backLogTasks = tasks.filter((task) => task.status === 'backlog');

    return (
        <div className={styles.backlog}>
            <h1>Backlog</h1>
            <ul>
                {backLogTasks.map((task) => (
                    <BacklogItem task={task} key={task.id} />
                ))}
            </ul>
        </div>
    );
}

export default Backlog;
