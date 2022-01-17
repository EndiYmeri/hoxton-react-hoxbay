import { Link } from "react-router-dom"

function Basket({basket, setBasket}){
    function removeItem(itemToBeRemovedId){
        let newItems = [...basket]
        newItems = newItems.filter((item)=>{
            if(item.id !== itemToBeRemovedId){
                return item
            }
        })
        setBasket(newItems)
    }

    function setAmount(item, value ){
        item.count = value
        setBasket([...basket])
    }

    function itemTotalPrice (item){
        let itemTotalPrice = item.price * item.count

        return Number(itemTotalPrice.toFixed(2))
    }

    function totalPrice(){
        let totalPrice = 0
        for(const item of basket){
            totalPrice = totalPrice + itemTotalPrice(item)
        }
        return totalPrice.toFixed(2)
    }
    return(
        <section className="basket-container">
        <h2>Your Basket</h2>
        <ul>
            {
                basket? basket.map((item,i)=>{
                   let  itemCount = Number(item.count)
                   return (
                        <li key={i}>
                            <article className="basket-container__item">
                            <img
                                src={item.image}
                                alt={item.title}
                                width="90"
                            />
                            <Link to={'/products/'+ item.id}><p>{item.title}</p></Link>
                            <p>
                                Qty:
                                <select
                                    value={itemCount}
                                     onChange={(e)=>{
                                         Number(e.target.value) > 0 ? setAmount(item, e.target.value)
                                         :  removeItem(item.id)
                                    }}>
                                    <option value="0">0</option>
                                    {   
                                        itemCount > 1? 
                                        <>
                                            <option 
                                                value={Number(itemCount) - 1}>
                                                {Number(itemCount) - 1}
                                            </option>
                                            <option 
                                                value={Number(itemCount)}>
                                                {Number(itemCount)}
                                            </option>
                                            <option 
                                                value={Number(itemCount) + 1}>
                                                {Number(itemCount) + 1}
                                            </option>
                                        </> 
                                        :
                                        <>
                                            <option 
                                                value={Number(itemCount)}>
                                                {Number(itemCount)}
                                            </option>
                                            <option 
                                                value={Number(itemCount) + 1}>
                                                {Number(itemCount) + 1}
                                            </option>
                                        </>
                                    }
                                </select>
                            </p>
                            <p>Item total: £{itemTotalPrice(item)}</p>
                            </article>
                        </li>
                   )
                
                }):<h1>No Items</h1>
            }
        </ul>
      
        <h3>Your total: £{totalPrice()}</h3>
      </section>
    )
}
export default Basket