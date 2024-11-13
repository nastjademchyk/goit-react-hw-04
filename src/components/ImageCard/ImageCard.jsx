import React from "react";
import s from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.description || "Image from Unsplash"}
        className={s.img}
      />
    </div>
  );
};

export default ImageCard;
