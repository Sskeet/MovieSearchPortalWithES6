
function createCollection(res3){
	let showCollectionMoviesHtml = "";
	showCollectionMoviesHtml += `
      <div class="col-12" id= ${res3.id}>
          <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/${res3.poster_path}" alt="${res3.original_title}">
          <div class="buttom-panel text-center mt-1">
              <form>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Want to add in</label>
                  <select class="form-control" id="exampleFormControlSelect1"  >
                    <option value="Action" id="Action">Action</option>
                    <option value="Adventure" id="Adventure">Adventure</option>
                    <option value="Fantasy" id="Fantasy">Fantasy</option>
                    <option value="Sci-Fi" id="Sci-Fi">Sci-Fi</option>
                    <option value="Thriller" id="Thriller">Thriller</option>
                  </select>
                </div>
              <form>
              <button type="button" class="insideCollectionButton btn btn-success" movieId="${res3.id}">Done</button>
          </div>
      </div>
      `;
	document.getElementById("insideModalClass").innerHTML= showCollectionMoviesHtml;
}

export {createCollection};