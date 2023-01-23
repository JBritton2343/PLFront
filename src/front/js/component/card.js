import React from "react";
import { useCart } from "react-use-cart"
import { CartProvider } from "react-use-cart";

const Card=(props) => {
const { addItem } = useCart();
    return(
        <CartProvider>
        <div className="container mt-3 mb-2 pe-3">
        <div className="row d-flex">
        <div className="col-sm-12 col-lg-6 flex-fill">
        <div className="card" style={{"width": "20rem", "height": "25rem", "color": "black"}}>
            <img src={props.img}
        className="card-img-top" style={{"width": "125px", "height": "125px", "aspectRation": "9/2", "alignItems": "center", "margin": "auto"}}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text justify-content-center">{props.text}</p>
                <p className="card-price position-absolute" style={{"fontWeight": "bolder", "fontSize": "lg", "color": "green", "bottom": "0", "right": "0", "paddingRight": ".5rem"}}>${props.price}</p>
                <button className="btn btn-primary position-absolute mb-2" style={{"bottom": "0", "left": "0"}} onClick={()=>addItem(props.item)}>Add to Cart</button> 
            </div>
            
</div>
</div>
</div>
</div>
</CartProvider>
    )
    
}
export default Card