import './App.css';
import React, { useState, useRef } from 'react';
import Gallery from './Components/Gallery';
import SearchBar from './Components/SearchBar';
import { DataContext } from './Context/DataContext';
import { SearchContext } from './Context/SearchContext';


function App() {
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])
  let searchInput = useRef('')

  const API_URL = 'https://itunes.apple.com/search?term='

  const handleSearch = (e, term) => {
    e.preventDefault()
    // Fetch data
    const fetchData = async () => {
      document.title = `${term} Music`
      const response = await fetch(API_URL  + term)
      const resData = await response.json()
      console.log(resData)
      if (resData.results.length > 0) {
        setData(resData.results)
      } else {
        setMessage('Not Found')
      }
    }
    fetchData()
  }

  return (
    <div className="App">
      <SearchContext.Provider value={{
        term: searchInput,
        handleSearch: handleSearch
      }}>       
          <SearchBar  />
      </SearchContext.Provider>  
      {message}
      <DataContext.Provider value={data} >
        <Gallery  />
      </DataContext.Provider>
      
    </div>
  );
}

export default App;
