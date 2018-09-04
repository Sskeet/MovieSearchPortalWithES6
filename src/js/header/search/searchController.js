var jQuery = require("jquery");
import { movieSearch } from "../../services/movieService";
import { createMovieSearchPanel } from "./searchView";


function searchEventListner(){
	jQuery(document).on("click","#searchMovies",function(e){
		e.preventDefault();
		let moviSear = jQuery("#searchText").val();
		movieSearch(moviSear,createMovieSearchPanel);
	});
}



export {searchEventListner};
