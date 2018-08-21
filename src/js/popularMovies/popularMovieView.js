var jQuery = require("jquery");

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
	jQuery("#topMoviesContainer").append(showTopMoviesHtml);
}


function movieList(res){
  console.log(111);
  let showTopMoviesHtml ="";
  res.results.map(movieRecod => {
    showTopMoviesHtml += `
        <div class="col-2 movieContainer" id= ${movieRecod.id}>
        <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/${ movieRecod.poster_path}" alt="${movieRecod.original_title}" class="img-thumbnail rounded">
        </div>
    `;
  });
  jQuery("#topMoviesContainer2").append(showTopMoviesHtml);
}

export {createMovieList,movieList};