import { createContext , useState} from "react";

export const Context = createContext();

const CartContext = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const addItem = (product, quantity) => {
        product.quantity = quantity;
        setCarrito([...carrito, product])
    };
    
    return <Context.Provider value ={{addItem, carrito}}>{children} </Context.Provider>;
};

export default CartContext;