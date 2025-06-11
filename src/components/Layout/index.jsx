import {Link, Outlet} from 'react-router-dom';

const Layout = () => {
    return(
    <>
    <nav>
    <Link to="/">Home</Link>
    <Link to="/quienes-somos">Quienes somos</Link>
    <Link to="/productos">Productos</Link>
    <Link to="/contacto">Contacto</Link>
    </nav>
    <Outlet />
    </>
    
)};

export default Layout;