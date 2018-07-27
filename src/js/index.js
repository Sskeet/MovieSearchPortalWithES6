require("../scss/custom.scss");
import "popper.js";
import "bootstrap";
var jQuery = require("jQuery");
import { getFavMovieCollectionData,getTopMovie} from "../js/services/movieService";
import { createMovieList } from "../js/popularMovies/popularMovieView";
import { eventListner } from "../js/eventListners/eventListner";
import { loadMovieEventListner } from "../js/popularMovies/popularMovieController";
import { searchEventListner } from "../js/header/search/searchController";
import { favMovieCollectionEventListner } from "../js/favMovieCollection/favMovieCollectionController";

jQuery(document).ready(function(){
	getTopMovie(1,createMovieList);
	getFavMovieCollectionData();
	loadMovieEventListner();
	searchEventListner();
	favMovieCollectionEventListner();
});


