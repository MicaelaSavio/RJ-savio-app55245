import { CartWidget } from '../CartWidget/CartWidget'
import './Header.scss'
import imgBanner from '/Users/Micaela/Desktop/AppReact/rjs-savio-proyect/public/banner-index.webp'


export const Header = () => {

    return (
        <header className="header">
            <div className="header-container">
                <div className="img-container-banner">
                    <img className='img' src={imgBanner} alt="Banner CalzadosNatitax"></img>
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
