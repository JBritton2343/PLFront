import React from "react";
import bootstrap from "bootstrap";

function Card({img, title, text}) {

    return(
        <div class="card" style="width: 18rem;">
            <img src={img ? img : "https://via.placeholder.com/468"}
        className="card-img-top" />
            <div class="card-body">
                <h5 class="card-title">{title ? title : "Filter titles"}</h5>
                <p class="card-text">{text ? text : "placeholder"}</p>
                <a href="../cart" class="btn btn-primary">Add to Cart</a>
            </div>
</div>
    )
    
}
export default Card