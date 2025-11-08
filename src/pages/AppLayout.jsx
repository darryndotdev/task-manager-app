import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from './AppLayout.module.css';

function AppLayout() {
    return (
        <div className={styles.app}>
            <Sidebar />
            <Outlet />
        </div>
    );
}

export default AppLayout;
