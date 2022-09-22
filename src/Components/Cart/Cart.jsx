import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './CartContext';
import CartItem from './CartItem';


const Cart = ()=>{
    const {carrito} = useContext (Context);
    console.log(carrito);
    return carrito.map(e=><CartItem product={e}/>);
}

export default Cart; 