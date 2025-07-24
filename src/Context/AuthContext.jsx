import { createContext, useContext, useEffect, useState } from "react";
import {auth} from "../Config/Firebase"
import {onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {createUserWithEmailAndPassword} from "firebase/auth"


const authcontext = createContext()

const AuthProvider = (props) =>{
  const [user,setUser] = useState()

  useEffect(()=>{
    
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      setUser(user)
    })

    return () => unsubscribe()
  },[])

  //login
  const login = (email,password) => signInWithEmailAndPassword(auth,email,password)
  //register

  const register = (email,password) => createUserWithEmailAndPassword(auth,email,password)

  //logout

  const logout = () => signOut(auth)

  return(
    <authcontext.Provider value={{login,register,user,logout}}>
      {props.children}
    </authcontext.Provider>
  )
}
//custom hook
const useAuth = () => useContext(authcontext)

export {authcontext,AuthProvider,useAuth}