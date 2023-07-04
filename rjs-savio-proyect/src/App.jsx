import { Header } from "./components/Header/Header.jsx"
import './App.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
<div>
  <Header/>
  <ItemListContainer greeting="¡Hola, bienvenid@ al catálogo!" />
</div>
  )
}

export default App
