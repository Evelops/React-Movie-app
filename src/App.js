import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import Navigator from"./navigator";
import "./App.css"; 

class App extends React.Component {
  state = { // state는 React.Componet에 들어 있는 녀셕임. 객체 라고 할 수 있음
    isLoading: true,
    movie: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() { // component가 마운트 되자마자 첫번째로 호출되는 함수=> getMovies 함수는 api를 호출하는 함수 임으로 다음과 같이 사용됨.
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (  
      <section className="container">
         <Navigator/>
        {isLoading
          ? <div className="loader">
            <span className="loader__text">Loading..</span> 
          </div>
          : (
            <div className="movies">
              {
                movies.map(movie => (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                     ))}
            </div>
          )}
      </section>
    );
  }
}

export default App;
  // Nav 구현 해야됨. 