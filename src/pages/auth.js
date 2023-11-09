import { useState } from 'react';
import Header from '../components/login/header.js';
import Container from '../components/login/container.js';
import RegisterHeader from '../components/register/header.js';
import RegisterContainer from '../components/register/container.js';

const Auth = ({ client, setCurrentUser }) => {

    const [registerToggle, setRegisterToggle] = useState(false);

    const update_form_bttn = () => {
        setRegisterToggle(!registerToggle);
    }

    if (registerToggle) {
        return (
        <>
            <RegisterHeader
                update_form_bttn={ update_form_bttn }
            />
            <RegisterContainer
                client={ client }
                setCurrentUser={setCurrentUser}
            />
        </>)

    } return (
        <>
            <Header
                update_form_bttn={ update_form_bttn }
            />
            <Container
                client={ client }
                setCurrentUser={ setCurrentUser }
            />
        </>
    )
}

export default Auth;