import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function SingleCategory(){

    const [itemsToShow, setItemsToShow] = useState()
    let param = useParams()
    let paramId = Number(param.id)
    useEffect(()=>{
        fetch(`http://localhost:3001/products`)
        .then(resp => resp.json())
        .then(items => {

            items = items.filter((item)=>{
                console.log(item.categoryId, paramId)
                if(item.categoryId === paramId){
                    return item
                }
            })
            console.log(items)

            setItemsToShow(items)
            // @ts-ignore

        })
    },[])
    
  return(
    <section className="products-container main-wrapper">
        <ul className="products-container__list">
            {
                // @ts-ignore
                itemsToShow? itemsToShow.map((item)=>{
                   return(
                    <li key={item.id}>
                        <Link to={'/products/'+ item.id}>
                            <article className="product-item">
                                <img
                                src={item.image}
                                alt={item.description}
                                />
                                <h3>{item.title}</h3>
                            </article>
                        </Link>
                    </li>  
                    ) 
            }):<></>
            }
        </ul>
    </section>
)
}
export default SingleCategory