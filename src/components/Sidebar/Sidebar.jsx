import Nav from '../Nav/Nav';
import styles from './Sidebar.module.css';

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Nav />
            <footer>Footer</footer>
        </div>
    );
}

export default Sidebar;
