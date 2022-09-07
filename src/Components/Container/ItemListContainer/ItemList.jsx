import Item from "./Item";

const ItemList = ({product}) => {
    return (
    product.map((product) => (
        <Item product={product} key={product.id}/>
    ))
    )
}

export default ItemList; 






// const ListCardComponent = ({productos, setCarrito, carrito}) => {
//     return (
//         <>
//             {productos.map((producto, index) => {
//                 return (
//                     <div key={index}>
//                         <h3>{producto.title}</h3>
//                         <img src={producto.thumbnail} alt="" />
//                         <div>
//                             <button onClick={() => {
//                                 setCarrito([...carrito, producto]);
//                             }}>
//                                 Agregar al carrito
//                             </button>
//                         </div>
//                     </div>
//                 )
//             })}
//         </>
//     )
// }
