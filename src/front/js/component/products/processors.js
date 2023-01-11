import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import Card from "../card";
const Processors = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.get_processors();
    console.log(store);
  }, []);
  console.log(store.processors)
  return (
    <div className="row row-cols-5 text-light mx-5 my-1">
      {store.processors.map((processors, idx) => {
        return (
          <div className="col my-2" key={ idx }>
            <Card
              img={processors.img}
              title={processors.brand}
              text={processors.title}
            />
          </div>
        );
      })}
    </div>
  );
};
export { Processors };