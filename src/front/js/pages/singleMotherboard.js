import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { SingleCard } from "../component/singleCard";

const SingleMotherboard = (idx) => {
    const { id } =  useParams();
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.get_single_motherboard(id);
      }, []);
      useEffect(() => {
        console.log(store.singleMotherboard);
      }, [store.singleMotherboard]);
    return(
        <SingleCard
            key = {idx}
            img = {store.singleMotherboard.img} 
            title = {store.singleMotherboard.brand}
            color = {store.singleMotherboard.color}
            efficiency = {store.singleMotherboard.efficiency}
            model = {store.singleMotherboard.model}
            power = {store.singleMotherboard.power}
            text = {store.singleMotherboard.title} 
            price = {store.singleMotherboard.price}      
        />

    )      
}
export { SingleMotherboard }