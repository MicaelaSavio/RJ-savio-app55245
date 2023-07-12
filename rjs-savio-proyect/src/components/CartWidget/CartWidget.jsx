import './CartWidget.scss'


export const CartWidget = () => {
    return (
        <div className='div-carrito'>
            <img className='carrito' src={'../carrito.svg'} alt="IconoCarrito"></img>
            <p className='contador'>0</p>
        </div>
    )
}