const initialState = {
  favourites: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTOFAVOURITE":
      if (state.favourites.includes(action.movie)) {
        alert('The movie is already added to favourites!')
      }
      else {
        return {
          favourites: state.favourites.concat(action.movie),
        };
      }
    default:
      return state;
  }
};

export default reducer;
