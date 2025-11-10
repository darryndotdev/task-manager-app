import styles from './Sidebar.module.css';
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Button from '../Button/Button';
import Add from '../../UI/Icons/Add';

function Sidebar() {
    const navigate = useNavigate();

    return (
        <div className={styles.sidebar}>
            <div className={styles.container}>
                <Nav />
                <Button onClick={() => navigate('new')} variant='primary'>
                    <Add />
                    Create task
                </Button>
            </div>
            <footer>Footer</footer>
        </div>
    );
}

export default Sidebar;
