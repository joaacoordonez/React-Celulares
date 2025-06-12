import {Link, Outlet} from 'react-router-dom';
import Carrusel from '../../components/Carrusel/';
import './home.css';

const Home = () => {
    return(
    <div className='home-container'>
        <h1>Bienvenido a la mejor empresa de venta de celular!</h1>
        <Carrusel />
    </div>
    
)};

export default Home;