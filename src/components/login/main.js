import '../style.css';
import { useState, useEffect } from 'react';

const Main = ({ client, setCurrentUser }) => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitLogin = (e) => {
        e.preventDefault()
        // client.post(
        //     '/account/login',
        //     {
        //         username: username,
        //         password: password
        //     })
        //     .then(res => {
        //         console.log(res);
        //         setCurrentUser(true);
        //         console.log(username);
        //     }).catch(err => console.log(err));
        fetch("http://127.0.0.1:8000/account/login", {
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify({"username": username, "password": password})
        }).then(res => setCurrentUser(true))
        .catch(err => {
            setCurrentUser(false);
            console.log(err);
        });
        }


    // useEffect(() => {
    //     client.get("/account/user")
    //     .then((res) => {
    //         setCurrentUser(true);
    //         console.log(res);
    //     })
    //     .catch((err) => {
    //         setCurrentUser(false);
    //         console.log("This error is from login component");
    //     })
    // }, [])
    
    return (
        <>
            <h2>Login</h2>
            <form onSubmit={ e => submitLogin(e) }>
                <div className='auth-detail'>
                    <label>Username</label>
                    <input 
                        type='text'
                        value={ username }
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder='Username'
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
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        required
                    />
                </div>
                <button className="submit-bttn">Login</button>
            </form>
        </>
    )
}

export default Main;