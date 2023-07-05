
import carritoCompras from '/Users/Micaela/Desktop/AppReact/rjs-savio-proyect/public/carrito.svg'
import './CartWidget.scss'


export const CartWidget = () => {
    return (
        <div className='div-carrito'>
            <img className='carrito' src={carritoCompras} alt="IconoCarrito"></img>
            <p className='contador'>0</p>
        </div>    
    )
}
