import { Link } from "react-router-dom"

function Header(){
  return(
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin">Dashboard</Link></li>
            <li><Link to="/register">Registrate</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header