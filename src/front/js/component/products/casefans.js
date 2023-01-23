import React, { useEffect, useContext, useState } from "react";
import { Context } from "../../store/appContext";
import Card from "../card";

const Casefans = () => {
  
  const { store, actions } = useContext(Context);
  // const [cart, setCart] = useState([]);
  
  useEffect(() => {
    actions.get_case_fans();
    console.log(store.cases);
  }, []);
  
  

  return (
    
    <div className="row row-cols-5 text-light mx-5 my-1">
      {store.casefans.map((item, idx) => {
        return (
            <Card
              key={idx}
              img={item.img}
              title={item.brand}
              text={item.title}
              price={item.price}
              item={item}
            />
        );
      })}
    </div>
  );
};
export { Casefans };