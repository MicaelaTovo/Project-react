const Item = ({ product}) => {
    return <div>
        <h1>{product.title}</h1>
        <img src={product.thumbnail} alt="" />
        {product.price}
        <button id="buttonComprar"> COMPRAR</button>
            </div>
}

export default Item;






