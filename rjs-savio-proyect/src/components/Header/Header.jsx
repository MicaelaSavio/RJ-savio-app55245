import './Header.scss'


export const Header = () => {

    return (
        <header className="header">
            <div className="header-container">
                <h1 className="header-logo">LOGO</h1>

                <nav className="header-nav">
                    <a className="header-links-nav" href="#">Inicio</a>
                    <a className="header-links-nav"href="#">Productos</a>
                    <a className="header-links-nav"href="#">Contacto</a>
                </nav>
            </div>
        </header>
    )
}
