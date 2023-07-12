import { Header } from "./components/Header/Header.jsx"
import './App.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carrito } from './components/ItemCount/ItemCount'



function App() {
  
  return (
<div>
  <Header/>
  <ItemListContainer greeting= {"¡Hola, bienvenid@ al catálogo!"} /> 
  <Carrito/>
</div>
  )
}

export default App
