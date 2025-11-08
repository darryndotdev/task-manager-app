import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('john.smith@gmail.com');
    const [password, setPassword] = useState('qwerty');

    return (
        <form className={styles.form}>
            <div className={styles.row}>
                <label htmlFor='email'>Email address</label>
                <input type='email' id='email' value={email} />
            </div>
            <div className={styles.row}>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' value={password} />
            </div>
            <Link to='/app' className='cta'>
                Login
            </Link>
        </form>
    );
}

export default Login;
