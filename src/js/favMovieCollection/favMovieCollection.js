var jQuery = require('jquery');
import { addCollection ,getFavMovieCollectionData} from "../services/movieService";
// import { createMovieList } from "../popularMovies/popularMovie";
// import { getTopMovie ,movieSearch , addCollection} from "../services/movieService";
// import { createCollection } from "../popupModal/popupModal";
// import { createMovieSearchPanel } from "../header/search/search";

function createFavCollection(data,callback){
	let collectionName= jQuery("#exampleFormControlSelect1").val();
	jQuery.ajax({
		type: "POST",
		data: JSON.stringify(data),
		dataType:"json",
		contentType : "application/json",
		url: `http://localhost:3001/${collectionName}`,
		success: function(data){
			console.log("Data Added Successfully");
			getFavMovieCollectionData();
		},
	});
}

function deleteFavMovieCollectionData(favMovieIdVar,movieGenre) {
	jQuery.ajax({
		url: `http://localhost:3001/${movieGenre}/${favMovieIdVar}`,
		type: "DELETE",
		success: function(data) {
			getFavMovieCollectionData(data);
		}
	});   
}

function addCollectionToFavs(movieIdVar,callback){
	console.log("this is collection" + movieIdVar);
	addCollection(movieIdVar,callback);
}

export {addCollectionToFavs ,deleteFavMovieCollectionData ,createFavCollection}