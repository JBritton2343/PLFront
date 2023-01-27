import React from "react";
import animated_check from "/workspace/PLFront/src/front/img/animated_check.gif"
import { useCart } from "react-use-cart";

function payAccpeted(){
    const {cartTotal}=useCart()
    return(
        <>
        <div>
            <img src={animated_check} alt="check" className="mx-auto d-block"/>
        </div>
        <div >
            <p className="text-center fs-2 fw-bolder">
                Your payment for {cartTotal} has been accepted.
            </p>
        </div>
        </>
    )
}
export default payAccpeted;
