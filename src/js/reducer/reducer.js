// // const movieportal = (state =[],action) => {
// //     switch(action.type){
// //         case 'POPULATE_MOVIE_LIST':
// //             return [
// //                 ...state,
// //                 {
// //                     id:action.id,
// //                     text:action.text,
// //                     completed:false
// //                 }
// //             ];
// //         case 'POPULATE_FAV_MOVIE_LIST':
// //         return [
// //             ...state,
// //             {
// //                 id:action.id,
// //                 text:action.text,
// //                 completed:false
// //             }
// //         ];
// //         default:
// //             return state;
// //     }
// // }


// const initialState={
//     topMovies:[],
//     favMovies:[],
//     searchMovieDetails: [],
//     curAction:""
// }

// const moviePortalReducer = (state =initialState,action) => {
//     switch(action.type)
//         {    
//             case POPULATE_MOVIE_LIST:
//                 // const popMovies = [...state.topMovies, ...action.POPULATE_MOVIE_LIST];
//                 // return{
//                 //     ...state,
//                 //     topMovies: popMovies
//                 // }
//                 return {
//                     ...state,
//                     topMovies:action.data,
//                     curAction:POPULATE_MOVIE_LIST
//                     }
//             case POPULATE_FAV_MOVIE_LIST:
//                 // const popFavMovies = [...state.favMovies, ...action.POPULATE_FAV_MOVIE_LIST];
//                 // state.favMovies = popFavMovies;
//                 // return popFavMovies;
//                 return {
//                     ...state,
//                     favMovies:action.data,
//                     curAction:action.type
//                     }
//             case ADD_MOVIE_TO_COLLECTION:
//                 // const addMoviToColl = [...state.favMovies, ...action.ADD_MOVIE_TO_COLLECTION];
//                 // state.favMovies = addMoviToColl;
//                 // return addMoviToColl;
//                 return {
//                     ...state,
//                     favMovies:action.data,
//                     curAction:action.type
//                 }
//             case POPULATE_SEARCH_MOVIE_RESULTS:
//                 // const popSeaMovRes = [...state.searchMovieDetails, ...action.POPULATE_SEARCH_MOVIE_RESULTS];
//                 // state.searchMovieDetails = popSeaMovRes;
//                 // return popSeaMovRes;
//                 return {
//                     ...state,
//                     searchMovieDetails:action.data,
//                     curAction:action.type
//                 }
//             default:
//                 return null;
//         }
//     }
    