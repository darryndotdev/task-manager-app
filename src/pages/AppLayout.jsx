import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from './AppLayout.module.css';

function AppLayout() {
    const [tasks, setTasks] = useState([]);

    useEffect(function () {
        const stored = localStorage.getItem('tasks');
        if (stored) {
            setTasks(JSON.parse(stored));
        } else {
            async function getData() {
                try {
                    const res = await fetch(`/data/tasks.json`);
                    const data = await res.json();
                    setTasks(data);
                } catch (error) {
                    console.log(error);
                }
            }
            getData();
        }
    }, []);

    function saveTasks(newTasks) {
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    }

    function handleAddTasks(task) {
        saveTasks([...tasks, task]);
    }

    function handleUpdateTasks(updatedTask) {
        saveTasks(
            tasks.map((task) =>
                task.id === updatedTask.id ? updatedTask : task
            )
        );
    }

    function handleDeleteTasks(id) {
        saveTasks(tasks.filter((task) => task.id !== id));
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
