import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext(null)
export const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading]= useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn =(email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    } 
    const logOut = () =>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, (loggedUser) =>{
            console.log('logged in user inside auth state observer' , loggedUser);
            setUser(loggedUser)
            setLoading(false)
        })
        return() =>{
            unSubscribe();
        }
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
       logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;