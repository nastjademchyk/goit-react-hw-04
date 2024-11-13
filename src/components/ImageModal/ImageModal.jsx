import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ImageModal = () => {
  return (
    <div>
      <img
        src={image.urls.regular}
        alt={image.description || "Image from Unsplash"}
        className={s.img}
      />
    </div>
  );
};

export default ImageModal;
