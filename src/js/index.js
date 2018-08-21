require("../scss/custom.scss");
import "popper.js";
import "bootstrap";
var jQuery = require("jQuery");
import { getFavMovieCollectionData,getTopMovie,getTopMovie1} from "../js/services/movieService";
import { createMovieList , movieList } from "../js/popularMovies/popularMovieView";
import { loadMovieEventListner } from "../js/popularMovies/popularMovieController";
import { searchEventListner } from "../js/header/search/searchController";
import { favMovieCollectionEventListner } from "../js/favMovieCollection/favMovieCollectionController";

jQuery(document).ready(function(){
	getTopMovie(1,createMovieList);
	getTopMovie1(1,movieList);
	getFavMovieCollectionData();
	loadMovieEventListner();
	searchEventListner();
	favMovieCollectionEventListner();

	// $('.btnNext').click(function(){
	// 	console.log(111);
	// 	$('.nav-tabs > .active').next('li').find('a').trigger('click');
	//   });
	  
	// 	$('.btnPrevious').click(function(){
	// 	$('.nav-tabs > .active').prev('li').find('a').trigger('click');
	//   });
	
});




