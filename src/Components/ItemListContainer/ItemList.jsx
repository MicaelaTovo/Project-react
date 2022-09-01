import Item from "./Item";

const ItemList = ({product}) => {
    return (
    product.map((product,id) => (
        <Item id={id} thumbnail={product.thumbnail} title={product.title} price={product.price} />
    ))
    )
}

export default ItemList; 