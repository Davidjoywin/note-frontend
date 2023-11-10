import '../style.css';
import Main from './main.js';
import NoteForm from './form.js';

const Container = ({ client }) => {
    
    return (
        <div className="container">
            <Main
                client={ client }
                />
        </div>
    )
}

export default Container;