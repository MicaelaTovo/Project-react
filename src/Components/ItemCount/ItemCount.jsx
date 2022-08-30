import React, { useState }  from "react";

const ItemCount = ({stock, initial, onAdd}) =>{
    const [count, setCount] = useState((initial));

    const restProduct = () =>{
        if (count > 1){
            setCount(count - 1);
        };
    }
    const addProduct = () =>{
        if (count < stock){
            setCount(count + 1);
        };
    }

    return (
        <div>
        <div className="flex item-center justify-center p-5 m-5 text-white bg-black">
            <button className="p-5 btn-danger" onClick={restProduct}> - </button>
            <span className="p-5">{count}</span>
            <button className="p-5 btn-info" onClick={addProduct}> + </button>    
        </div>
        <div className= "flex item-center justify-center p-3 m-5 text-white bg-black" >
            <button onClick={()=>onAdd(count)}> Agregar al carrito</button>
        </div>        
        </div>
    );
}

export default ItemCount;