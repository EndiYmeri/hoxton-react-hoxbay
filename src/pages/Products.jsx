import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Products(){
    
  const [itemsToShow, setItemsToShow] = useState()

  useEffect(()=>{
    fetch('http://localhost:3001/products')
    .then(resp => resp.json())
    .then(items => {
        setItemsToShow(items)
    })
  },[])

    return(
            <section className="products-container main-wrapper">
                <ul className="products-container__list">
                    {
                        // @ts-ignore
                        itemsToShow ? itemsToShow.map((item)=>{
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
export default Products