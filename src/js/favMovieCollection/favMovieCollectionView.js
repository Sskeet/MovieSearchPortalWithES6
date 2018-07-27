var jQuery = require("jquery");
import { addCollection } from "../services/movieService";


function createFavMovieCollection(res2){
	let createFavCollectionHtml = "";
	Object.keys(res2).map(function(objectKey) { 
		var value = res2[objectKey];
		jQuery.each( value, function( j , value1 ) { 
			// console.log(value1);
			createFavCollectionHtml += `
		<div class="col-2" id= ${value1.id}>
			<div>${objectKey}</div>
			<img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/${value1.poster_path}" alt="${value1.original_title}" class="img-thumbnail rounded">
			<div class="buttom-panel text-center mt-1">
				<button type="button" class="removeFavCollectionButton btn btn-success" movieGenre="${objectKey}" movieId="${value1.id}">Remove</button>
			</div>
		</div>`;
		});
	});
	jQuery("#" + "favMovies").html(createFavCollectionHtml);
}

// function createFavCollection(data,callback){
// 	let collectionName= jQuery("#exampleFormControlSelect1").val();
// 	jQuery.ajax({
// 		type: "POST",
// 		data: JSON.stringify(data),
// 		dataType:"json",
// 		contentType : "application/json",
// 		url: `http://localhost:3001/${collectionName}`,
// 		success: function(){
// 			//movieStore.dispatch({type: MOVIE_ADDED_TO_DB, data: data});
// 			alert("Data Added Successfully");
// 			getFavMovieCollectionData();
// 		},
// 	});
// }

// function deleteFavMovieCollectionData(favMovieIdVar,movieGenre) {
// 	jQuery.ajax({
// 		url: `http://localhost:3001/${movieGenre}/${favMovieIdVar}`,
// 		type: "DELETE",
// 		success: function(data) {
// 			getFavMovieCollectionData(data);
// 		}
// 	});   
// }

function addCollectionToFavs(movieIdVar,callback){
	addCollection(movieIdVar,callback);
}

export {addCollectionToFavs ,createFavMovieCollection};