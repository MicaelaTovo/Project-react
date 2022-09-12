import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ product }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="success">COMPRAR</Button>
            </Card.Body>
        </Card>
    );
}
export default ItemDetail;


// <>
// <h2 className="text-center">{product.title}</h2>
// <img src={product.thumbnail} alt="" />
// <h2>${product.price}</h2>
// <Button variant="success">COMPRAR</Button>{' '}

// </>


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