import { Header } from "./components/Header/Header.jsx"
import './App.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carrito } from './components/ItemCount/ItemCount'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Cambios } from "./components/Cambios/Cambios.jsx";
import { Nosotros } from "./components/Nosotros/Nosotros.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";


function App() {

  return (

    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Nuestros productos"} />} />
        <Route path="/productos/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:itemId" element={< ItemDetailContainer />} />
        <Route path="/cambios" element={<Cambios />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>

      {/* <Footer/> */}
    </BrowserRouter>


  )

}

export default App
