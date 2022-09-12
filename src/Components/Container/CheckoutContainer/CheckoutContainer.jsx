import { Link } from 'react-router-dom';

const CheckoutContainer = () => {
    return (
        <div>
            <p>
                Estas en el checkout!
                <Link to={"/productos"}>
                    <button>Ir a Productos</button>
                </Link>
            </p>
        </div>
    )
}

export default CheckoutContainer;