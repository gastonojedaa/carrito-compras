import { ProductoContext } from "./ProductoContext";
import { useState, useEffect } from "react";

export const ProductosProvider = ({ children }) => {
  const [productos, setproductos] = useState([]);

  const fetchproductos = async () => {
    const resp = await fetch("https://fakestoreapi.com/products");
    const data = await resp.json();
    console.log(data);
    setproductos(data);
  };

  useEffect(() => {
    fetchproductos();
  }, []);
  return (
    <ProductoContext.Provider value={{ productos }}>
      {children}
    </ProductoContext.Provider>
  );
};
