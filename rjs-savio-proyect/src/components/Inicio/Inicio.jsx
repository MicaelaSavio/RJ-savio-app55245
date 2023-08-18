import React from 'react'
import Portada from "../Images/bannerinicio.jpg"
import './Inicio.scss'
import { Link } from 'react-router-dom'

export const Inicio = () => {
    return (
        <div className="container-img50porciento" style={{ paddingTop: '10rem' }}>

            <Link to="/productos">
                <div className='inicio'>
                    <img src={Portada} alt="Imagen de inicio" />
                </div>
            </Link>

        </div>
    )
}