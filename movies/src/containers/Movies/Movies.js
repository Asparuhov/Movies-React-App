import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Movies.css";
export default function Movies() {
  let [search, setSearch] = useState("");
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
    setTimeout(() => {
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }, 300);
  };
  return (
    <div>
      <div class="search">
        <input onChange={onSearch} placeholder="ex. Home alone" />
        <button onClick={retrieveData}>Search</button>
          </div>
          <div>
              
          </div>
    </div>
  );
}
