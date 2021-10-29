import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from 'react';
import initializeAthentication from "../components/Login/Firebase/Firebase.init";

initializeAthentication();


const useFirebase = () =>{
    const [user, setUser] = useState({});
    const auth = getAuth();

    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        .then(result =>{
                setUser(result.user);
                });
       

    }

    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }

    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;