import { useContext } from 'react';
import { Context } from './CartContext';

const CartItem = ({ product }) => {
    const { removeProduct } = useContext(Context)

    const handleBorrar = () =>{
        removeProduct(product.id);
    };

    return (
        <>
            <h5>{product.title} - {product.quantity}</h5>
            <button onClick={handleBorrar}> Borrar </button>
        </>
    )
}

export default CartItem;