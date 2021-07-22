 import React from "react";
 import ProTypes from "prop-types";

 function Movie({id,year,title,summary,poster}){
     return <h4>{title}</h4>;
 }

 Movie.propTypes={
    id: ProTypes.number.isRequired,
    year: ProTypes.number.isRequired,
    title: ProTypes.string.isRequired,
    summary: ProTypes.string.isRequired,
    poster: ProTypes.string.isRequired
 };
 
 export default Movie;
 // export를 해줘야 다른 js 파일에서 Movie라는 function Component를 사용할 수 있음!