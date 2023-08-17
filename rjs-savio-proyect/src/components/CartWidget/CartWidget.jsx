import './CartWidget.scss'


export const CartWidget = ({ contador }) => {
    return (
        <div className="div-carrito">
            <img className='carrito' src={'../carrito.svg'} alt="IconoCarrito"></img>
            <span className='contador'>0</span>
        </div>
    )
}