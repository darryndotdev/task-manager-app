import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from './AppLayout.module.css';

function AppLayout() {
    console.log('Applayout rendering');
    const [tasks, setTasks] = useState([]);

    useEffect(function () {
        const stored = localStorage.getItem('tasks');
        const parsed = stored ? JSON.parse(stored) : null;

        if (parsed && parsed.length > 0) {
            setTasks(JSON.parse(stored));
        } else {
            async function getData() {
                try {
                    console.log('Fetching tasks.json...');
                    const res = await fetch(`/data/tasks.json`);
                    if (!res.ok) throw new Error(`HTTP error! ${res.status}`);
                    const data = await res.json();
                    console.log('Fetched data:', data);
                    setTasks(data);
                } catch (error) {
                    console.error('Fetch error:', error);
                }
            }
            getData();
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function handleAddTasks(task) {
        setTasks([...tasks, task]);
    }

    function handleUpdateTasks(updatedTask) {
        setTasks(
            tasks.map((task) =>
                task.id === updatedTask.id ? updatedTask : task
            )
        );
    }

    function handleDeleteTasks(id) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    const appState = {
        tasks,
        handleAddTasks,
        handleUpdateTasks,
        handleDeleteTasks,
    };

    return (
        <div className={styles.app}>
            <Sidebar />
            <Outlet context={appState} />
        </div>
    );
}

export default AppLayout;
