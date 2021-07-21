import React from 'react';
import Prototypes from "prop-types";
class App extends React.Component{
  state={ // state는 React.Componet에 들어 있는 녀셕임. 객체 라고 할 수 있음
    isLoading:true,
    movie:[]
  };
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading:false, book:true});
    },6000);
  }

  render(){
    const {isLoading}= this.state;
    return <div>{isLoading ? "Loading..":"We are ready"}</div>
  }

  
}
export default App;
