import { useState,useEffect } from "react"
function Main(){
  
  const [productos,setProductos] = useState([])
  const [error,setError] = useState(null)

  async function handleFetch() {

    try{
      const respuesta = await fetch("https://fakestoreapi.com/products")
      const data = await respuesta.json()
      setProductos(data)
      
    }
    catch{
      setError("No se pudo obtener los datos")
    }
  }

    useEffect(()=>{
      handleFetch()
    },[])
  
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
                <h2>{producto.title}</h2>
                <img src={producto.image} alt={producto.title}></img>
                <p>{producto.price}</p>
                <p>{producto.description}</p>
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