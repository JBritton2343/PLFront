import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { SingleCard } from "../component/singleCard";

const SingleCPUFan = (idx) => {
    const { id } =  useParams();
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.get_single_cpu_fan(id);
      }, []);
      useEffect(() => {
        console.log(store.singleCPUFan);
      }, [store.singleCPUFan]);
    return(
        <SingleCard
            key = {idx}
            img = {store.singleCPUFan.img} 
            title = {store.singleCPUFan.brand}
            color = {store.singleCPUFan.color}
            efficiency = {store.singleCPUFan.efficiency}
            model = {store.singleCPUFan.model}
            power = {store.singleCPUFan.power}
            text = {store.singleCPUFan.title} 
            price = {store.singleCPUFan.price}      
        />

    )      
}
export { SingleCPUFan }