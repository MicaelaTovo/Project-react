import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ product, id}) => {
    return (
        <Card key={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Price>{product.price} </Card.Price>
                <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    );
}

export default Item;






