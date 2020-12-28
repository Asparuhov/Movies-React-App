import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Movies.css";
import Movie from "../../components/Movie";
import { connect } from "react-redux";
const Movies = (props) => {
  let [search, setSearch] = useState("");
  let [movies, setMovies] = useState({});
  let [render, setRender] = useState(false);
  let [oldSearch, setOldSearch] = useState(null);
  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/auto-complete",
    params: { q: search },
    headers: {
      "x-rapidapi-key": "6ddacadffemsh3f7c41a84ac428dp104bf5jsnc0be7264a640",
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
    },
  };
 //search query
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
        setOldSearch(search);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  let printMovies = null;
  if (render && movies) {
    printMovies = movies.map((movie) =>
      movie.i ? (
        <Movie
          source={movie.i.imageUrl}
          key={movie.id}
          add={() => props.addFavourite(movie)}
        />
      ) : null
    );
  } else if (!movies) {
    printMovies = (
      <p style={{ fontWeight: "bolder" }}>
        No results found with input "{oldSearch}"
      </p>
    );
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
};

const mapStateToProps = (state) => {
  return {
    favourites: state.favourites,
  };
};
const toActions = (dispatch) => {
  return {
    addFavourite: (movie) => dispatch({ type: "ADDTOFAVOURITE", movie: movie }),
  };
};
export default connect(mapStateToProps, toActions)(Movies);
