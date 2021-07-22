import React from 'react';
import axios from "axios";

class App extends React.Component{
  state={ // state는 React.Componet에 들어 있는 녀셕임. 객체 라고 할 수 있음
    isLoading:true,
    movie:[]
  };

  getMovies = async () =>{
    const{
      data: {
        data:{movies}
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json");
    this.setState({movies, isLoading: false });
  };
  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading}= this.state;
    return <div>{isLoading ? "Loading..":"We are ready"}</div>
  }

  
}
export default App;
