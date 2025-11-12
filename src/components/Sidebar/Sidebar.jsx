import styles from './Sidebar.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Button from '../Button/Button';
import Add from '../../UI/Icons/Add';

function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    function handleNavigation() {
        const currentPath = location.pathname;
        navigate('/app/new', { state: { from: currentPath } });
    }

    return (
        <div className={styles.sidebar}>
            <div className={styles.container}>
                <Nav />
                <Button onClick={handleNavigation} variant='primary'>
                    <Add />
                    Create task
                </Button>
            </div>
            <footer>Footer</footer>
        </div>
    );
}

export default Sidebar;
