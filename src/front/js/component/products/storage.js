import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import Card from "../card";
const Storage = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.get_storage();
    console.log(store);
  }, []);
  console.log(store.storage)
  return (
    <div className="row row-cols-5 text-light mx-5 my-1">
      {store.storage.map((storage, idx) => {
        return (
          <div className="col my-2" key={ idx }>
            <Card
              img={storage.img}
              title={storage.brand}
              text={storage.title}
            />
          </div>
        );
      })}
    </div>
  );
};
export { Storage };