import { createContext, useState } from "react";

export const Context = createContext();

const CartContext = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const addItem = (product, quantity) => {
        const prodAnt = isInCart(product.id)
        if (prodAnt) {
            const prodAnt = carrito.filter((e) => e.id !== product.id)
            product.quantity = quantity + prodAnt.quantity;
            prodAnt.push(product)
            setCarrito(prodAnt)
        } else {
            product.quantity = quantity;
            setCarrito([...carrito, product])
        };
    }

    const isInCart = (productId) => {
        return carrito.find((e) => e.id === productId);
    };

    const clear = () => {
        setCarrito([])
    };

    const removeProduct = (productId) => {
        setCarrito(carrito.filter((e) => e.id !== productId))
    };

    const total = () => {
        let tot = 0;
        carrito.forEach(product=>{
            tot = tot + product.price * product.quantity;
        });
        return tot;
    }


    return <Context.Provider value={{ addItem, carrito, clear, removeProduct, total }}>{children} </Context.Provider>;
};

export default CartContext;