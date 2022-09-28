import { createContext, useState } from "react";

export const Context = createContext();

const CartContext = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const addItem = (product, quantity) => {
        const prodAnt = isInCart(product.id)
        if(prodAnt) {
            prodAnt.quantity += quantity;
        } else { 
            product.quantity = quantity;
            carrito.push (product);
        }
        setCarrito([...carrito]);

    }

        // const prodAnt = isInCart(product.id)
        // if (prodAnt) {
        //     const prodAnt = carrito.filter((e) => e.id !== product.id)
        //     product.quantity = quantity + prodAnt.quantity;
        //     prodAnt.push(product)
        //     setCarrito(prodAnt)
        // } else {
        //     product.quantity = quantity;
        //     setCarrito([...carrito, product])
        // };
    

    const isInCart = (productId) => {
        return carrito.find((e) => e.id === productId);
    };

    const clear = () => {
        setCarrito([])
    };

    const removeProduct = (productId) => {
        const carritoFiltrado = carrito.filter((e)=> e.id !== productId)
        setCarrito(carritoFiltrado)
    };

    const total = () => {
        let tot = 0;
        carrito.forEach(product=>{
            tot = tot + product.price * product.quantity;
        });
        return tot;
    }


    return (
    <Context.Provider value={{ addItem, isInCart, clear, removeProduct, total, carrito }}>{children} </Context.Provider>
    )
};

export default CartContext;