import React from "react";
import { useCart } from "react-use-cart"
import { CartProvider } from "react-use-cart";

const Card=(props) => {
const { addItem } = useCart();
    return(
        <CartProvider>
        <div className="card" style={{"width": "14rem", "color": "black"}}>
            <img src={props.img}
        className="card-img-top" style={{"width": "75px", "height": "75px"}}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <p className="card-price">{props.price}</p>
                <button className="btn btn-primary" onClick={()=>addItem(props.item)}>Add to Cart</button> 
            </div>
            
</div>
</CartProvider>
    )
    
}
export default Card