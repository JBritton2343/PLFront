import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import Card from "../card";
const Power = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.get_power();
    console.log(store);
  }, []);
  console.log(store.power)
  return (
    <div className="row row-cols-5 text-light mx-5 my-1">
      {store.power.map((power, idx) => {
        return (
          <div className="col my-2" key={ idx }>
            <Card
              img={power.img}
              title={power.brand}
              text={power.title}
            />
          </div>
        );
      })}
    </div>
  );
};
export { Power };