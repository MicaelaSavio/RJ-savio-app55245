import './NavBar.scss';


const NavBar = () => {
  return (
    <nav className="header-nav">
      <a className="header-links-nav" href="#">
        Inicio
      </a>
      <a className="header-links-nav" href="#">
        Productos
      </a>
      <a className="header-links-nav" href="#">
        Contacto
      </a>
    </nav>
  );
};

export default NavBar

