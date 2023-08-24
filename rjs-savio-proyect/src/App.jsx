import React from "react";
import './App.css'
import 'boxicons';
import { Header } from "./components/Header/Header";
import { Inicio } from "./components/Inicio/Inicio";
import { ProductosLista } from "./components/Productos/Productos";
import { Paginas } from "./components/Paginas/Paginas";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Nosotros } from "./components/Nosotros/Nosotros";
import { DataProvider } from "./components/hooks/DataContext";
import { Carrito } from "./components/Carrito/Carrito";
import { ItemDetail } from "./components/Productos/ItemDetail";
import Checkout from "./components/Checkout/Checkout";


function App() {

  
  return (

    
    <DataProvider>
      <div className="App">

        <BrowserRouter>

          <Header />
          <Carrito />

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<ProductosLista />} />
            <Route path="/productos/:id" element={<ItemDetail /> } />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Paginas" element={<Paginas />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>

        </BrowserRouter>

      </div>
    </DataProvider>
  );
}
export default App;