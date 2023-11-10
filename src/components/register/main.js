import { useState } from 'react';
import '../style.css';


const Main = ({ client, setCurrentUser }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const submitRegistration = (e)  => {
        e.preventDefault();
        client.post(
            '/account/register',
            {
                username: username,
                password: password,
                email: email
            })
            .then(res => {
                client.post(
                    "/account/login",
                    {
                        username: username,
                        password: password
                    })
                    .then(res => setCurrentUser(true))
                }).catch(res => console.log(res));
            }

    return (
        <>
            <h2>Register</h2>
            <form onSubmit={e => submitRegistration(e)}>
                <div className='auth-detail'>
                    <label>Username</label>
                    <input
                        type='text'
                        value={ username }
                        onChange={ (e) => setUsername(e.target.value) }
                        placeholder='Username'
                        required
                    />
                </div>

                <div className='auth-detail'>
                    <label>Email</label>
                    <input
                        type='text'
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                        placeholder='Email'
                        required
                    />
                </div>

                <div className='auth-detail'>
                    <label>
                        Password
                    </label>
                    <input
                        type='password' 
                        value={ password }
                        onChange={ (e) => setPassword(e.target.value) }
                        placeholder='Password'
                        required
                    />
                </div>
{/* 
                <div className='auth-detail'>
                    <label>
                        Confirm Password
                    </label>
                    <input
                        type='password'
                        value={ confirm_password }
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder='Password'
                        required
                    />
                </div> */}
                <button className="submit-bttn" type="submit" >Register</button>
            </form>
        </>
    )
}

export default Main;