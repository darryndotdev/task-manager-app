import Login from '../components/Login/Login';
import Centered from '../UI/Centered/Centered';

function Homepage() {
    return (
        <>
            <h1>Task manager app</h1>
            <Centered>
                <Login />
            </Centered>
        </>
    );
}

export default Homepage;
