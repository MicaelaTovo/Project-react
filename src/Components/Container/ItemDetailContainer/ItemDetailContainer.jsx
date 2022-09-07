import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = ()=> {
    const [product, setItem] = useState([])
    const getItem = async () => {
        try {
            const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Iphone')
            const data = await response.json()
            setItem(data.results[1]);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getItem()
    }, [])
    console.log(product)

    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )

        }
    

export default ItemDetailContainer;