// import { movieStore } from "./store";
// import {
//     POPULATE_MOVIE_LIST,
//     POPULATE_FAV_MOVIE_LIST,
//     ADD_TO_COLLECTION,
//     DELETE_MOVIE_FROM_COLLECTION,
//     POPULATE_SEARCH_MOVIE_RESULTS,
//     LOAD_MORE_MOVIE
// } from "./action";

// function subscribeStore() {
//     movieStore.subscribe(render);
//   }

// const render = () => {
// const currState = movieStore.getState();
//     switch (currState.action) {
//         case POPULATE_MOVIE_LIST:
//         createMovieList("topMoviesContainer", currState.movies);
//         case POPULATE_FAV_MOVIE_LIST:
//         //createMyCollectionOfMovies(currState.colTypes);
//         case ADD_TO_COLLECTION:
//         //createMovieDetail("movieDetail", currState.movieDetails);
//         case DELETE_MOVIE_FROM_COLLECTION:
//         //createSearchMoviesList("searchMovieResult", currState.searchMovieDetails);
//         //jQuery("#searchMovieResult").removeClass("d-none");
//         //jQuery("#searchMovieResult").addClass("view-search-details");
//         case POPULATE_SEARCH_MOVIE_RESULTS:
//         //createMoviesByCollection(currState.moviebyColList);
//         case LOAD_MORE_MOVIE:
//         //const colType = currState.delMovieData.url.split("/")[3];
//         //getMyListOfMoviesByCollection(colType, showMoviesByCollection);
//         default:
//         return null;
//     }
//     console.log("exiting render");
// }

// export default subscribeStore;