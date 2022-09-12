import { useState, useEffect, useParams } from "react"
import ItemDetail from "./ItemDetail"



const ItemDetailContainer = ()=> {
    const [product, setItem] = useState([])
    const { id } = useParams ()

    const getItem = async () => {
        try {
            const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=cafeteras')
            const data = await response.json()
            data.filter(p => p.id === id)
            setItem(data.results);
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