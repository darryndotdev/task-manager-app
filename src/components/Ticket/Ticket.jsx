import { useState, useEffect } from 'react';
import {
    useNavigate,
    useParams,
    useOutletContext,
    useLocation,
} from 'react-router-dom';
import styles from './Ticket.module.css';
import Button from '../../components/Button/Button';
import Bookmark from '../../UI/Icons/Bookmark';
import Bin from '../../UI/Icons/Bin';

function Ticket() {
    const navigate = useNavigate();
    const location = useLocation();

    const { id } = useParams();
    const { handleUpdateTasks, handleDeleteTasks } = useOutletContext();

    const [status, setStatus] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [taskId, setTaskId] = useState('');

    const from = location.state?.from || '/app/board';

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
        navigate(from);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.content}>
                <div>
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
                        className='h2'
                    />
                </div>
                <div>
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
            </div>
            <div className={styles.content}>
                <p className={styles.ticket}>
                    <Bookmark />
                    {id}
                </p>
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
                <Button
                    variant='danger'
                    onClick={() => {
                        navigate(-1);
                        handleDeleteTasks(id);
                    }}
                >
                    <Bin fill='var(--danger)' />
                    Delete
                </Button>
            </div>
        </form>
    );
}

export default Ticket;
