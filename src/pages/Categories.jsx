import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Categories(){
    const [categoriesToShow, setCategoriesToShow] = useState([])

    useEffect(()=>{
      fetch('http://localhost:3001/categories')
      .then(resp => resp.json())
      .then(categories => {
          setCategoriesToShow(categories)
      })
    },[])
  
    return(
        <>
        <section className="categories-container main-wrapper">
            <ul className="categories-container__list">
                {
                    categoriesToShow ? categoriesToShow.map((category)=>{
                        return(
                        <li key={category.id}>
                            <Link to={`/categories/${category.id}`}>{category.name}</Link>
                        </li>
                        )
                    }):null
                }
            </ul>
        </section>
        </>
    )
}
export default Categories