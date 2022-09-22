import { createContext , useState} from "react";

export const Context = createContext();

const CartContext = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const addItem = (product, quantity) => {
        const prodAnt = isInCart(product.id)
        if (prodAnt){
            const arreglo = carrito.filter((e)=> e.id !== product.id)
            product.quantity = quantity + prodAnt.quantity;
            arreglo.push(product)
            setCarrito(arreglo)
        } else {
        product.quantity = quantity;
        setCarrito([...carrito, product])
    };
}
    

const isInCart = (productId) => {
    return carrito.find((e)=> e.id === productId);
};

const clear =()=>{
    setCarrito({})
};

const removePorduct = (productId) =>{
    setCarrito(carrito.filter((e) => e.id !== productId))
}


    return <Context.Provider value ={{addItem, carrito}}>{children} </Context.Provider>;
};

export default CartContext;