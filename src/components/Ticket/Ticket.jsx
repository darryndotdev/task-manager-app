import { useState, useEffect } from 'react';
import { useNavigate, useParams, useOutletContext } from 'react-router-dom';
import styles from './Ticket.module.css';
import BoardLayout from '../../UI/BoardLayout/BoardLayout';
import Button from '../../components/Button/Button';

function Ticket() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { handleUpdateTasks } = useOutletContext();

    const [status, setStatus] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [taskId, setTaskId] = useState('');

    useEffect(() => {
        const stored = localStorage.getItem('tasks');
        if (!stored) return;

        const storedTasks = JSON.parse(stored);
        const specificTask = storedTasks.find((task) => task.id === id);

        if (specificTask) {
            setStatus(specificTask.status || '');
            setTitle(specificTask.title || '');
            setDescription(specificTask.description || '');
            setTaskId(specificTask.id);
        }
    }, [id]);

    function handleSubmit(e) {
        e.preventDefault();

        //  TODO Handle route back to backlog when selecting update even if data hasn't changed

        const updatedTask = {
            id: taskId,
            title,
            description,
            status,
        };

        handleUpdateTasks(updatedTask);
        navigate('/app/backlog');
    }

    return (
        <BoardLayout>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <label htmlFor='status' className='sr-only'>
                        Status:
                    </label>
                    <select
                        name='status'
                        id='status'
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                    >
                        <option value='' disabled>
                            -- Choose an option --
                        </option>
                        <option value='backlog'>Backlog</option>
                        <option value='todo'>To do</option>
                        <option value='doing'>Doing</option>
                        <option value='done'>Done</option>
                    </select>
                </div>
                <div className={styles.column}>
                    <label htmlFor='title' className='sr-only'>
                        Title:
                    </label>
                    <input
                        type='text'
                        name='title'
                        id='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.column}>
                    <label htmlFor='description' className='sr-only'>
                        Description:
                    </label>
                    <textarea
                        type='text'
                        name='description'
                        id='description'
                        rows='4'
                        cols='40'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.row}>
                    <Button type='submit' variant='primary'>
                        Update
                    </Button>
                    <Button variant='outline' onClick={() => navigate(-1)}>
                        Back
                    </Button>
                </div>
            </form>
        </BoardLayout>
    );
}

export default Ticket;
