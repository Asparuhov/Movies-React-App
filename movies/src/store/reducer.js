const initialState = {
  favourites: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTOFAVOURITE":
      return {
        favourites: state.favourites.concat(action.movie),
      };
    default:
      return state;
  }
};

export default reducer;
