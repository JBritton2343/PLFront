import React, { useEffect, useContext, useState } from "react";
import { Context } from "../../store/appContext";
import Card from "../card";
import { Link } from "react-router-dom";
const CPUFans = () => {
  
  const { store, actions } = useContext(Context);
  // const [cart, setCart] = useState([]);
  
  useEffect(() => {
    actions.get_cpu_fans();
    console.log(store.cases);
  }, []);
  
  

  return (
    
    <div className="row row-cols-5 text-light mx-5 my-1">
      {store.cpufans.map((item, idx) => {
        return (
          <Link to={`/cpufans/${item.id}`}>
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
          </Link>
        );
      })}
    </div>
  );
};
export { CPUFans };