import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Movies.css";
import Movie from "../../components/Movie";
import { connect } from "react-redux";
const Movies = (props) => {
  let [search, setSearch] = useState("");
  let [movies, setMovies] = useState({});
  let [render, setRender] = useState(false);
  let [popularMovies, setPopularMovies] = useState(false);
  let [renderPopular, setRenderPopular] = useState(false);
  let [oldSearch, setOldSearch] = useState(null);
  const popular = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-most-popular-movies",
    params: { homeCountry: "US", purchaseCountry: "US", currentCountry: "US" },
    headers: {
      "x-rapidapi-key": "6ddacadffemsh3f7c41a84ac428dp104bf5jsnc0be7264a640",
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(popular)
      .then(function (response) {
        const arr = response.data.slice(0, 20);
        setPopularMovies(arr);
        setRenderPopular(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  const onSearch = (event) => {
    setSearch(event.target.value);
  };
  const retrieveData = () => {
    axios
      .request(Search)
      .then(function (response) {
        console.log(response.data);
        setMovies(response.data.d);
        console.log(movies);
        setRender(true);
        setRenderPopular(false);
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
  }
  let param;
  if (renderPopular) {
    param = popularMovies.map((movie) => {
      let [_, _1, title] = movie.split("/");
      return title;
    });
    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/title/auto-complete",
      params: { q: param },
      headers: {
        "x-rapidapi-key":
          "6ddacadffemsh3f7c41a84ac428dp104bf5jsnc0be7264a640",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    console.log(param);
  }

  if (!movies) {
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
