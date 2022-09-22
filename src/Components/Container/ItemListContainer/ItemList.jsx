import Item from "./Item";

const ItemList = ({product}) => {
    return (
    product.map((product) => (
        <Item product={product} key={product.id}/>
    ))
    )
}

export default ItemList; 

