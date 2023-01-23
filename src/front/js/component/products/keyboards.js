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
      {store.keyboards.map((item, idx) => {
        return (
          <Link to={`/power/${item.id}`}>
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
export { Keyboards };