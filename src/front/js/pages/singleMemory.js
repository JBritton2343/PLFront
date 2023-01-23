import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { SingleCard } from "../component/singleCard";

const SingleMemory = (idx) => {
    const { id } =  useParams();
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.get_single_memory(id);
      }, []);
      useEffect(() => {
        console.log(store.singleMemory);
      }, [store.singleMemory]);
    return(
        <SingleCard
            key = {idx}
            img = {store.singleMemory.img} 
            title = {store.singleMemory.brand}
            color = {store.singleMemory.color}
            efficiency = {store.singleMemory.efficiency}
            model = {store.singleMemory.model}
            power = {store.singleMemory.power}
            text = {store.singleMemory.title} 
            price = {store.singleMemory.price}      
        />

    )      
}
export { SingleMemory }