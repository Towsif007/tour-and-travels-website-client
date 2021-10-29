import { initializeApp } from 'firebase/app';
import firebaseConfig from "./Firebase.config";


const initializeAthentication = () =>{
    initializeApp(firebaseConfig);
}

export default initializeAthentication;