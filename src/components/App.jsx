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
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleImageSubmit = async (query) => {
    setImages([]);
    setError(false);
    setLoader(true);
    setPage(1);
    const result = await fetchImages(query, 1);
    setLoader(false);

    if (result.success) {
      setImages(result.images);
      setQuery(query);
    } else {
      setError(true);
    }
  };

  const loadMoreImages = async () => {
    if (!query) {
      console.error("Query is empty on load more.");
      return;
    }

    setLoader(true);
    const result = await fetchImages(query, page + 1);
    setLoader(false);
    if (result.success) {
      setImages((prevImages) => [...prevImages, ...result.images]);
      setPage((prevPage) => prevPage + 1);
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
      {!loader && images.length > 0 && <LoadMoreBtn onClick={loadMoreImages} />}
    </>
  );
}

export default App;
