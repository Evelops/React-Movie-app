 import React from "react";
 import PropTypes from "prop-types";
 import "./Movie.css";

 function Movie({id,year,title,summary,poster}){
     return(
          <div class="movies__movie">
              <img src={poster} alt={title} title={title}/>
        <div class="movie__data">
        <h3 class="movie__title">{title}</h3>
         <h5 class="movie__year">{year}</h5>
         <p class="movie_summary">{summary}</p>  
        </div>
     </div>
     );
 }

 Movie.propTypes={
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
 };
 
 export default Movie;
 // export를 해줘야 다른 js 파일에서 Movie라는 function Component를 사용할 수 있음!