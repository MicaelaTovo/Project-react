import Card from 'react-bootstrap/Card';
import ItemCount from '../../ItemCount/ItemCount';
import React, { useState , useContext }  from "react";
import { Context } from '../../Cart/CartContext';
import Item from '../ItemListContainer/Item';


const ItemDetail = ({ product }) => {

    const [carrito, setCarrito]= useState (0);

    const {addItem} = useContext (Context)
    
    const onAdd = (count) =>{
        addItem (product, count)
        setCarrito (carrito + count);
    };

    return (

<Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <ItemCount initial={1} stock={20} onAdd={onAdd} />
            </Card.Body>
        </Card>
    );
}
export default ItemDetail;
