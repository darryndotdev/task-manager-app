import styles from './BoardLayout.module.css';
function BoardLayout({ children }) {
    return <div className={styles.boardLayout}>{children}</div>;
}

export default BoardLayout;
