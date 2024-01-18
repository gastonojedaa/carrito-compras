import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const CarritoScreen = () => {
  const {
    listaCompras,
    agregarCompra,
    aumentarCantidad,
    disminuirCantidad,
    eliminarCompra,
  } = useContext(CarritoContext);

  const calcularTotal = () => {
    return listaCompras
      .reduce((total, item) => total + item.price * item.cantidad, 0)
      .toFixed(2);
  };

  const handleImpresion = () => {
    print();
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {listaCompras.map((item) => (
            <tr key={item.id}>
              <th>{item.title}</th>
              <td>{item.price}</td>
              <td>
                <button
                  className="btn btn-ouline-primary"
                  onClick={() => aumentarCantidad(item.id)}
                >
                  +
                </button>
                <button className="btn btn-primary">{item.cantidad}</button>
                <button
                  className="btn btn-ouline-primary"
                  onClick={() => disminuirCantidad(item.id)}
                >
                  -
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => eliminarCompra(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <th>
              <b>Total:</b>
            </th>
            <td></td>
            <td>${calcularTotal()}</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <div>
        <button 
        className="btn btn-primary" 
        onClick={() => handleImpresion()}
        disabled={listaCompras<1}
        >
          Comprar
        </button>
      </div>
    </>
  );
};
