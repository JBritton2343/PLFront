import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import Card from "../card";
const Mice = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.get_mice();
    console.log(store);
  }, []);
  console.log(store.mice)
  return (
    <div className="row row-cols-5 text-light mx-5 my-1 d-flex">
      {store.mice.map((item, idx) => {
        return (
          <div className="col my-2">
            <Card
              
              key={idx}
              img={item.img}
              title={item.brand}
              text={item.title}
              price={item.price}
              item={item}
            
            />
          </div>
        );
      })}
    </div>
  );
};
export { Mice };