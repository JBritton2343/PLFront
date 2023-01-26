import React, { useEffect, useContext, useState } from "react";
import { useCart } from "react-use-cart";
import "../../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcAmex, faCcVisa, faCcMastercard, faCcDiscover } from "@fortawesome/free-brands-svg-icons";
const Cart = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem, cartTotal } =
    useCart();
  const [card, setCard]=useState("");

  if (isEmpty) return <p>Your cart is empty</p>;
  function numCheck(){
    if (card[0]==3){
    return <FontAwesomeIcon icon={faCcAmex} />      
    }
    else if (card[0]==4){
    return <FontAwesomeIcon icon={faCcVisa}/> 
    }
    else if (card[0]==5){
    return <FontAwesomeIcon icon={faCcMastercard} />
    }
   else if (card[0]==6){
    return <FontAwesomeIcon icon={faCcDiscover} />
    }
  }

  return (
    
    <section className="payment-form">
      <div className="container py-4 ">
      <div className="row justify-content-center">
        <div className="col-12">
        
          <h1>Cart ({totalUniqueItems})</h1>
          <table className="table table-light table-hover m-0 ">
            <tbody>
              {items.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <img src={item.img} style={{ height: "6rem" }} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>Quantity {item.quantity} </td>
                    <td>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-info ms-2 "
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                     
                      <button
                        className="btn btn-danger ms-2" 
                        onClick={() => removeItem(item.id)}>
                        Remove Item
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
         
        </div>
        <div className="col-auto ms-auto">
          <h2>Total price: {Math.round(cartTotal)}</h2>
        </div>
      </div>
      <div className="card-details">
            <h3 className="title">Credit Card Details</h3>
            <div className="row">
              <div className="form-group col-sm-7">
                <label for="card-holder">Card Holder</label>
                <input id="card-holder" type="text" className="form-control" placeholder="Card Holder" aria-label="Card Holder" aria-describedby="basic-addon1" />
              </div>
              <div className="form-group col-sm-5">
                <label for="">Expiration Date</label>
                <div className="input-group expiration-date">
                  <input type="text" className="form-control col-6" placeholder="MM" aria-label="MM" aria-describedby="basic-addon1"/>
                  <span className="date-separator fontWeight-bolder ps-3 h4"> / </span>
                  <input type="text" className="form-control col-6" placeholder="YY" aria-label="YY" aria-describedby="basic-addon1"/>
                </div>
              </div>
              <div className="form-group col-sm-8">
                <label for="card-number">Card Number</label>
                <div className="d-flex">
                <div className="card-type h2 me-2 mb-3">{numCheck()}</div>
                <input id="card-number" type="text" className="form-control h-25" placeholder="Card Number" aria-label="Card Holder" aria-describedby="basic-addon1" onChange={(e)=> setCard(e.target.value) }/>
                </div>
              </div>
              <div className="form-group col-sm-4">
                <label for="cvc">CVC</label>
                <input id="cvc" type="text" className="form-control" placeholder="CVC" aria-label="Card Holder" aria-describedby="basic-addon1"/>
              </div>
              <div className="form-group col-sm-12">
                <button type="button" className="btn btn-primary btn-block">Proceed</button>
              </div>
            </div>
          </div> 
          </div>    
    </section>
    
  );
};
export default Cart;
