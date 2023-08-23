import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../hooks/pedirDatos";


export const ItemProducto = ({

    id,
    nombre,
    precio,
    img,
    category,
}) => {


    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;


    
      return (

        <div className="producto">
            <Link to={`/productos/${id}`}>
                <div className="producto__img">
                    <img src={img} alt={nombre} />
                </div>
            </Link>
            <div className="producto__footer">
                <h2>{nombre}</h2>
                <p>{category}</p>
                <p className="price">${precio}</p>
            </div>
            <div className="buttom">
                <button className='btn' onClick={() => addCarrito(id)}>
                    Añadir al carrito
                </button>
                <div>
                    <a href={`/productos/${id}`} className='btn'>Ver en detalle</a>
                </div>
            </div>
        </div>

    )

}