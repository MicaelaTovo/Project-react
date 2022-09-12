import React from "react";
// import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import ItemList from "./ItemList";


    const ItemListContainer = ({greeting}) => {
    
    // const onAdd = (quantity) => {
    //     (console.log(`Agrego ${quantity} productos al carrito`));
    //     }
    const [product, setProducts] = useState([])
    const cargarProductos = async () => {
            try {
                const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=cafeteras')
                const data = await response.json()
                setProducts(data.results);
            } catch (e) {
                console.log(e);
            }

        }

        useEffect(() => {
            cargarProductos()
        }, [])

        console.log(product)
        

            return (<>
            <div>
                <p style={{ backgroundColor: 'lightgrey', color: 'black' }}>
                    {greeting}
                </p>
                {/* <ItemCount stock={20} initial={0} onAdd={onAdd} /> */}
            </div>
                <ItemList product={product}/>
                </>
                )
        };


        export default ItemListContainer;