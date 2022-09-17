import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"



const ItemDetailContainer = ()=> {
    const [product, setItem] = useState([])
    const { id } = useParams ()

    const getItem = async (param) => {
        try {
            const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=cafeteras')
            const data = await response.json()
            let result = data.results.filter((p) => p.id === param)[0]
            setItem(result);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getItem(id)
    }, [id])
    console.log(product)

    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )

        }
    

export default ItemDetailContainer;