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
  const [totalPage, setTotalPages] = useState(0);

  const handleImageSubmit = async (query) => {
    if (typeof query !== "string") {
      console.error(
        "Expected query to be a string but received:",
        typeof query
      );
      return;
    }

    try {
      setImages([]);
      setError(false);
      setLoader(true);
      const fetchedImages = await fetchImages(query);
      setImages(fetchedImages);
    } catch (error) {
      setError(true);
      console.error("Error fetching images:", error);
    } finally {
      setLoader(false);
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
