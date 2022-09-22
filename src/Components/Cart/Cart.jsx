import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './CartContext';
import CartItem from './CartItem';


const Cart = ()=>{
    const {carrito, clear} = useContext (Context);

    return (
    <>
    {carrito.map((element)=>
    (<CartItem product={element}/>)
    )}
    <button onClick={clear}>Vaciar Carrito</button>
    </>
  );
}

export default Cart; 