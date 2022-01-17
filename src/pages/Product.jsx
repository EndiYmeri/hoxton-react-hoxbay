import { useEffect, useState } from "react"
import { Link, Navigate, useParams } from "react-router-dom"



function Product({basket, setBasket}){
    const [product, setProduct] = useState({
      image:"",
      title:"",
      description:"",
      price:"",
      id:"",
      categoryId:"",
      count : 1
      })
    let param = useParams()
    
    useEffect(()=>{
      fetch(`http://localhost:3001/products/${param.id}`)
        .then(resp => resp.json())
        .then(item => {setProduct(item)})
    },[])

    let newItems

    function addToBasket(){
      let indexNeeded = basket.findIndex((element => element.id === product.id))
      if(indexNeeded >= 0){
        basket[indexNeeded].count = basket[indexNeeded].count + 1
        setBasket([...basket])
      }
      else{
        setBasket([...basket, {...product, count: 1}])
      } 

    }

    return (
          <section className="product-detail main-wrapper">
              <img
              src={product.image}
              alt={product.title}
              />
              <div className="product-detail__side" style={{borderColor: "yellow"}}>
                <h3></h3>
                <h2>{product.title}</h2>
                <p>
                  {product.description}
                </p>
                <p>£{product.price}</p>
                {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
                <Link 
                  to={"/basket"}>
                  <button
                    onClick={()=>{
                      addToBasket();
                    }}>
                    Add to basket
                  </button>
                </Link>
              </div>
          </section>
)
}
export default Product