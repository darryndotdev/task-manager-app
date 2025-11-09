import styles from './Backlog.module.css';
import { useOutletContext } from 'react-router-dom';

function Backlog() {
    const { tasks } = useOutletContext();

    console.log(tasks);

    return (
        <div className={styles.backlog}>
            <h1>Backlog</h1>
        </div>
    );
}

export default Backlog;
