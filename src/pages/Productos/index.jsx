import {Link, Outlet} from 'react-router-dom';
import Carrusel from '../../components/Carrusel/';

const Productos = () => {
    return(
    <>
        <div className='home-container'>
        <h1>Aca estan disponibles todos los productos</h1>
        <Carrusel />
    </div>
    </>
    
)};

export default Productos;