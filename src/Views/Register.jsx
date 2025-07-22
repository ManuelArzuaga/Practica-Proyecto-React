import { useState } from "react"
import Layout from "../Components/Layout/Layout"
import "../Styles/Register.css"
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../Config/Firebase"
import { useNavigate } from "react-router-dom"

function Register(){

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error, setError] = useState(null)
  const [message,setMessage] = useState(null)
  const navigate = useNavigate()

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
        await createUserWithEmailAndPassword(auth,email,password)
        setMessage("Usuario registrado con exito")
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
        <section id="register-section">
        <h1>Registrate</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>

          <label htmlFor="password">Contraseña:</label>
          <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>

          <button>Registrarme</button>
        </form>
        <h3>{error}</h3>
        <h3>{message}</h3>
      </section>
    </Layout>
  )
}

export default Register
