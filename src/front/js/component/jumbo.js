import React from "react";
import computer from "/workspace/PLFront/src/front/img/components.jpeg";

const Jumbotron = () => {
    return (
      <div
        className="p-5 text-center bg-image rounded-3"
        style={{
          backgroundImage: "url('components.jpeg')",
          backgroundSize: "cover",
          height: "600px",
          width: "100%",
        }}
      ></div>
    );
  };
  export { Jumbotron };