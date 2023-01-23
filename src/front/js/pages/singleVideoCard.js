import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { SingleCard } from "../component/singleCard";


const SingleVideoCard = (idx) => {
    const { id } =  useParams();
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.get_single_videocard(id);
      }, []);
      useEffect(() => {
        console.log(store.singleVideoCard);
      }, [store.singleVideoCard]);
    return(
        <SingleCard
            key = {idx}
            img = {store.singleVideoCard.img} 
            title = {store.singleVideoCard.brand}
            color = {store.singleVideoCard.color}
            efficiency = {store.singleVideoCard.efficiency}
            model = {store.singleVideoCard.model}
            power = {store.singleVideoCard.power}
            text = {store.singleVideoCard.title} 
            price = {store.singleVideoCard.price}      
        />

    )      
}
export { SingleVideoCard }