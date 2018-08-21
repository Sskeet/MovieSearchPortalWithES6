import { createMovieList , movieList } from "../popularMovies/popularMovieView";
import { getTopMovie , getTopMovie1} from "../services/movieService";
var jQuery = require("jquery");


function loadMovieEventListner(){
	jQuery(document).on("click","#loadMovie",function(e){
		e.preventDefault();
		let pageNo = jQuery(this).attr("pageNumber");
		pageNo = parseInt(pageNo)+1;
		getTopMovie(pageNo,createMovieList);
		jQuery(this).attr("pageNumber",pageNo);
	});

	jQuery(document).on("click",".btnNext",function(e){
		e.preventDefault();
		let pageNo = jQuery(this).attr("pageNumber");
		pageNo = parseInt(pageNo)+1;
		getTopMovie1(pageNo,movieList);
		jQuery(this).attr("pageNumber",pageNo);
	});
}

export {loadMovieEventListner};
