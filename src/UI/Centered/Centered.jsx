import styles from './Centered.module.css';

function Centered({ children }) {
    return <div className={styles.centered}>{children}</div>;
}

export default Centered;
