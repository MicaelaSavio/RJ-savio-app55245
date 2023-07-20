

const ItemDetail = ({item}) => {


    return (

        <div className="container my-5">
            <h3>{item.nombre} </h3>
            <img src= {item.img} alt= {item.nombre} />
            <p>${item.precio} </p>
            <button>Comprar</button>
        </div>
    )
}

export default ItemDetail