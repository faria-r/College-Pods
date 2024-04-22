import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config.js'
import { signInWithEmailAndPassword } from 'firebase/auth/cordova';
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(true);
    const [loading,setLoading] = useState(true)

    //manage user
    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
        if(currentUser === null || currentUser.email){
            setUser(currentUser);
        }

setLoading(false)
console.log(user,'user is logged in')
        });
        return ()=>{
            unSubscribe();
        } 
    },[])
    //create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email,password)
    }

    //signIN with google
    const logInWithGoogle = (provider) =>{
        return signInWithPopup(auth,provider)
    }
    //signIN with Facebook
    const logInWithFaceBook = (provider) =>{
        return signInWithPopup(auth,provider)
    }

    const logOut = ()=>{
        return signOut(auth)
    }
    const authInfo = {
        user,
        createUser,
        signIn,
        logInWithGoogle,
        logInWithFaceBook,
        loading,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;