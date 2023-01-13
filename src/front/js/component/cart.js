import React, { useEffect, useContext, useState } from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem, cartTotal } =
    useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <section className="py-4 container">
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
    </section>
  );
};
export default Cart;
