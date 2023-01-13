import React from "react";
import computer from "/workspace/PLFront/src/front/img/refurbished-hardware-components.webp";

const Jumbotron = () => {
    return (
      <div
        className="p-5 text-center bg-image rounded-3"
        style={{
          backgroundImage: {computer},
          backgroundSize: "cover",
          height: "300px",
          width: "100%",
        }}
      ></div>
    );
  };
  export { Jumbotron };