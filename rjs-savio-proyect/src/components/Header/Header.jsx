import React, { useContext } from 'react'
import './Header.scss'
import Logo from '/Images/logo.webp'
import { Link } from 'react-router-dom'
import { DataContext } from '../hooks/pedirDatos'

export const Header = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito, setCarrito] = value.carrito;


    const toogleMenu = () =>{
        setMenu(!menu)
    }


    return (
        <header>
            <Link to='/'>
                <div className="logo">
                    <img src={Logo} alt="Logo Calzados Natitax" />
                </div>
            </Link>
            <ul>
                <li>
                    <Link to='/'>INICIO</Link>
                </li>
                <li>
                    <Link to='/productos'>PRODUCTOS</Link>
                </li>
                <li>
                    <Link to='/nosotros'>Nosotros</Link>
                </li>
            </ul>
            <div className="cart" onClick={toogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item__total">{carrito.length}</span>
            </div>
            
        </header>

    )
}