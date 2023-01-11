import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import Card from "../card";
const Motherboards = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.get_motherboards();
    console.log(store);
  }, []);
  console.log(store.motherboards)
  return (
    <div className="row row-cols-5 text-light mx-5 my-1">
      {store.motherboards.map((motherboards, idx) => {
        return (
          <div className="col my-2" key={ idx }>
            <Card
              img={motherboards.img}
              title={motherboards.brand}
              text={motherboards.title}
            />
          </div>
        );
      })}
    </div>
  );
};
export { Motherboards };