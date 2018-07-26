var jQuery = require("jquery");
import { createMovieList } from "../popularMovies/popularMovie";
import { getTopMovie ,movieSearch , addCollection} from "../services/movieService";
import { createMovieSearchPanel } from "../header/search/search";
import { deleteFavMovieCollectionData ,createFavCollection} from "../favMovieCollection/favMovieCollection";
import { ADD_MOVIE_TO_COLLECTION  } from "../reducer/action";
import { movieStore } from "../reducer/store";



export function eventListner(){
	jQuery(document).on("click","#loadMovie",function(e){
		e.preventDefault();
		let pageNo = jQuery(this).attr("pageNumber");
		pageNo = parseInt(pageNo)+1;
		getTopMovie(pageNo,createMovieList);
		jQuery(this).attr("pageNumber",pageNo);
	});
  
	jQuery(document).on("click","#searchMovies",function(e){
		e.preventDefault();
		let moviSear = jQuery("#searchText").val();
		movieSearch(moviSear,createMovieSearchPanel);
	});
  
	jQuery(document).on("click",".collectionButton",function(e){
		e.preventDefault();
		let movieIdVar = jQuery(this).attr("movieId");
		addCollection(movieIdVar,createCollectionCallback);
	});
  
	const createCollectionCallback = (data) =>{
		movieStore.dispatch({type: ADD_MOVIE_TO_COLLECTION, data: data});
	};
	
	jQuery(document).on("click",".insideCollectionButton",function(e){
		e.preventDefault();
		// let movieIdVar = jQuery(this).attr("movieId");
		//addCollection(movieIdVar,createFavCollectionCallback);
		const movieDetails = movieStore.getState().topMovies;
		createFavCollection(movieDetails);
	});
	// const createFavCollectionCallback = (data) =>{
	// 	movieStore.dispatch({type: MOVIE_ADDED_TO_DB, data: data});
	// }

  
	jQuery(document).on("click",".removeFavCollectionButton",function(e){
		e.preventDefault();
		let favMovieIdVar = jQuery(this).attr("movieId");
		let movieGenre = jQuery(this).attr("moviegenre");
		// let favMovieCatergoyVar = jQuery(this).attr("value");
		deleteFavMovieCollectionData(favMovieIdVar,movieGenre);
	});
}
