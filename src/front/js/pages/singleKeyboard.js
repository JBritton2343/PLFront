import React from "react";
import { useEffect, useContext } from 'react';
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { SingleCard } from "../component/singleCard";

const SingleKeyboard = (idx) => {
    const { id } =  useParams();
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.get_single_keyboard(id);
      }, []);
      useEffect(() => {
        console.log(store.singleKeyboard);
      }, [store.singleKeyboard]);
    return(
        <SingleCard
            key = {idx}
            img = {store.singleKeyboard.img} 
            title = {store.singleKeyboard.brand}
            color = {store.singleKeyboard.color}
            efficiency = {store.singleKeyboard.efficiency}
            model = {store.singleKeyboard.model}
            power = {store.singleKeyboard.power}
            text = {store.singleKeyboard.title} 
            price = {store.singleKeyboard.price}      
        />

    )      
}
export { SingleKeyboard }