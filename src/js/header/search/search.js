var jQuery = require('jQuery');
// import { addCollection ,getFavMovieCollectionData ,movieSearch ,getTopMovie} from "./services/getMovieService";
// import { createCollection } from "./popupModal/popupModal";

// import { createMovieList } from "../popularMovies/popularMovie";
// import { getTopMovie ,movieSearch , addCollection} from "../services/movieService";
// import { createCollection } from "../popupModal/popupModal";
// import { createMovieSearchPanel } from "../header/search/search";
// import { addCollectionToFavs ,deleteFavMovieCollectionData ,createFavCollection} from "../favMovieCollection/favMovieCollection";


function createMovieSearchPanel(resp){
	let showMovieSearchPanelHtml= "";
	resp.results.map(searchRecd => {
		showMovieSearchPanelHtml += `
        <div class="col-2 movieContainer" id= ${searchRecd.id}>
          <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/${ searchRecd.poster_path}" alt="${searchRecd.original_title}" class="img-thumbnail rounded">
          <button type="button" class="collectionButton btn btn-success" data-toggle="modal" data-target="#fullHeightModalRight" movieId="${searchRecd.id}">Add to Favs</button>
        </div>
    `; });
	jQuery("#" + "searchSection").html("");
	jQuery("#" + "searchSection").append(showMovieSearchPanelHtml);
}

export {createMovieSearchPanel}


