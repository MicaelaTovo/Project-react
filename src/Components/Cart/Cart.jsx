import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Context } from './CartContext';
import CartItem from './CartItem';
import Button from 'react-bootstrap/Button';


const Cart = () => {
    const { carrito, clear, total } = useContext(Context);
    const [precioTotal, setPrecioTotal] = useState (0);
    useEffect(()=>{
        setPrecioTotal(total());
    }, [carrito]);
    

    return (
        <>
        {carrito.length === 0 ? 
            <>
            <h4> El carrito de compra se encuentra vacío. </h4>
            <Link to = {"/productos"}>
            <Button variant="success">Ver productos</Button>
            </Link>
            </>
    : carrito.map((element) => (<CartItem product={element} />)
            )}

            <h4> Precio total de la compra: $ {precioTotal} </h4>
            <Button variant="danger" onClick={clear}> Vaciar Carrito</Button>
            <Button variant="success"> Finalizar Compra</Button>

        {/* </>
        ) : (<>
            <h4> El carrito de compra se encuentra vacío. </h4>
            <Link to = {"/productos"}>
            <Button variant="success">Ver productos</Button>
            </Link>
//             </> */}

        </>
    );
};

export default Cart; 