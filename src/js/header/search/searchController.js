var jQuery = require("jquery");
import { getTopMovie ,movieSearch , addCollection ,deleteFavMovieCollectionData, createFavCollection} from "../../services/movieService";
import { createMovieSearchPanel } from "./searchView";


function searchEventListner(){
    jQuery(document).on("click","#searchMovies",function(e){
        e.preventDefault();
        let moviSear = jQuery("#searchText").val();
        movieSearch(moviSear,createMovieSearchPanel);
    });
}

export {searchEventListner}
