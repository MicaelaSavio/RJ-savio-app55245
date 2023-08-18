import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Inicio } from '../Inicio/Inicio'
import { ProductosLista } from '../Productos/Productos'
import { Nosotros } from '../Nosotros/Nosotros'

export const Paginas = () => {
    return (
        <section>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/productos" element={<ProductosLista />} />
                <Route path="/Nosotros" element={<Nosotros />} />
            </Routes>
        </section>

    )
}