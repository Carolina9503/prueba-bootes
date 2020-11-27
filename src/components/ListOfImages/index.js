import React from "react";
import { ImgContainer } from "../ImgContainer";

export const ListOfImages = () => {

  return (
    <div>
      {[1, 2, 3].map((el) => {
        return <ImgContainer />;
      })}
    </div>
  );
};
