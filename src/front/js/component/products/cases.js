import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import Card from "../card";
const Cases = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.get_cases();
    console.log(store);
  }, []);
  console.log(store.cases)
  return (
    <div className="row row-cols-5 text-light mx-5 my-1">
      {store.cases.map((cases, idx) => {
        return (
          <div className="col my-2" key={ idx }>
            <Card
              img={cases.img}
              title={cases.brand}
              text={cases.title}
            />
          </div>
        );
      })}
    </div>
  );
};
export { Cases };