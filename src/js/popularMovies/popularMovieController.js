import { createMovieList , movieList } from "../popularMovies/popularMovieView";
import { getTopMovie , getTopMovie1} from "../services/movieService";
var jQuery = require("jquery");


function loadMovieEventListner(){
	jQuery(document).on("click","#loadMovie",function(e){
		e.preventDefault();
		let pageNo = jQuery(this).attr("pageNumber");
		pageNo = parseInt(pageNo)+1;
		getTopMovie(pageNo,createMovieList);
		jQuery(this).attr("pageNumber",pageNo);
	});

	jQuery(document).on("click",".btnNext",function(e){
		e.preventDefault();
		scrollHorizontally('#topMoviesContainer2', 'next', true);
	});
}

function scrollHorizontally(containerId, moveTO, nextCall){
	const sectionElem = jQuery(containerId);
	const currentScroll = parseInt(sectionElem.scrollLeft(), 10);
	const width = Math.floor(sectionElem.outerWidth());
    const { scrollWidth } = sectionElem.get(0);
    if (moveTO === 'next') {
        sectionElem.animate({ scrollLeft: currentScroll + 200 }, 800);
    } else {
        sectionElem.animate({ scrollLeft: currentScroll - 800 }, 800);
    }
    if (nextCall) {
        if (scrollWidth - currentScroll === width) {
			const pagenumber = parseInt(sectionElem.attr('pagenumber'), 10) + 1;
			
			// if (serached) {
            //     const movieName = sectionElem.attr('moveName');
            //     getSearchedMovie(movieName, pagenumber, (data) => {
            //         createTopMoviesList('searchedMoviesContainer', data, userDataFlag);
            //     });
            // } else {
            //     getMovieRecords(pagenumber, (data) => {
            //         createTopMoviesList('topMoviesContainer', data, userDataFlag);
            //     });
            // }



			getTopMovie1(pagenumber, (data) => {
				movieList('topMoviesContainer', data, userDataFlag);
			});
            sectionElem.attr('pagenumber', pagenumber);
        }
    }

}

export {loadMovieEventListner};
