import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import {getDoc, doc, getFirestore } from "firebase/firestore"



const ItemDetailContainer = ()=> {
    const [product, setItem] = useState([])
    const { id } = useParams ()


    useEffect(() => {
        fetch ('./product.json')
        .then ((res) => res.json())
        .then ((data)=>{
            setItem(data)
        })
            
    }, [] );

    useEffect(()=>{
        if (id) {
    const db = getFirestore();
    const itemRef = doc(db, 'product', id);
    getDoc(itemRef).then((snapshot)=>{
        console.log(snapshot. data())
    })
};
}, [id] );



    // const getItem = async (param) => {
    //     try {
    //         const response = await fetch('../product.json')
    //         const data = await response.json()
    //         let result = data.results.filter((p) => p.id === param)[0]
    //         setItem(result);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

                // json =>{
        //     const encontrado = json.find (product => product.id === parseInt(id))
        //     setItem (encontrado)
            // });


    //     getItem(id)
    // }, [id])
    // console.log(product)

    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )

        }
    

export default ItemDetailContainer;