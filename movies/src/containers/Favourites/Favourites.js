import React from "react";
import { connect } from "react-redux";
import "./Favourites.css";
import Movie from "../../components/Movie";
const Favourites = (props) => {
  return (
    <div className="Favourites">
      {props.favourites.length > 0 ? (
        props.favourites.map((movie) => {
          return <img src={movie.i.imageUrl} alt="Error loading" />;
        })
      ) : (
        <p>Start adding favourites in the Search for a movie tab!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favourites: state.favourites,
  };
};

export default connect(mapStateToProps)(Favourites);
