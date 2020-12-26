import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Movies.css";
import Movie from "../../components/Movie";
export default function Movies() {
  let [search, setSearch] = useState("");
  let [movies, setMovies] = useState({});
  let [render, setRender] = useState(false);
  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/auto-complete",
    params: { q: search },
    headers: {
      "x-rapidapi-key": "6ddacadffemsh3f7c41a84ac428dp104bf5jsnc0be7264a640",
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
    },
  };
  const onSearch = (event) => {
    setSearch(event.target.value);
  };
  const retrieveData = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setMovies(response.data.d);
        console.log(movies);
        setRender(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  let printMovies = null;
  if (render) {
    printMovies = movies.map((movie) => (
      <Movie source={movie.i.imageUrl} key={movie.id} />
    ));
  }
  return (
    <>
      <div class="search">
        <input onChange={onSearch} placeholder="ex. Home alone" />
        <button onClick={retrieveData}>Search</button>
      </div>
      <div className="Movies">{printMovies}</div>
    </>
  );
}
