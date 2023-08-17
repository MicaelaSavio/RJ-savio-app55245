import React from "react";
import { Header } from "./components/Header/Header"
// import { ProductosLista } from "./components/Productos/Productos"
import './App.css'
import 'boxicons';
import { Paginas } from "./components/Paginas/Paginas";
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (

    <BrowserRouter>

      <div className="App">
        <Routes>

          <Route>
            <Header />
            <Paginas />
          </Route>

        </Routes>

      </div>

    </BrowserRouter>

  );

}
export default App;
