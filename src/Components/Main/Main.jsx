function Main(){
  
  const Productos = [
     {
      nombre: "Bicicleta",
      precio: 1000,
      descripcion: "20 cambios, cuadro de aluminio, disponible en todos los rodados"
    },
    {
      nombre: "Computadora",
      precio: 3000,
      descripcion: "Windows 11 instalado, paquete Office con licencia, 16 de memoria RAM"
    },
    {
      nombre: "Silla gamer",
      precio: 2000,
      descripcion: "Tapizado de eco-cuerina, altura regulable, facil de limpiar"
    },
    {
      nombre: "Celular 1",
      precio: 3229,
      descripcion: "Compatibilidad con múltiples dispositivos"
    },
    {
      nombre: "Smartwatch 2",
      precio: 2615,
      descripcion: "Liviano, ideal para viajes"
    }

  ]
  return(
    <main>
      <section className="Banner">
        <h1>Bienvenidos a la tienda</h1>
      </section>
      <section className="productList">
        {
          Productos.map((producto) =>{
            return(
              <div className="product">
                <h2>{producto.nombre}</h2>
                <p>{producto.precio}</p>
                <p>{producto.descripcion}</p>
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