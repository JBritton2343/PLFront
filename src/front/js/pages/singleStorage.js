import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { SingleCard } from "../component/singleCard";

const SingleStorage = (idx) => {
    const { id } =  useParams();
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.get_single_storage(id);
      }, []);
      useEffect(() => {
        console.log(store.singleStorage);
      }, [store.singleStorage]);
    return(
        <SingleCard
            key = {idx}
            img = {store.singleStorage.img} 
            title = {store.singleStorage.brand}
            color = {store.singleStorage.color}
            efficiency = {store.singleStorage.efficiency}
            model = {store.singleStorage.model}
            power = {store.singleStorage.power}
            text = {store.singleStorage.title} 
            price = {store.singleStorage.price}      
        />

    )      
}
export { SingleStorage }