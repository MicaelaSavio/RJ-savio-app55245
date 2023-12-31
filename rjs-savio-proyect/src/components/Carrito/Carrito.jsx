import React, { useContext } from 'react';
import './Carrito.scss'
import { DataContext } from '../hooks/DataContext';
import { Link } from 'react-router-dom'



export const Carrito = () => {
    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu;
    const [carrito, setCarrito] = value.carrito;
    const { getTotal } = useContext(DataContext)

    const tooglefalse = () => {
        setMenu(false);
    }

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    const resta = id => {
        carrito.forEach(item => {
            if (item.id === id) {
                item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -= 1;
            }
            setCarrito([...carrito])
        })
    }

    const suma = id => {
        carrito.forEach(item => {
            if (item.id === id) {
                item.cantidad += 1;
            }
            setCarrito([...carrito])
        })
    }

    const removeProducto = id => {
        if (window.confirm("¿Quieres eliminar el producto?")) {
            carrito.forEach((item, index) => {
                if (item.id === id) {
                    item.cantidad = 1;
                    carrito.splice(index, 1)
                }

            }
            )
            setCarrito([...carrito])
        }

    }

    return (
        <div className={show1}>
            <div className={show2}>
                <div className="carrito__close" onClick={tooglefalse}>
                    <box-icon name="x"></box-icon>
                </div>

                <h2>Su carrito</h2>
                <hr />
                <div className="carrito__center">

                    {
                        carrito.length === 0 ? <> <div className='emptyCart'>
                            <h2 style={{
                                textAlign: "center", fontSize: "3rem"
                            }} > Carrito vacio <box-icon name='sad' animation='burst' flip='horizontal' ></box-icon></h2>

                            <Link to="/productos" onClick={tooglefalse}><button className='btncompra'>Realizar una compra</button></Link>
                        </div>
                        </>
                            : <>
                                {
                                    carrito.map((producto) => (
                                        <div className="carrito__item" key={producto.id}>
                                            <img src={producto.img} alt="" />
                                            <div>
                                                <h3>{producto.nombre}</h3>
                                                <p className="price">${producto.precio}</p>
                                            </div>
                                            <div>
                                                <box-icon name="up-arrow" type="solid" onClick={() => suma(producto.id)}></box-icon>
                                                <p className="cantidad">{producto.cantidad}</p>
                                                <box-icon name="down-arrow" type="solid" onClick={() => resta(producto.id)}></box-icon>
                                            </div>

                                            <div className="remove__item">
                                                <box-icon name="trash" onClick={() => removeProducto(producto.id)}></box-icon>
                                               
                                            </div>
                                        </div>

                                    ))
                                }

                                <div className="carrito__footer">
                                <h3>Total: ${getTotal()}</h3>
                                    <Link to="/checkout" onClick={tooglefalse}><button className="btn">Comprar</button></Link>
                                </div>
                            </>
                    }

                </div>
            </div>
        </div>
    )
}