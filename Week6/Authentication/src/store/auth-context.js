import React, { createContext, useState } from 'react';

let initialToken = localStorage.getItem('token');

const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
});

const calculateExpireTime = (expirationTime) => {
    const current_time = new Date().getTime();
    const expireIn_time = new Date(expirationTime).getTime();

    let remainingTime = expireIn_time - current_time;

    return remainingTime;
}

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(initialToken);
    const userIsLoggedIn = !!token;
    
    const logoutHandler = () => {
        setToken();
        localStorage.removeItem('token');
    }

    const loginHandler = (token, expirationTime) => {
        setToken(token);
        localStorage.setItem('token',token);
        const remainingTime = calculateExpireTime(expirationTime);
        console.log(remainingTime);
        setTimeout(logoutHandler, remainingTime);
    }
   

    const contextValue = {
        token: token, 
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }

    return (
        <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContext;