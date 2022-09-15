import { Link } from 'react-router-dom';

const CheckoutContainer = () => {
    return (
        <div>
            <p>
                <h1>Estas en el checkout! </h1>
                <Link to={"/productos"}>
                    <button>Ir a Productos</button>
                </Link>
            </p>
        </div>
    )
}

export default CheckoutContainer;