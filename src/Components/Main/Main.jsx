import { useState,useEffect } from "react"
import {db} from "../../Config/Firebase"
import { collection,deleteDoc,getDocs,doc } from "firebase/firestore"
import {Link} from "react-router-dom"
function Main(){
  
  const [productos,setProductos] = useState([])
  const [error,setError] = useState(null)
  const [user,setUser] = useState(true)

  async function handleFetch() {

    // try{
    //   const respuesta = await fetch("https://fakestoreapi.com/products")
    //   const data = await respuesta.json()
    //   setProductos(data)
      
    // }
    // catch{
    //   setError("No se pudo obtener los datos")
    // }

    //leer productos de la base de datos
    const productosref = collection(db,"Productos")

    const snapshot = await getDocs(productosref)
    const docs = snapshot.docs.map((doc) => ({id:doc.id,...doc.data()}))
    setProductos(docs)
    
  }

    useEffect(()=>{
      handleFetch()
    },[])

    async function handleDeleteProducto(id){

      try{
        if(confirm("Borrar el producto?")){
          await deleteDoc(doc(db,"Productos",id))
          //actualiza la ui con los productos que quedan
          setProductos(productos.filter(p=>p.id != id))
          //otra solucion seria llamar otra vez a handlefetch
          //handleFetch()
        }
        
      }
      catch(error){
        setError("error al borrar el producto")
      }
      
    }
  
  return(
    <main>
      <section className="Banner">
        <h1>Bienvenidos a la tienda</h1>
      </section>
      <section className="productList">
        {
          error && <p>{error}</p>
        }
        
        {
          
          productos.map((producto) =>{
            return(
              <div className="product">
                <h2>{producto.name}</h2>
                {/* <img src={producto.image} alt={producto.title}></img> */}
                <p>{producto.price}</p>
                <p>{producto.description}</p>
                {
                  user && <div className="user-buttons">
                    <Link to={`/editar-producto/${producto.id}`}>Editar Producto</Link>
                    <button onClick={()=>handleDeleteProducto(producto.id)}>Borrar</button>
                  </div>
                }
                <button>Comprar</button>
              </div>
            )
          })
        }
      </section>
    </main>
  )
}

export default Main