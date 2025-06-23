import Header from "../Header/Header"
import Footer from "../Footer/Footer"

function Layout(props){
  return(
    <>
     <Header></Header>
      {props.children}
      <Footer></Footer>
    </>
  )
}

export default Layout