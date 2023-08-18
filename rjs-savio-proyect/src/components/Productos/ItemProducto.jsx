import React from "react";


export const ItemProducto = ({

    id,
    nombre,
    precio,
    img,
    category,
}) => {


    return (
        <div className="producto">
            <a href="#">
                <div className="producto__img">
                    <img src={img} alt={nombre} />
                </div>
            </a>
            <div className="producto__footer">
                <h2>{nombre}</h2>
                <p>{category}</p>
                <p className="price">${precio}</p>
            </div>
            <div className="buttom">
                <button className='btn'>
                    Añadir al carrito
                </button>
                <div>
                    <a href="#" className='btn'>Ver en detalle</a>
                </div>
            </div>
        </div>

    )

}