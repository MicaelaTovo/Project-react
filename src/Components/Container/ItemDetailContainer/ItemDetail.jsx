import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../../ItemCount/ItemCount';
import React, { useState }  from "react";
import { Link } from 'react-router-dom';


const ItemDetail = ({ product }) => {
    const [carrito, setCarrito]= useState (false);
    const onAdd = (valor) =>{
        setCarrito (true);
    }

    return (

<Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Link to = "/checkout"></Link>
                <ItemCount initial={1} stock={20} onAdd={onAdd} />
            </Card.Body>
        </Card>
    );
}
export default ItemDetail;
