import React from "react";
import bootstrap from "bootstrap";

function Card({img, title, text}) {

    return(
        <div className="card" style={{"width": "18rem", "color": "black"}}>
            <img src={img ? img : "https://via.placeholder.com/468"}
        className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{title ? title : "Filter titles"}</h5>
                <p className="card-text">{text ? text : "placeholder"}</p>
                <a href="../cart" className="btn btn-primary">Add to Cart</a>
            </div>
</div>
    )
    
}
export default Card