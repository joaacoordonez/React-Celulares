import { useParams } from "react-router-dom";
import CarruselXId from '../../components/CarruselXId';

const ProductosXId = () => {

    const {id} = useParams();
    
    return(
        <CarruselXId id={id}/>
    )

}

export default ProductosXId