import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { SingleCard } from "../component/singleCard";

const SingleProcessor = (idx) => {
    const { id } =  useParams();
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.get_single_processor(id);
      }, []);
      useEffect(() => {
        console.log(store.singleProcessor);
      }, [store.singleProcessor]);
    return(
        <SingleCard
            key = {idx}
            img = {store.singleProcessor.img} 
            title = {store.singleProcessor.brand}
            color = {store.singleProcessor.color}
            efficiency = {store.singleProcessor.efficiency}
            model = {store.singleProcessor.model}
            power = {store.singleProcessor.power}
            text = {store.singleProcessor.title} 
            price = {store.singleProcessor.price}      
        />

    )      
}
export { SingleProcessor }