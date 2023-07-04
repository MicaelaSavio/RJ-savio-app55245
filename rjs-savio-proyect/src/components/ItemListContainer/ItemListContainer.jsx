import './ItemListContainer.scss'

const ItemListContainer = ({ greeting }) => {
return (
<div>
<h2>ItemListContainer</h2>
<hr />
<p>Catalogo</p>
<p>{greeting}</p>
</div>
)
}

export default ItemListContainer