import React from 'react'
import './Header.scss'
import Logo from '/Images/logo.webp'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const Header = () => {
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
            <CartWidget />
        </header>

    )
}