import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import Card from "../card";
const Keyboards = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.get_keyboards();
    console.log(store);
  }, []);
  console.log(store.keyboards)
  return (
    <div className="row row-cols-5 text-light mx-5 my-1">
      {store.keyboards.map((keyboards, idx) => {
        return (
          <div className="col my-2" key={ idx }>
            <Card
              img={keyboards.img}
              title={keyboards.brand}
              text={keyboards.title}
            />
          </div>
        );
      })}
    </div>
  );
};
export { Keyboards };