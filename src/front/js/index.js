//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "react-use-cart";
import { Cases } from "./component/products/cases";
import { Keyboards } from "./component/products/keyboards";
import { Memory } from "./component/products/memory";
import { Mice } from "./component/products/mice";
import { Motherboards } from "./component/products/motherboards";
import { Power } from "./component/products/power";
import { Processors } from "./component/products/processors";
import { Storage } from "./component/products/storage";
import { Videocards } from "./component/products/videocards";


//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));

export const Index = () => {
    const { store, actions } = useContext(Context);
    

    return (
      <>
        
        <CartProvider>
          <Cases></Cases>
          <Keyboards></Keyboards>
          <Memory></Memory>
          <Mice></Mice>
          <Motherboards></Motherboards>
          <Power></Power>
          <Processors></Processors>
          <Storage></Storage>
          <Videocards></Videocards>
        </CartProvider>
        
      </>
    );
  };