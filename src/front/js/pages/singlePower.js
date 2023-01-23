import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { SingleCard } from "../component/singleCard";

const SinglePower = (idx) => {
    const { id } =  useParams();
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.get_single_power(id);
      }, []);
      useEffect(() => {
        console.log(store.singlePower);
      }, [store.singlePower]);
    return(
        <SingleCard
            key = {idx}
            img = {store.singlePower.img} 
            title = {store.singlePower.brand}
            color = {store.singlePower.color}
            efficiency = {store.singlePower.efficiency}
            model = {store.singlePower.model}
            power = {store.singlePower.power}
            text = {store.singlePower.title} 
            price = {store.singlePower.price}      
        />

    )      
}
export { SinglePower }