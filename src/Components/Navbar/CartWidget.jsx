import { useContext } from "react";
import { Context } from "../Cart/CartContext";

const CartWidget = () => {
    const { carrito } = useContext(Context);
    
    return (
        <div>
            <h5> {carrito.length} </h5>
            <i class="ri-shopping-cart-line"></i>
        </div>
    )
};

export default CartWidget;