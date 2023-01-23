import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { SingleCard } from "../component/singleCard";

const SingleCase = (idx) => {
    const { id } =  useParams();
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.get_single_case(id);
      }, []);
      useEffect(() => {
        console.log(store.singleCase);
      }, [store.singleCase]);
    return(
        <SingleCard
            key = {idx}
            img = {store.singleCase.img} 
            title = {store.singleCase.brand}
            color = {store.singleCase.color}
            efficiency = {store.singleCase.efficiency}
            model = {store.singleCase.model}
            power = {store.singleCase.power}
            text = {store.singleCase.title} 
            price = {store.singleCase.price}      
        />

    )      
}
export { SingleCase }