import "./App.css";
import React, { useState, useEffect, Suspense } from "react";
import Gallery from "./Components/Gallery";
import SearchBar from "./Components/SearchBar";
import { createResource as fetchData } from "./helper";
import Spinner from "./Components/Spinner";

function App() {
  let [searchTerm, setSearchTerm] = useState("");
  let [message, setMessage] = useState("Search for Music!");
  let [data, setData] = useState(null);

  const API_URL = "https://itunes.apple.com/search?term=";

  useEffect(() => {
    if (searchTerm) {
      setData(fetchData(searchTerm));
    }
  }, [searchTerm]);

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearchTerm(term);
  };

  const renderGallery = () => {
    if (data) {
      return (
        <Suspense fallback={<Spinner />}>
          <Gallery data={data} />
        </Suspense>
      );
    }
  };

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      {renderGallery()}
    </div>
  );
}

export default App;
