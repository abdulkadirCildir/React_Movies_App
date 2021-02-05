import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

import './App.css';
import {CardList} from './components/CardList';
import { SearchBox } from './components/SearchBox';

const apiKey = "e81eda1a3d406ad7fdbef13f4538a679"; //temporary
const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w1280";

export const MovieContext  = createContext();

function Movie() {

  const [movieData, setMovieData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("Star Wars")

  useEffect(() => {
      axios.get(
          baseUrl, {params: {
              api_key: apiKey,
              page: 1,
              query: searchKeyword
            }
      })
      .then((res)=> setMovieData(res?.data?.results))
      .catch()
      .finally()
  }, [searchKeyword]);

  return (
    <div className="App">
      <MovieContext.Provider value={{ movieData, baseImageUrl, setSearchKeyword }}>
          <SearchBox />
          <CardList />
      </MovieContext.Provider>
    </div>
  );
}

export default Movie;
