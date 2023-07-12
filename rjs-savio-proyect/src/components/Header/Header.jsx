import { CartWidget } from '../CartWidget/CartWidget'
import './Header.scss'



export const Header = () => {

    return (
        <header className="header">
            <div className="header-container">
                <div className="img-container-banner">
                    <img className='img' src={'../banner-index.webp'} alt="Banner CalzadosNatitax"></img>
                </div>
            </div>
            <nav className="header-nav">
                <a className="header-links-nav" href="#">Inicio</a>
                <a className="header-links-nav" href="#">Productos</a>
                <a className="header-links-nav" href="#">Contacto</a>
            </nav>
            {/* <CartWidget /> */}

            <div className="header-cart">
                <CartWidget />
            </div>
        </header>
    )
}