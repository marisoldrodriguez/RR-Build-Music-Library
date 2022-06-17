import './App.css';
import React, { useState, useEffect, Fragment, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './Components/Gallery';
import SearchBar from './Components/SearchBar';
import AlbumView from './Components/AlbumView';
import ArtistView from './Components/ArtistView';
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
    {message}
      <Router>
        <Routes>
          <Route path='/' element={
            <Fragment>
              <SearchBar handleSearch={handleSearch} />              
              {renderGallery()}
            </Fragment>
          } />
          <Route path='/album/:id' element={<AlbumView />} />
          <Route path='/artist/:id' element={<ArtistView />} />              
        </Routes>  
      </Router>      
    </div>
  );
}

export default App;
