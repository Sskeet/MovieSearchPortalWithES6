// import { movieStore } from "./store";
// import {
//     POPULATE_MOVIE_LIST,
//     POPULATE_FAV_MOVIE_LIST,
//     POPULATE_SEARCH_MOVIE_RESULTS,
//     ADD_MOVIE_TO_COLLECTION
// } from "./action";

// // function subscribeStore() {
// //     movieStore.subscribe(render);
// //   }

// // const render = () => {
// // const currState = movieStore.getState();
// //     switch (currState.action) {
// //         case POPULATE_MOVIE_LIST:
// //         createMovieList("topMoviesContainer", currState.movies);
// //         case POPULATE_FAV_MOVIE_LIST:
// //         //createMyCollectionOfMovies(currState.colTypes);
// //         case ADD_TO_COLLECTION:
// //         //createMovieDetail("movieDetail", currState.movieDetails);
// //         case DELETE_MOVIE_FROM_COLLECTION:
// //         //createSearchMoviesList("searchMovieResult", currState.searchMovieDetails);
// //         //jQuery("#searchMovieResult").removeClass("d-none");
// //         //jQuery("#searchMovieResult").addClass("view-search-details");
// //         case POPULATE_SEARCH_MOVIE_RESULTS:
// //         //createMoviesByCollection(currState.moviebyColList);
// //         case LOAD_MORE_MOVIE:
// //         //const colType = currState.delMovieData.url.split("/")[3];
// //         //getMyListOfMoviesByCollection(colType, showMoviesByCollection);
// //         default:
// //         return null;
// //     }
// //     console.log("exiting render");
// // }

// // export default subscribeStore;



// const subscribeMovie = movieStore.subscribe(render);

// // Listen for changes - step 3 - subscribe
// function render(){
//     const currState = movieStore.getState();
//     console.log(movieStore.getState());
//     switch(currState.curAction){
//         case POPULATE_MOVIE_LIST:
//         createMovieList(currState.topMovies);
//         break;
//         case POPULATE_SEARCH_MOVIE_RESULTS:
//         createMovieSearchPanel(currState.searchMovieDetails);
//         break;
//         case POPULATE_FAV_MOVIE_LIST:
//         createFavMovieCollection(currState.favMovies);
//         break;
//         case ADD_MOVIE_TO_COLLECTION:
//         createCollection(currState.favMovies);
//         break;
//         default:
//         return null;
//     }
// }


// export { subscribeMovie }
