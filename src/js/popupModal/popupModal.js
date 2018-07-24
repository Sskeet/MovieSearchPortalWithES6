// import { createMovieList } from "../popularMovies/popularMovie";
// import { getTopMovie ,movieSearch , addCollection} from "../services/movieService";
// import { createCollection } from "../popupModal/popupModal";
// import { createMovieSearchPanel } from "../header/search/search";
// import { addCollectionToFavs ,deleteFavMovieCollectionData ,createFavCollection} from "../favMovieCollection/favMovieCollection";


function createCollection(res){
	let showCollectionMoviesHtml = "";
	showCollectionMoviesHtml += `
      <div class="col-12" id= ${res.id}>
          <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/${res.poster_path}" alt="${res.original_title}">
          <div class="buttom-panel text-center mt-1">
              <form>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Want to add in</label>
                  <select class="form-control" id="exampleFormControlSelect1"  >
                    <option value="Action" id="Action">Action</option>
                    <option value="Favourates" id="Favourates">Favourates</option>
                    <option value="Adventure" id="Adventure">Adventure</option>
                    <option value="Fantasy" id="Fantasy">Fantasy</option>
                    <option value="Sci-Fi" id="Sci-Fi">Sci-Fi</option>
                    <option value="Thriller" id="Thriller">Thriller</option>
                  </select>
                </div>
              <form>
              <button type="button" class="insideCollectionButton btn btn-success" movieId="${res.id}">Done</button>
          </div>
      </div>
      `;
	document.getElementById("insideModalClass").innerHTML= showCollectionMoviesHtml;
}

export {createCollection}