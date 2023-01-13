import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import logo from "../../img/pliftlogo.jpg";
import { CartProvider } from "react-use-cart";
import Cart from "../component/cart";
import { Cases } from "../component/products/cases";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <CartProvider>
        <Cases></Cases>
      </CartProvider>
    </>
  );
};
