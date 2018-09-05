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

	jQuery(document).on("click","#btnNext1",function(e){
		e.preventDefault();
		console.log("coming here");
		scrollHorizontally('#searchSection', 'next', true , true);
	});
}

function scrollHorizontally(containerId, moveTO, nextCall , searched){
	const sectionElem = jQuery(containerId);
	const currentScroll = parseInt(sectionElem.scrollLeft(), 10);
	const width = Math.floor(sectionElem.outerWidth());
    const { scrollWidth } = sectionElem.get(0);
    if (moveTO === 'next') {
        sectionElem.animate({ scrollLeft: currentScroll + 500 }, 800);
    } else {
        sectionElem.animate({ scrollLeft: currentScroll - 800 }, 800);
    }
    if (nextCall) {
        if (scrollWidth - currentScroll === width) {
			const pagenumber = parseInt(sectionElem.attr('pagenumber'), 10) + 1;
			if (searched) {
					let moviSear = jQuery("#searchText").val();
               	movieSearch(moviSear, pagenumber, (data) => {
                 	createMovieSearchPanel('searchSection', data, userDataFlag);
                });
            } else {
                getTopMovie1(pagenumber, (data) => {
                    movieList('topMoviesContainer', data, userDataFlag);
				});
				
				sectionElem.attr('pagenumber', pagenumber);
            }

			// getTopMovie1(pagenumber, (data) => {
			// 	movieList('topMoviesContainer', data, userDataFlag);
			// });
            // sectionElem.attr('pagenumber', pagenumber);
        }
    }

}

export {loadMovieEventListner};
