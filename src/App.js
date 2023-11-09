import { memo, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Auth from './pages/auth.js';
import Home from './pages/home.js';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: "http://127.0.0.1:8000",
    withCredentials: true,
})

const App = () => {
    const [currentUser, setCurrentUser] = useState();

    // useEffect(() => {
    //     client.get("/account/user")
    //     .then(res => {
    //         setCurrentUser(true);
    //         console.log(res);
    //     })
    //     .catch(err => {
    //         setCurrentUser(false);
    //     })
    // }, [])

    const submitLogout = () => {
        client.get(
            "/account/logout",
            {withCredentials: true}
        ).then(res => setCurrentUser(false))
        .catch(err => console.log(err));
    }

    console.log(currentUser);
    if (currentUser) {
        console.log(`this from inside the home function ${currentUser}`)
        return (
            <Home
                client={ client }
                submitLogout={ submitLogout }
            />
        )}

    return (
        <Auth
            client={ client }
            setCurrentUser={ setCurrentUser }
            />
    )
  }


export default memo(App);
