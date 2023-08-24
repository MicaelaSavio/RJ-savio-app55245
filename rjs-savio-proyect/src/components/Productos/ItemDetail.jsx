import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../hooks/DataContext'
import { useParams } from 'react-router-dom'
import './ItemDetails.scss'
import { ItemProducto } from './ItemProducto'
import PageNotFound from '../PageNotFound/PageNotFound'


export const ItemDetail = () => {
   
    const value = useContext(DataContext)
    const {getOneProduct, productos } = value;
    const params = useParams();
    const [detalle, setDetalle] = useState([])
    const addCarrito = value.addCarrito;
    let item = 0;

    useEffect(() => {
        getOneProduct(params.id)
       .then((resp) =>{
        setDetalle(resp)
       })
    }, [params.id]);



    if (detalle === null) {
        return <PageNotFound />;
    }


    return (
        <>
            {
                <div className="detalles">
                    <h2>{detalle.nombre} </h2>
                    <p className="price">${detalle.precio}</p>
                    <div className="grid">                   
                        <div className="size">
                            <select placeholder="Talle" >
                                <option value="1">35</option>
                                <option value="1">36</option>
                                <option value="1">37</option>
                                <option value="1">38</option>
                                <option value="1">39</option>
                                <option value="1">40</option>
                            </select>
                            <p>Talle</p>
                        </div>
                    </div>
                    <button onClick={() => addCarrito(detalle.id)}>
                        Añadir al carrito
                    </button>
                    <br />
                    <br />
                    <br />
                    <br />

                    <img src={detalle.img} alt={detalle.nombre} />

                    <input type="range" min="1" max="36" />
                    <div className="description">
                        <p><b>Detalles:</b></p>
                        <br />
                        <p>{detalle.descripcion}</p>
                    </div>
                    <br /><br /><br /><br /><br /><br />
                </div>

            }

            <h2 className="relacionados">Productos relacionados</h2>
            <div className="productos">
                {
                    productos.map((producto) => {
                        if ((item < 2) && (detalle.category === producto.category)) {
                            item++;
                            return <ItemProducto

                                key={producto.id}
                                id={producto.id}
                                nombre={producto.nombre}
                                descripcion={producto.descripcion}
                                precio={producto.precio}
                                img={producto.img}
                                category={producto.category}
                                stock={producto.stock}
                            />
                        }


                    })
                }

            </div>

        </>
    )
}