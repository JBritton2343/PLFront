import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import Card from "../card";
const Memory = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.get_ram();
    console.log(store);
  }, []);
  console.log(store.RAM)
  return (
    <div className="row row-cols-5 text-light mx-5 my-1">
      {store.RAM.map((RAM, idx) => {
        return (
          <div className="col my-2" key={ idx }>
            <Card
              img={RAM.img}
              title={RAM.brand}
              text={RAM.title}
            />
          </div>
        );
      })}
    </div>
  );
};
export { Memory };