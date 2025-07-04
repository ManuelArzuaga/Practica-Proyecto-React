import Layout from "../Components/Layout/Layout"
import "../Styles/Register.css"

function Register(){
  return(
    <Layout>
        <section id="register-section">
        <h1>Registrate</h1>
        <form>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" name="email" id="email" />

          <label htmlFor="password">Contraseña:</label>
          <input type="password" name="password" id="password" />

          <button>Registrarme</button>
        </form>
      </section>
    </Layout>
  )
}

export default Register
