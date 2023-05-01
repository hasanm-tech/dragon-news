import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth =getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState()
    const [loading,setLoading] = useState(true)

    const createUser = (email,pass) => {
        return createUserWithEmailAndPassword(auth,email,pass);
        setLoading(true)
    }
    const logIn = (email,pass) => {
        return signInWithEmailAndPassword(auth,email,pass)
    }

    const logOut = () => {
        return signOut(auth);
        setLoading(true)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log({loggedUser})
            setUser(loggedUser);
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    },[])

    const AuthInfo = {
        user,
        createUser,
        logIn,
        logOut,
        loading
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;