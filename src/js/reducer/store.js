import { createStore } from 'redux';
import {
    POPULATE_MOVIE_LIST,
    POPULATE_FAV_MOVIE_LIST,
    ADD_MOVIE_TO_COLLECTION,
    DELETE_MOVIE_FROM_COLLECTION,
    POPULATE_SEARCH_MOVIE_RESULTS,
    LOAD_MORE_MOVIE,
} from "./action";
import { createMovieList } from "../popularMovies/popularMovie";
import { createMovieSearchPanel } from "../header/search/search";
import { createFavMovieCollection } from "../favMovieCollection/favMovieCollection";
import { createCollection } from "../popupModal/popupModal";


//reducer - step2 - state n action 
const initialState={
    topMovies:[],
    favMovies:[],
    searchMovieDetails: [],
    delMovieData: {},
    curAction:""
}

const moviePortalReducer = (state =initialState,action) => {
switch(action.type)
    {    
        case POPULATE_MOVIE_LIST:
            return {
                ...state,
                topMovies:action.data,
                curAction:POPULATE_MOVIE_LIST
                }
        case POPULATE_FAV_MOVIE_LIST:
            return {
                ...state,
                topMovies:action.data,
                curAction:action.type
                }
        case ADD_MOVIE_TO_COLLECTION:
            return {
                ...state,
                topMovies:action.data,
                curAction:action.type
            }
        case DELETE_MOVIE_FROM_COLLECTION:
        return {
            ...state,
            topMovies:action.data,
            curAction:action.type
        }
        case POPULATE_SEARCH_MOVIE_RESULTS:
        return {
            ...state,
            topMovies:action.data,
            curAction:action.type
        }
        case LOAD_MORE_MOVIE:
        return {
            ...state,
            topMovies:action.data,
            curAction:action.type
        }
        default:
            return state;
    }
}

//store - step1 - reducer n state
const movieStore = createStore(moviePortalReducer, {
   
});

movieStore.subscribe(render);

// Listen for changes - step 3 - subscribe
function render(){
    const currState = movieStore.getState();
    console.log(movieStore.getState());
    switch(currState.curAction){
        case POPULATE_MOVIE_LIST:
        createMovieList(currState.topMovies);
        break;
        case POPULATE_SEARCH_MOVIE_RESULTS:
        createMovieSearchPanel(currState.topMovies);
        break;
        case POPULATE_FAV_MOVIE_LIST:
        createFavMovieCollection(currState.topMovies);
        break;
        case ADD_MOVIE_TO_COLLECTION:
        createCollection(currState.topMovies);
        break;
        default:
        return null;
    }
}


// movieStore.subscribe(() => {
//     console.log(movieStore.getState());
//     const currState = movieStore.getState();
//     switch(currState.action){
//         case POPULATE_MOVIE_LIST:
//         createMovieList(currState.topMovies);
//         case POPULATE_SEARCH_MOVIE_RESULTS:
//         createMovieSearchPanel(currState.topMovies);
//     }
// });

  

export { movieStore }