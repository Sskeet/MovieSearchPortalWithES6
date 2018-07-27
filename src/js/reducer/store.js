import { createStore } from 'redux';
import {
    POPULATE_MOVIE_LIST,
    POPULATE_FAV_MOVIE_LIST,
    ADD_MOVIE_TO_COLLECTION,
    POPULATE_SEARCH_MOVIE_RESULTS,
} from "./action";
import { createMovieList } from "../popularMovies/popularMovieView";
import { createMovieSearchPanel } from "../header/search/searchView";
import { createFavMovieCollection } from "../favMovieCollection/favMovieCollectionView";
import { createCollection } from "../popupModal/popupModalView";


//reducer - step2 - state n action 
const initialState={
    topMovies:[],
    favMovies:[],
    searchMovieDetails: [],
    curAction:""
}


const moviePortalReducer = (state =initialState,action) => {
switch(action.type)
    {    
        case POPULATE_MOVIE_LIST:
            // const popMovies = [...state.topMovies, ...action.POPULATE_MOVIE_LIST];
            // state.topMovies = popMovies;
            // return popMovies;
            return {
                ...state,
                topMovies:action.data,
                curAction:POPULATE_MOVIE_LIST
                }
        case POPULATE_FAV_MOVIE_LIST:
            // const popFavMovies = [...state.favMovies, ...action.POPULATE_FAV_MOVIE_LIST];
            // state.favMovies = popFavMovies;
            // return popFavMovies;
            return {
                ...state,
                favMovies:action.data,
                curAction:action.type
                }
        case ADD_MOVIE_TO_COLLECTION:
            // const addMoviToColl = [...state.favMovies, ...action.ADD_MOVIE_TO_COLLECTION];
            // state.favMovies = addMoviToColl;
            // return addMoviToColl;
            return {
                ...state,
                favMovies:action.data,
                curAction:action.type
            }
        case POPULATE_SEARCH_MOVIE_RESULTS:
            // const popSeaMovRes = [...state.searchMovieDetails, ...action.POPULATE_SEARCH_MOVIE_RESULTS];
            // state.searchMovieDetails = popSeaMovRes;
            // return popSeaMovRes;
            return {
                ...state,
                searchMovieDetails:action.data,
                curAction:action.type
            }
        // case LOAD_MORE_MOVIE:
        //     return {
        //         ...state,
        //         topMovies:action.data,
        //         curAction:action.type
        //     }
        default:
            return null;
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
        createMovieSearchPanel(currState.searchMovieDetails);
        break;
        case POPULATE_FAV_MOVIE_LIST:
        createFavMovieCollection(currState.favMovies);
        break;
        case ADD_MOVIE_TO_COLLECTION:
        createCollection(currState.favMovies);
        break;
        default:
        return null;
    }
}



  

export { movieStore }