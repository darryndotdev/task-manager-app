import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import styles from './Form.module.css';
import BoardLayout from '../../UI/BoardLayout/BoardLayout';
import Button from '../../components/Button/Button';

function Form() {
    const navigate = useNavigate();
    const { handleAddTasks } = useOutletContext();

    const [status, setStatus] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const id = `${Array.from({ length: 2 }, () =>
            String.fromCharCode((65 + Math.random() * 26) | 0)
        ).join('')}-${((Math.random() * 1000) | 0)
            .toString()
            .padStart(3, '0')}`;

        const newData = {
            id,
            title,
            description,
            status,
        };
        handleAddTasks(newData);
        navigate(-1);

        setStatus('');
        setTitle('');
        setDescription('');
    }

    return (
        <BoardLayout>
            <h1>Add new task</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <label htmlFor='status'>Status:</label>
                    <select
                        name='status'
                        required
                        id='status'
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
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
                    <label htmlFor='title'>Title:</label>
                    <input
                        type='text'
                        id='title'
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Enter task title'
                    />
                </div>
                <div className={styles.column}>
                    <label htmlFor='description'>Description:</label>
                    <textarea
                        type='text'
                        id='description'
                        rows='4'
                        cols='40'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Add some details...'
                    />
                </div>
                <div className={styles.row}>
                    <Button type='submit' variant='primary'>
                        Add
                    </Button>
                    <Button variant='outline' onClick={() => navigate(-1)}>
                        Back
                    </Button>
                </div>
            </form>
        </BoardLayout>
    );
}

export default Form;
