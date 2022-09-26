import { useContext } from 'react';
import { Context } from './CartContext';
import Button from 'react-bootstrap/Button';

const CartItem = ({ product }) => {
    const { removeProduct } = useContext(Context)

    const handleBorrar = () =>{
        removeProduct(product.id);
    };

    return (
        <>
            <h5>{product.title} - Cantidad: {product.quantity} - Precio: $ {product.price} </h5>
            <Button variant="danger" onClick={handleBorrar}> Eliminar </Button>
        </>
    )
}

export default CartItem;