import { createMovieList } from "../popularMovies/popularMovieView";
import { getTopMovie } from "../services/movieService";
var jQuery = require("jquery");


function loadMovieEventListner(){
  jQuery(document).on("click","#loadMovie",function(e){
    e.preventDefault();
    let pageNo = jQuery(this).attr("pageNumber");
    pageNo = parseInt(pageNo)+1;
    getTopMovie(pageNo,createMovieList);
    jQuery(this).attr("pageNumber",pageNo);
  });
}

export {loadMovieEventListner}
