import '../style.css';
import Main from './main.js';

const RegisterContainer = ({ client, setCurrentUser }) => {
    return (
        <div className="auth-container">
            <Main
                client={ client }
                setCurrentUser={ setCurrentUser }
            />
        </div>
    )
}

export default RegisterContainer;