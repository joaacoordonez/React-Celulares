import { Link, Outlet } from "react-router-dom";
import "./layout.css";
import logo from '../../assets/logo/logo.png'

const Layout = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="logo" />
        <Link to="/">Home</Link>
        <Link to="/quienes-somos">Quienes somos</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
      <Outlet />

      <footer>
        <p>Todos los derechos reservados</p>
        <p>TP 7 - Celulares</p>
      </footer>
    </>
  );
};

export default Layout;
