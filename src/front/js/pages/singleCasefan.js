import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { SingleCard } from "../component/singleCard";

const SingleCasefan = (idx) => {
    const { id } =  useParams();
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.get_single_casefan(id);
      }, []);
      useEffect(() => {
        console.log(store.singleCasefan);
      }, [store.singleCasefan]);
    return(
        <SingleCard
            key = {idx}
            img = {store.singleCasefan.img} 
            title = {store.singleCasefan.brand}
            color = {store.singleCasefan.color}
            efficiency = {store.singleCasefan.efficiency}
            model = {store.singleCasefan.model}
            power = {store.singleCasefan.power}
            text = {store.singleCasefan.title} 
            price = {store.singleCasefan.price}      
        />

    )      
}
export { SingleCasefan }