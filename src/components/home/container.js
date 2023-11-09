import react from 'react';

import '../style.css';
import Main from './main.js';

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