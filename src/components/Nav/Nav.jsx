import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

function Nav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink to='board'>Board</NavLink>
                </li>
                <li>
                    <NavLink to='backlog'>Backlog</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
