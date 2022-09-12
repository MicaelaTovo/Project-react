import { Link } from 'react-router-dom';

const HomeContainer = () => {
    return (
<div>
    <p>
        <h1> Estoy en el Home de la pagina! </h1>
        <Link to = {"/productos"}>
        <button>Ir a Productos</button>
        </Link>
    </p>
</div>
    )
}

export default HomeContainer