import { useEffect, useState } from "react";
import {onAuthStateChanged ,getAuth} from 'firebase/auth'


const useAuth = (config) => {
  const [user, setUser] = useState();
    const auth = getAuth(config)
    useEffect(() => {
        
        onAuthStateChanged(auth , (response) => {
            setUser(response)
            console.log(response);
        })
    },[])
};
