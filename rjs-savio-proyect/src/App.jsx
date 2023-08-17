import React from "react";
import './App.css'
import 'boxicons';
import { Header } from "./components/Header/Header";
import { Inicio } from "./components/Inicio/Inicio";
import { ProductosLista } from "./components/Productos/Productos";
import { Paginas } from "./components/Paginas/Paginas";
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (

    <div className="App">

      <BrowserRouter>
        <Header />
        <Paginas />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<ProductosLista />} />

        </Routes>
      </BrowserRouter>

    </div>

  );
}
export default App;
