import React from "react";
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import ItemList from "./ItemList";


    const ItemListContainer = () => {

    const [product, setProducts] = useState([])
    const {id} = useParams();

    useEffect(() => {
        fetch ('./product.json')
        .then ((res) => res.json())
        .then ((data)=>{
            setProducts(data)
        })
    }, [id] )

            // if (categoria === undefined) {
            //     setProducts(json)
            // } else {
            //     const arrayCategoria = json.filter(product => product.categoria ===categoria);
            // //     setProducts(arrayCategoria);
            // }
            // });


    // const cargarProductos = async () => {
    //         try {
    //             const response = await fetch('product.json')
    //             const data = await response.json()
    //             setProducts(data);
    //         } catch (e) {
    //             console.log(e);
    //         }

    // //     }

    //     useEffect(() => {
    //         cargarProductos()
    //     }, [])

    //     console.log(product)
        

            return (<>
            <div>
                <h3 style={{ backgroundColor: 'lightgrey', color: 'black' }}> Tu cafetera ideal </h3>
            </div>
                <ItemList product={product}/>
                </>
                )
        };


        export default ItemListContainer;