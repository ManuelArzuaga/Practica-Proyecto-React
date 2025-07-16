import { useEffect, useState } from "react"
import Layout from "../Components/Layout/Layout"
import "../Styles/Dashboard.css"
import {db} from "../Config/Firebase"
import { collection,addDoc, getDoc,doc, updateDoc } from "firebase/firestore"
import { useNavigate, useParams } from "react-router-dom"

function EditProduct(){
  
  const [name,setName] = useState("")
  const [price,setPrice] = useState(0)
  const [description,setDescription] = useState("")
  const [error,setError] = useState(null)

  const productosRef = collection(db,"Productos")

  const navigate = useNavigate()

  const {id} = useParams()

  //traer porducto de la base de datos

  async function fetchproduct(id){
    try{
      const docRef = doc(db,"Productos",id)
      const docSnap = await getDoc(docRef)
      if(docSnap.exists()){
        const data = docSnap.data()
        console.log(data)
        setName(data.name)
        setPrice(data.price)
        setDescription(data.description)
      }
    }
    catch(error){
      setError("error al cargar al producto")
    }
  }

  useEffect(()=>{
    fetchproduct(id)
  },[id]) //siempre que cambia el id se hace un fetch nuevo

  
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

    try {
      const docRef = doc(db,"Productos",id)
      updateDoc(docRef,{name,price,description})
      navigate("/")
    } catch (error) {
      setError("Error al actualizar")
    }

  }


  return(
    <Layout>
      <section id="admin-section">
        <h1>Editando un producto</h1>
        <p>Aquí puedes editar el producto con su id {id}</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre del producto:</label>
          <input type="text" name="name" id="name" onChange={handleName} value={name} />

          <label htmlFor="price">Precio del producto:</label>
          <input type="number" name="price" id="price" onChange={handlePrice} value={price} />

          <label htmlFor="description">Descripción del producto:</label>
          <textarea name="description" id="description" onChange={handleDescription} value={description}></textarea>

          <button>Editar producto</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </section>
    </Layout>
  )
}

export default EditProduct
