import React from 'react';

function Food(props) {
  return <h1>I like {props.fav}</h1>;
}

function App() {
  return (// 리엑트는 jsx를 사용하여 값을 전달하는데 재사용 가능한 compoment를 따로 만들어서 값을 argument로 전달하고 
    <div className="App">
      <h1>hi!!!</h1> 
      <Food  fav="kimchi"/>  
      <Food  fav="ramen"/>
      <Food  fav="dubu"/>
      <Food  fav="react"/>
    </div>
  );
}

export default App;
