import React from "react";
import './App.css'
import 'boxicons';
import { Header } from "./components/Header/Header";
import { Inicio } from "./components/Inicio/Inicio";
import { ProductosLista } from "./components/Productos/Productos";
import { Paginas } from "./components/Paginas/Paginas";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Nosotros } from "./components/Nosotros/Nosotros";

function App() {
  return (

    <div className="App">

      <BrowserRouter>
        
        <Header />
        
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<ProductosLista />} />
          <Route path="/Nosotros" element={<Nosotros />} />
        </Routes>
        
      </BrowserRouter>

    </div>

  );
}
export default App;