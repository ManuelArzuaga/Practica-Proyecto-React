import { useState } from "react"
import { Link } from "react-router-dom"

function Header(){

  const [user,setUser] = useState(true)

  function HandleLogout(){
    setUser(false)
  }

  return(
    <>
      <header>
        <nav>
          <ul>
            {
              user && <>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/admin">Dashboard</Link></li>
                <button onClick={HandleLogout}>Cerrar Sesion</button>
              </>
            }
            {
              !user && <>
                <li><Link to="/register">Registrate</Link></li>
                <li><Link to="/login">Login</Link></li>
              </>
            }
            
            
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header