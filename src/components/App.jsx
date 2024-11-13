// import { useState } from "react";
// import "./App.css";
// import SearchBar from "./SearchBar/SearchBar";
// import Loader from "./Loader/Loader";
// import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
// import fetchImages from "./services/api";
// import ImageGallery from "./ImageGallery/ImageGallery";
// import ErrorMessage from "./ErrorMessage/ErrorMessage";

// function App() {
//   const [loader, setLoader] = useState(false);
//   const [error, setError] = useState(false);
//   const [images, setImages] = useState([]);
//   const [totalPage, setTotalPages] = useState(0);

//   const handleImageSubmit = async (query) => {

//     try {
//       setImages([]);
//       setError(false);
//       setLoader(true);
//       const fetchedImages = await fetchImages(query);
//       setImages(fetchedImages);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoader(false);
//     }
//   };

//   return (
//     <>
//       <SearchBar onSubmit={handleImageSubmit} />
//       {loader && <Loader />}
//       {error && <ErrorMessage />}
//       {!loader && images.length > 0 && <ImageGallery images={images} />}
//       <LoadMoreBtn />
//     </>
//   );
// }
// export default App;

import { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import fetchImages from "./services/api";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

function App() {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);

  const handleImageSubmit = async (query) => {
    setImages([]);
    setError(false);
    setLoader(true);

    const result = await fetchImages(query);
    setLoader(false);

    if (result.success) {
      setImages(result.images);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleImageSubmit} />
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {!loader && images.length > 0 && <ImageGallery images={images} />}
      <LoadMoreBtn />
    </>
  );
}

export default App;
