import '../style.css';
import Main from './main.js';

const Container = ({ client, setCurrentUser }) => {
    return (
        <div className="auth-container">
            <Main
                client={client}
                setCurrentUser={ setCurrentUser }
            />
        </div>
    )
}

export default Container;