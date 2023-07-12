import './ItemListContainer.scss'
// import ItemCount from './components/ItemCount/ItemCount'

const ItemListContainer = ({ greeting }) => {


    return (
        <div>
            <h2>{greeting}</h2>
            <hr />
            <p>Catalogo</p>
        </div>
    )
}

export default ItemListContainer

