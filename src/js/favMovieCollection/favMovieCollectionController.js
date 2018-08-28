var jQuery = require("jquery");
import { addCollection ,deleteFavMovieCollectionData, createFavCollection} from "../services/movieService";
import { ADD_MOVIE_TO_COLLECTION  } from "../reducer/action";
import { movieStore } from "../reducer/store";


function favMovieCollectionEventListner(){
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
		const movieDetails = movieStore.getState().favMovies;
		createFavCollection(movieDetails);
	});


	jQuery(document).on("click",".removeFavCollectionButton",function(e){
		e.preventDefault();
		let favMovieIdVar = jQuery(this).attr("movieId");
		let movieGenre = jQuery(this).attr("moviegenre");
		deleteFavMovieCollectionData(favMovieIdVar,movieGenre);
	});

	jQuery(document).on("click",".btnNext",function(e){
		e.preventDefault();
		console.log(111);	
		// jQuery( "#topMoviesContainer2" ).scrollLeft( 300 );
		// jQuery('#topMoviesContainer2').animate({"left": "+=50px"}, "slow");
		jQuery('#topMoviesContainer2').animate({scrollLeft: "+=50"}, 1000);
		// $( ".block" ).animate({ "left": "+=50px" }, "slow" );
	});
}

export {favMovieCollectionEventListner};