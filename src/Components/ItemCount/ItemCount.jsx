import React, { useState , useEffect }  from "react";
import Button from 'react-bootstrap/Button';

const ItemCount = ({stock, initial, onAdd}) =>{
    const [count, setCount] = useState(parseInt(initial));

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

    useEffect(()=> {
        setCount(parseInt(initial));
    }, [initial]);


    return (
        <div className="count text-center">
        <div className="text-black bg-white">
            <button className="btn-danger" onClick={restProduct}> - </button>
            <span className="">{count}</span>
            <button className="btn-info" onClick={addProduct}> + </button>    
        </div>
        <div >
        <Button variant="success" onClick={()=>onAdd(count)}> Comprar </Button>
        </div>        
        </div>
    );
}


// const ItemCount = ({stock, initial, onAdd}) =>{
//     const [count, setCount] = useState((initial));

//     const restProduct = () =>{
//         if (count > 1){
//             setCount(count - 1);
//         };
//     }
//     const addProduct = () =>{
//         if (count < stock){
//             setCount(count + 1);
//         };
//     }

//     const onAdd = (quantity) => {
//         (console.log(`Agrego ${quantity} productos al carrito`));
//     }

//     return (
//         <div>
//         <div className="text-white bg-black">
//             <button className="btn-danger" onClick={restProduct}> - </button>
//             <span className="">{count}</span>
//             <button className="btn-info" onClick={addProduct}> + </button>    
//         </div>
//         <div className= "text-white bg-black" >
//             <button onClick={()=>onAdd(count)}> Agregar al carrito</button>
//         </div>        
//         </div>
//     );
// }

export default ItemCount;