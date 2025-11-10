import styles from './Button.module.css';
function Button({ children, onClick, variant }) {
    return (
        <button
            onClick={onClick}
            className={`${styles.btn} ${styles[variant]}`}
        >
            {children}
        </button>
    );
}

export default Button;
