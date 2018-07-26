import {movieStore } from "../reducer/store";
import {
	POPULATE_MOVIE_LIST,
	POPULATE_FAV_MOVIE_LIST,
	POPULATE_SEARCH_MOVIE_RESULTS
} from "../reducer/action";

//fetching data from server 1st step 
function getTopMovie(pageNo,callback){
	fetch("https://api.themoviedb.org/3/movie/popular?api_key=7520477c96fad381a44633a2b7596a01&language=en-US&page="+pageNo)
		.then((res) => {
			res.json().then((data)=>{
				movieStore.dispatch({type: POPULATE_MOVIE_LIST, data: data});
				// callback(data);
			})
				.catch((err) => {
					alert("something went wrong while calling get yop movie data");
				});
		});
}

function movieSearch(searchText,callback){
	fetch("https://api.themoviedb.org/3/search/movie?api_key=7520477c96fad381a44633a2b7596a01&language=en-US&query="+searchText+"&page=1&include_adult=false")
		.then((resp) =>{
			resp.json().then((data1)=>{
				movieStore.dispatch({type: POPULATE_SEARCH_MOVIE_RESULTS, data: data1});
				// callback(data1);
			});
		})
		.catch((err) => {
			alert("error in fetching movie data");
		});
}

function getFavMovieCollectionData(callback){
	fetch("http://localhost:3001/db")
		.then((res2) => {
			res2.json().then((data2) => {
				movieStore.dispatch({type: POPULATE_FAV_MOVIE_LIST, data: data2});
			});
		});
}


function addCollection(movieIdVar,callback){
	fetch(`https://api.themoviedb.org/3/movie/${movieIdVar}?api_key=7520477c96fad381a44633a2b7596a01&language=en-US`)
		.then((res3)=> {
			res3.json().then((data3) =>{
				callback(data3);
			});
		});
}

export {getTopMovie ,movieSearch, getFavMovieCollectionData , addCollection };

