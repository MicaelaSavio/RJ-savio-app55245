import { CartWidget } from '../CartWidget/CartWidget'
import './Header.scss'
import { Link } from 'react-router-dom'



export const Header = () => {

    return (
        <header className="header">
            <div className="header-container">
                <div className="img-container-banner">
                    <img className='img' src={'../banner-index.webp'} alt="Banner CalzadosNatitax"></img>
                </div>
            </div>
            <nav className="header-nav">
                <Link className="header-links-nav" to="/">Inicio</Link>
                <Link className="header-links-nav" to="/productos/sale">Ofertas</Link>
                <Link className="header-links-nav" to="/cambios">Politicas de cambio</Link>
                <Link className="header-links-nav" to="/nosotros">Nuestra historia</Link>
            </nav>
           

            <div className="header-cart">
                <CartWidget />
            </div>
        </header>
    )
}