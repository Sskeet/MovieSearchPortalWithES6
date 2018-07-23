import {jQuery} from "./variables";
import {getTopMovie ,movieSearch ,getFavMovieCollectionData ,addCollection} from "./getMovieService";
import {createMovieSearchPanel , createMovieList ,createCollection ,createFavCollection} from "./createMovieList";

function eventListner(){
    jQuery(document).on("click",'#loadMovie',function(e){
      let pageNo = jQuery(this).attr("pageNumber");
      pageNo = parseInt(pageNo)+1;
      getTopMovie(pageNo,createMovieList);
      jQuery(this).attr("pageNumber",pageNo);
    })
  
    jQuery(document).on("click",'#searchMovies',function(e){
      e.preventDefault();
      let moviSear = jQuery('#searchText').val();
      movieSearch(moviSear,createMovieSearchPanel);
    })
  
    jQuery(document).on("click",".collectionButton",function(e){
      e.preventDefault();
      let movieIdVar = jQuery(this).attr("movieId");
      console.log("movieID"+ movieIdVar);
      addCollection(movieIdVar,createCollection);
    })
  
    jQuery(document).on("click",".insideCollectionButton",function(e){
      e.preventDefault();
      let movieIdVar = jQuery(this).attr("movieId");
      addCollectionToFavs(movieIdVar,createFavCollection);
    })
  
    jQuery(document).on("click",".removeFavCollectionButton",function(e){
      e.preventDefault();
      let favMovieIdVar = jQuery(this).attr("movieId");
      let movieGenre = jQuery(this).attr("moviegenre");
      let favMovieCatergoyVar = jQuery(this).attr("value");
      deleteFavMovieCollectionData(favMovieIdVar,movieGenre);
    })
  }

  function addCollectionToFavs(movieIdVar,callback){
    console.log("this is collection" + movieIdVar);
    addCollection(movieIdVar,callback);
  }

  function deleteFavMovieCollectionData(favMovieIdVar,movieGenre) {
    jQuery.ajax({
        url: `http://localhost:3001/${movieGenre}/${favMovieIdVar}`,
        type: 'DELETE',
        success: function(data) {
          getFavMovieCollectionData(data);
        }
    })   
}

export {eventListner ,addCollectionToFavs ,deleteFavMovieCollectionData};