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
    <div className="row row-cols-5 text-light mx-5 my-1">
      {store.mice.map((mice, idx) => {
        return (
          <div className="col my-2" key={ idx }>
            <Card
              img={mice.img}
              title={mice.brand}
              text={mice.title}
            />
          </div>
        );
      })}
    </div>
  );
};
export { Mice };