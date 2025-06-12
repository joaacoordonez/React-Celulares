import { useParams } from "react-router-dom";
import CarruselXMarca from '../../components/CarruselXMarca/';

const ProductosXMarca = () => {

    const {marcaId} = useParams();
    
    return(
        <CarruselXMarca marcaId={marcaId}/>
    )

}

export default ProductosXMarca