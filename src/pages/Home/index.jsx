import {Link, Outlet} from 'react-router-dom';
import CarruselRand from '../../components/CarruselRand/';
import './home.css';

const Home = () => {
    return(
    <div className='home-container'>
        <h1>Bienvenido a la mejor empresa de venta de celular!</h1>
        <CarruselRand />
    </div>
    
)};

export default Home;