import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { SingleCard } from "../component/singleCard";

const SingleMouse = (idx) => {
    const { id } =  useParams();
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.get_single_mouse(id);
      }, []);
      useEffect(() => {
        console.log(store.singleMouse);
      }, [store.singleMouse]);
    return(
        <SingleCard
            key = {idx}
            img = {store.singleMouse.img} 
            title = {store.singleMouse.brand}
            color = {store.singleMouse.color}
            efficiency = {store.singleMouse.efficiency}
            model = {store.singleMouse.model}
            power = {store.singleMouse.power}
            text = {store.singleMouse.title} 
            price = {store.singleMouse.price}      
        />

    )      
}
export { SingleMouse }