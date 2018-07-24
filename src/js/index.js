require("../scss/custom.scss");
import "popper.js";
import "bootstrap";
var jQuery = require("jQuery");
import { getFavMovieCollectionData,getTopMovie} from "../js/services/movieService";
import { createMovieList } from "../js/popularMovies/popularMovie";
import { eventListner } from "../js/eventListners/eventListner";

jQuery(document).ready(function(){
	eventListner();
	getTopMovie(1,createMovieList);
	getFavMovieCollectionData();
});



