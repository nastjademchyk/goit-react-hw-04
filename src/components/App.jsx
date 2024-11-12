import { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";

function App() {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [totalPage, setTotalPages] = useState(0);
  return (
    <>
      <SearchBar />
      <Loader />
      <LoadMoreBtn />
    </>
  );
}
export default App;
