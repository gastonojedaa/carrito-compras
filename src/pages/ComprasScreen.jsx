import {useContext} from 'react'
import {Card} from '../components/Card'
import { ProductoContext } from "../context/ProductoContext"
import {CarritoContext} from '../context/CarritoContext'

export const ComprasScreen = () => {

  const {productos} = useContext(ProductoContext)  

  const {
    agregarCompra,  
    eliminarCompra,
  } = useContext(CarritoContext);
  
  const handleAgregar =(compra) =>{
    agregarCompra(compra)
  }
  const handleQuitar =(id) =>{
    eliminarCompra(id)
  }  

  return (
    <>
      <h1>Compras:</h1>
      <hr />

      {productos.map(productos => (
        <Card key={productos.id}
        imagen={productos.image}
        titulo={productos.title}
        descripcion={productos.description}
        precio={productos.price}
        handleAgregar={() =>handleAgregar(productos)}
        handleQuitar={() => handleQuitar(productos.id)}        
        ></Card>
      ))}
      
      
    </>
  )
}
