import React from 'react'
import './Header.scss'
import Logo from "../Images/Logo.webp"
import { CartWidget } from '../CartWidget/CartWidget'

export const Header = () => {
    return (
        <header>
            <a href="#">
                <div className="logo">
                    <img src={Logo} alt="Logo Calzados Natitax" />
                </div>
            </a>
            <ul>
                <li>
                    <a href="#">INICIO</a>
                </li>
                <li>
                    <a href="">PRODUCTOS</a>
                </li>
                <li>
                    <a href="">NOSOTROS</a>
                </li>
            </ul>
        <CartWidget/>
        </header>

    )
}