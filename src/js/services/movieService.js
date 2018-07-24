var jQuery = require('jquery');
// import { createMovieList } from "../popularMovies/popularMovie";
// import { getTopMovie ,movieSearch , addCollection} from "../services/movieService";
// import { createCollection } from "../popupModal/popupModal";
// import { createMovieSearchPanel } from "../header/search/search";
// import { addCollectionToFavs ,deleteFavMovieCollectionData ,createFavCollection} from "../favMovieCollection/favMovieCollection";


//fetching data from server 1st step 
function getTopMovie(pageNo,callback){
	fetch("https://api.themoviedb.org/3/movie/popular?api_key=7520477c96fad381a44633a2b7596a01&language=en-US&page="+pageNo)
		.then((res) => {
			res.json().then((data)=>{
				callback(data);
			})
				.catch((err) => {
					console.log(err);
				});
		});
}

function movieSearch(searchText,callback){
	fetch("https://api.themoviedb.org/3/search/movie?api_key=7520477c96fad381a44633a2b7596a01&language=en-US&query="+searchText+"&page=1&include_adult=false")
		.then((resp) =>{
			resp.json().then((data1)=>{
				callback(data1);
			});
		})
		.catch((err) => {
			console.log("error in fetching movie data");
		});
}

function getFavMovieCollectionData(){
	fetch("http://localhost:3001/db")
		.then((res2) => {
			res2.json().then((data2) => {
				let createFavCollectionHtml = "";
				Object.keys(data2).map(function(objectKey, index) { 
					var value = data2[objectKey];
					jQuery.each( value, function( j , value1 ) { 
						console.log(value1);
						createFavCollectionHtml += `
                    <div class="col-2" id= ${value1.id}>
                        <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/${value1.poster_path}" alt="${value1.original_title}" class="img-thumbnail rounded">
                        <div class="buttom-panel text-center mt-1">
                            <button type="button" class="removeFavCollectionButton btn btn-success" movieGenre="${objectKey}" movieId="${value1.id}">Remove</button>
                        </div>
                    </div>`;
					});
				});
				jQuery("#" + "favMovies").html(createFavCollectionHtml);
			});
		});
}

function addCollection(movieIdVar,callback){
	console.log("this is data!!!!!", movieIdVar);
	fetch(`https://api.themoviedb.org/3/movie/${movieIdVar}?api_key=7520477c96fad381a44633a2b7596a01&language=en-US`)
		.then((res3)=> {
			res3.json().then((data3) =>{
				callback(data3);
			});
		});
}

export {getTopMovie ,movieSearch, getFavMovieCollectionData , addCollection}

