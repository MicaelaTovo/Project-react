import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Context } from '../../Cart/CartContext';


const Item = ({ product}) => {
  const value = useContext (Context);
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Link to= {`/detalle/${product.id}`}>
        <Button variant="success">COMPRAR</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;

