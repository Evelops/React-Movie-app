 import React from "react";
 import propTypes from "prop-types";
 import "./Movie.css";

 function Movie({id,year,title,summary,poster,genres}){
     return(
          <div className="movies__movie">
              <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
         <h5 className="movie__year">{year}</h5>
         <ul className="generes">{genres.map((genre,index) =>(<li key={index} className="generes__genere">{genre}</li>))}</ul>
         <p className="movie_summary">{summary}</p>  
        </div>
     </div>
     );
 }

 Movie.propTypes={
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres:propTypes.arrayOf.isRequired
 };
 
 export default Movie;
 // export를 해줘야 다른 js 파일에서 Movie라는 function Component를 사용할 수 있음!