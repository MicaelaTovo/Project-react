import Button from 'react-bootstrap/Button';

const ItemDetail = ({ product }) => {
    return (
        <>
            <h2 className="text-center">{product.title}</h2>
            <img src={product.thumbnail} alt="" />
            <h2>${product.price}</h2>
            <Button variant="success">COMPRAR</Button>{' '}

        </>
    );
}


export default ItemDetail;




// const ItemDetail = ({product}) => {
//     return(
//         <>
//         <h1 className="text-center">{product.title}</h1>
//         <img src={product.thumbnail} alt="" />
//         <h2>${product.price}</h2>
//         <button id="btn-secondary"> COMPRAR</button>

//         </>
//     )
// }

// export default ItemDetail;