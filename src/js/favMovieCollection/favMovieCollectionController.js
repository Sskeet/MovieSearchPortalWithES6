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

	// jQuery(document).on("click",".btnNext",function(e){
	// 	e.preventDefault();
	// 	console.log(111);
	// 	scrollHorizontally('#topMoviesContainer', 'next', true);
	// 	// jQuery('#topMoviesContainer2').animate({scrollLeft: "+=50"}, 1000);
		
	// });
}

// function scrollHorizontally(containerId, moveTO, nextCall, serached){
	
// 	const sectionElem = jQuery(containerId);
// 	console.log(222,sectionElem);
// 	const currentScroll = parseInt(sectionElem.scrollLeft(), 10);
// 	console.log(222,currentScroll);
// 	const width = Math.floor(sectionElem.outerWidth());
// 	console.log(222,width); 
//     const { scrollWidth } = sectionElem.get(0);
//     if (moveTO === 'next') {
//         sectionElem.animate({ scrollLeft: currentScroll + 800 }, 800);
//     } else {
//         sectionElem.animate({ scrollLeft: currentScroll - 800 }, 800);
//     }
//     if (nextCall) {
//         if (scrollWidth - currentScroll === width) {
//             const pagenumber = parseInt(sectionElem.attr('pagenumber'), 10) + 1;
//             const userDataFlag = localStorage.getItem('loggedUserInfo');
//             if (serached) {
//                 const movieName = sectionElem.attr('moveName');
//                 getSearchedMovie(movieName, pagenumber, (data) => {
//                     createTopMoviesList('searchedMoviesContainer', data, userDataFlag);
//                 });
//             } else {
//                 getMovieRecords(pagenumber, (data) => {
//                     createTopMoviesList('topMoviesContainer', data, userDataFlag);
//                 });
//             }

//             sectionElem.attr('pagenumber', pagenumber);
//         }
//     }

// }

export {favMovieCollectionEventListner};