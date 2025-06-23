import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "../Views/Home"
import Dashboard from "../Views/Dashboard"
import Login from "../Views/Login"
import Register from "../Views/Register"
import NotFound from "../Views/NotFound"

function Router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/admin" element={<Dashboard/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router