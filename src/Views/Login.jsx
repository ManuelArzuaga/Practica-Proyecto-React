import { useState } from "react"
import Layout from "../Components/Layout/Layout"
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../Config/Firebase"
import { useNavigate } from "react-router-dom"
import "../Styles/Login.css"
import { useAuth } from "../Context/AuthContext"

function Login(){

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error, setError] = useState(null)
  const [message,setMessage] = useState(null)
  const navigate = useNavigate()
  const { login } = useAuth()
 
  async function handleSubmit(e){

    e.preventDefault()
    setError(null)
    setMessage(null)
    if(!email || !password){
      setError("Debes completar los campos")
      return
    }

    //guardar o registrar un usuario
    try {
        await login(email,password)
        setMessage("Usuario logueado con exito")
        setEmail("")
        setPassword("")
        setTimeout(()=>{
          setMessage("Redirigiendo al home")
        },2000)

         setTimeout(()=>{
          navigate("/")
        },4000)
    } catch (error) {
      setError(error.message)
    }
    

  }
  return(
    <Layout>
        <section id="login-section">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>

          <label htmlFor="password">Contraseña:</label>
          <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>

          <button>Login</button>
        </form>
        <h3>{error}</h3>
        <h3>{message}</h3>
      </section>
    </Layout>
  )
}

export default Login
