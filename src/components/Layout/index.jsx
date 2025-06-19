import { Link, Outlet } from "react-router-dom";
import "./layout.css";
import logo from "../../assets/logo/logo.png";
import { marcas } from '../../../data/data.js';

const Layout = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="logo" />
        <Link to="/">Home</Link>
        <Link to="/quienes-somos">Quienes somos</Link>
        <div className="dropdown">
          <p className="nav-link">Productos ▾</p>
          <div className="dropdown-content">
            <Link to="/productos">Todos</Link>
            {marcas.map((m) => (
              <Link key={m.id} to={`/productos/${m.id}`}>{m.nombre}</Link>
            ))}
          </div>
        </div>
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
