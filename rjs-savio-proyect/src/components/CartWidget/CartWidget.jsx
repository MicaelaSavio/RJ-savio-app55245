import './CartWidget.scss'


export const CartWidget = ({ contador }) => {
    return (
        <div className='div-carrito'>
            <img className='carrito' src={'../carrito.svg'} alt="IconoCarrito"></img>
            <p className='contador'>0</p>
        </div>
    )
}