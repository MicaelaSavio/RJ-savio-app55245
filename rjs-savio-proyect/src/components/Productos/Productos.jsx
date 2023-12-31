import React, { useContext } from 'react'
import './Productos.scss'
import { DataContext } from '../hooks/DataContext'
import { ItemProducto } from './ItemProducto'

export const ProductosLista = () => {

    const { productos } = useContext(DataContext);

    console.log(productos);

    return (

        <>
            <h1 className="title">PRODUCTOS</h1>
            <div className="productos">
                {
                    productos.map((producto) => (
                        <ItemProducto
                            key={producto.id}
                            id={producto.id}
                            nombre={producto.nombre}
                            descripcion={producto.descripcion}
                            precio={producto.precio}
                            img={producto.img}
                            category={producto.category}
                            stock={producto.stock}
                        />
                    ))
                }

            </div>
        </>


    )
}