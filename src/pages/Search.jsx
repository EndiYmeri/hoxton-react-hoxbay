import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Search({searchTerm, itemsToShow, setItemsToShow}){

    let newItemsToShow =[]
    
    if(itemsToShow){
        newItemsToShow = itemsToShow.filter((item)=> {
            if(item.title === searchTerm || item.description === searchTerm){
                return item
            }
        })
        setItemsToShow(newItemsToShow)        
    } else{
        console.log('fuck off')    
    }

    

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
export default Search