import { useState } from "react"
import Layout from "../Components/Layout/Layout"
import "../Styles/Dashboard.css"
import {db} from "../Config/Firebase"
import { collection,addDoc } from "firebase/firestore"

function Dashboard(){
  
  const [name,setName] = useState("")
  const [price,setPrice] = useState(0)
  const [description,setDescription] = useState("")
  const [error,setError] = useState(null)

  const productosRef = collection(db,"Productos")

  //cargar productos en la base de datos
  async function CreateProduct(productData) {
    try{
      const productref = await addDoc(productosRef,productData);
      return productref
    }
    catch(error){
      console.log("error al cargar los datos")
    }
  }
  
  function handleName(event){
    setName(event.target.value)
  }
  
  function handlePrice(event){
    setPrice(event.target.value)
  }
  
  function handleDescription(event){
    setDescription(event.target.value)
  }

  function handleSubmit(event){
    
    event.preventDefault()

    if (!name || !price || !description) {
      setError("Necesitas completar los campos")
    }

    const newProduct = { name, price, description } //guarda los datos en un objeto

    CreateProduct(newProduct)
    
    //console.log("Nuevo producto: ", newProduct)

    //inicializar los datos
    setName("")
    setPrice(0)
    setDescription("")
  }


  return(
    <Layout>
      <section id="admin-section">
        <h1>Panel de administración</h1>
        <p>Aquí puedes administrar todos tus productos. Puedes agregar, modificar o borrar lo que desees.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre del producto:</label>
          <input type="text" name="name" id="name" onChange={handleName} value={name} />

          <label htmlFor="price">Precio del producto:</label>
          <input type="number" name="price" id="price" onChange={handlePrice} value={price} />

          <label htmlFor="description">Descripción del producto:</label>
          <textarea name="description" id="description" onChange={handleDescription} value={description}></textarea>

          <button>Agregar producto</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </section>
    </Layout>
  )
}

export default Dashboard
