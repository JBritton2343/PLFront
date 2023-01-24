import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import Card from "../card";
import { Link } from "react-router-dom";
const Videocards = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.get_videocards();
    console.log(store);
  }, []);
  console.log(store.videocards)
  return (
    <div className="row row-cols-5 text-light mx-5 my-1">
      {store.videocards.map((item, idx) => {
        return (
          <Link to={`/videocards/${item.id}`}>
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
export { Videocards };