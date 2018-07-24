var jQuery = require("jquery");
import { addCollection ,getFavMovieCollectionData} from "../services/movieService";

function createFavCollection(data,callback){
	let collectionName= jQuery("#exampleFormControlSelect1").val();
	jQuery.ajax({
		type: "POST",
		data: JSON.stringify(data),
		dataType:"json",
		contentType : "application/json",
		url: `http://localhost:3001/${collectionName}`,
		success: function(data){
			alert("Data Added Successfully");
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
	addCollection(movieIdVar,callback);
}

export {addCollectionToFavs ,deleteFavMovieCollectionData ,createFavCollection};