var jQuery = require('jquery');
// import { createMovieList } from "../popularMovies/popularMovie";
// import { getTopMovie ,movieSearch , addCollection} from "../services/movieService";
// import { createCollection } from "../popupModal/popupModal";
// import { createMovieSearchPanel } from "../header/search/search";
// import { addCollectionToFavs ,deleteFavMovieCollectionData ,createFavCollection} from "../favMovieCollection/favMovieCollection";

function createMovieList(res){
	let showTopMoviesHtml = "";
	res.results.map(movieRecod => {
		showTopMoviesHtml += `
      <div class="col-2 movieContainer" id= ${movieRecod.id}>
          <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/${ movieRecod.poster_path}" alt="${movieRecod.original_title}" class="img-thumbnail rounded">
          <div class="buttom-panel text-center mt-1">
            <button type="button" class="collectionButton btn btn-success" data-toggle="modal" data-target="#fullHeightModalRight" movieId="${movieRecod.id}" >Add this</button>
          </div>
      </div>
      `;
	});
	jQuery("#" + "topMoviesContainer").append(showTopMoviesHtml);
}

export {createMovieList}