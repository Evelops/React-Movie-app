import React from 'react';
import Prototypes from "prop-types";
class App extends React.Component{
  state={ // state는 React.Componet에 들어 있는 녀셕임. 객체 라고 할 수 있음
    count:0
  };
  add=()=>{
    this.setState(current=>({count:current.count+1}))
  };
  minus=()=>{
    this.setState(current=>({count:current.count-1}))  
  };
  render(){
    return <div>
      <h1>I am a class Component: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }

  
}
export default App;
