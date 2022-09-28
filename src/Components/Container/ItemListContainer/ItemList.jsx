import Item from "./Item";

export const ItemList = ({ datos = [] }) => {
    const listaDeItems = datos.map((product) => (
        <Item key={product.id} product={product} />
    ));

    return (
        <div>
            <div className="row">
                {listaDeItems}
            </div>
        </div>
    )
}

export default ItemList;

